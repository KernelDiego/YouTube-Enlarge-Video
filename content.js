chrome.storage.sync.get('cursor', ({cursor}) => {
    document.body.style.cursor = 'url("https://raw.githubusercontent.com/trecno/browser-addon/main/images/cursor_' + cursor + '.png"), auto';
});