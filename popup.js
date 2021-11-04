const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        let dataCursor = event.target.getAttribute('data-cursor');
        chrome.storage.sync.set({cursor: dataCursor});
        //console.log(dataCursor);
        setCursor();
    });
});

function setCursor() {
    chrome.storage.sync.get('cursor', ({cursor}) => {
        chrome.tabs.query({}, function(tabs) {
            tabs.forEach(function (tab) {
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    files: ['content.js']
                });
            });
        });
    });
}