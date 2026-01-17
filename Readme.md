# 📰 AI Article Summarizer Chrome Extension

A lightweight Chrome extension that uses **Google Gemini API** to generate AI-powered summaries of web articles directly from your browser. You can get **brief summaries**, **detailed explanations**, or **bullet-point highlights** in one click.

---

## 🚀 Features

* Summarize any web article instantly
* Multiple summary formats:

  * Brief
  * Detailed
  * Bullet points
* Copy summary to clipboard
* Clean and simple UI
* Uses Google Gemini (fast & reliable)

---

## 🛠️ Tech Stack (Short & Clear)

* **JavaScript (ES6+)** – Core logic of the extension
* **Chrome Extensions API (Manifest V3)** – Browser integration
* **HTML + CSS** – Popup & settings UI
* **Google Gemini API** – AI-powered text summarization
* **Chrome Storage API** – Securely store API key

---

## 📂 Project Structure

```
├── manifest.json        # Extension configuration (MV3)
├── background.js        # Handles install & setup logic
├── content.js           # Extracts article text from pages
├── popup.html           # Extension popup UI
├── popup.css            # Popup styling
├── popup.js             # Popup logic & API calls
├── options.html         # Settings page (API key)
├── options.css          # Settings page styling
├── options.js           # Save & load API key
├── OIP.png              # Extension icon
└── README.md
```

---

## 🔑 Get Your Gemini API Key

1. Visit **Google AI Studio**
   👉 [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **Create API Key**
4. Copy the generated key

---

## ⚙️ How to Run the Chrome Extension (Step-by-Step)

1. Open **Google Chrome**
2. Go to: `chrome://extensions/`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked**
5. Select the project folder containing `manifest.json`
6. The extension will appear in your toolbar

📌 On first install, the settings page opens automatically — paste your **Gemini API key** and save.

---

## 🧪 How to Use

1. Open any article or webpage
2. Click the **AI Article Summarizer** extension icon
3. Choose summary type (Brief / Detailed / Bullets)
4. Click **Summarize This Page**
5. Copy the summary if needed

---

## 🔐 Privacy Notes

* Your API key is stored locally using Chrome Storage
* Page content is only sent to Gemini API when you click summarize
* No data is stored on external servers

---

## 📌 Notes

* Works best on article-style pages (blogs, news, documentation)
* Very short or script-heavy pages may not summarize correctly

---

## 🧑‍💻 Author

Built with ❤️ for learning and productivity.

---

## ⭐ If you like it

Give the repo a ⭐ and feel free to fork & improve it!
