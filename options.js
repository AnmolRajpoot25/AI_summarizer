document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["model_api_key"], (result) => {
    if (result.model_api_key) {
      document.getElementById("api-key").value = result.model_api_key;
    }
  });

  document.getElementById("save-button").addEventListener("click", () => {
    const model_api_key = document.getElementById("api-key").value.trim();
    if (!model_api_key) return;

    chrome.storage.sync.set({ model_api_key }, () => {
      document.getElementById("success-message").style.display = "block";
      setTimeout(() => window.close(), 1000);
    });
  });
});
