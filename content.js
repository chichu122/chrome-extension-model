let sidebar = document.createElement('div');
sidebar.attachShadow({mode: 'open'});
sidebar.shadowRoot.innerHTML = `
  <style>
    :host {
      position: fixed;
      right: 0;
      top: 0;
      width: 420px; /* 侧边栏宽度 */
      height: 100%;
      background-color: #f9f9f9;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    }
    :host(.active) {
      transform: translateX(0);
    }
  </style>
  <div>这是侧边栏内容</div>
`;
document.body.appendChild(sidebar);

// 创建一个style元素来控制页面宽度
let style = document.createElement('style');
style.id = 'myStyle';
document.head.appendChild(style);

// 监听来自background.js的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleSidebar') {
    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      style.textContent = '';
    } else {
      sidebar.classList.add('active');
      style.textContent = `
      html {
        width: calc(100% - 420px); /* width of sidebar + margin */
        position: relative !important;
        min-height:100vh !important;
      }
      `;
    }
  }
});