chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({cursor: 'blue'});
});