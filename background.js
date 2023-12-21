chrome.browserAction.onClicked.addListener(function(tab) {
    // 在这里处理插件图标被点击的事件，比如发送一个消息给content script
    chrome.tabs.sendMessage(tab.id, {action: 'toggleSidebar'});
  });