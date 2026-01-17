chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["model_api_key"], (result) => {
    if (!result.model_api_key) {
      chrome.tabs.create({
        url: chrome.runtime.getURL("options.html")
      });
    }
  });
});
