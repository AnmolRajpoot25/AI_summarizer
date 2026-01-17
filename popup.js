document.getElementById("summarize").addEventListener("click", async () => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = '<div class="loading"><div class="loader"></div></div>';

  const summaryType = document.getElementById("summary-type").value;

  // Get API key
  chrome.storage.sync.get(["model_api_key"], ({ model_api_key }) => {
    if (!model_api_key) {
      resultDiv.textContent =
        "API key not found. Please set your API key in the extension options.";
      return;
    }

   chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  chrome.tabs.sendMessage(
    tab.id,
    { type: "GET_ARTICLE_TEXT" },
    async (res) => {
      if (chrome.runtime.lastError) {
        resultDiv.textContent =
          "This page cannot be summarized. Please refresh the page.";
        return;
      }

      if (!res || res.text === undefined) {
        resultDiv.textContent =
          "Could not extract article text from this page.";
        return;
      }

      try {
        const summary = await getGeminiSummary(
          res.text,
          summaryType,
          model_api_key
        );
        resultDiv.textContent = summary;
      } catch (error) {
        resultDiv.textContent =
          error.message || "Failed to generate summary.";
      }
    }
  );
});


  });
});

document.getElementById("copy-btn").addEventListener("click", () => {
  const summaryText = document.getElementById("result").innerText;
  if (!summaryText.trim()) return;

  navigator.clipboard.writeText(summaryText).then(() => {
    const btn = document.getElementById("copy-btn");
    const original = btn.innerText;
    btn.innerText = "Copied!";
    setTimeout(() => (btn.innerText = original), 2000);
  });
});

async function getGeminiSummary(text, summaryType, apiKey) {
  const maxLength = 20000;
  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  let prompt;
  switch (summaryType) {
    case "brief":
      prompt = `Provide a brief summary of the following article in 2-3 sentences:\n\n${truncatedText}`;
      break;
    case "detailed":
      prompt = `Provide a detailed summary of the following article:\n\n${truncatedText}`;
      break;
    case "bullets":
      prompt = `Summarize the article in 5-7 bullet points using "- ":\n\n${truncatedText}`;
      break;
    default:
      prompt = `Summarize the following article:\n\n${truncatedText}`;
  }


const res = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    })
  }
);

if (!res.ok) {
  const err = await res.json();
  throw new Error(err.error?.message || "Gemini API failed");
}

const data = await res.json();
return (
  data?.candidates?.[0]?.content?.parts?.[0]?.text ||
  "No summary generated."
);
}
