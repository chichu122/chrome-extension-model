chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.executeScript(tab.id, {file: 'toggleSidebar.js'});
  });
  