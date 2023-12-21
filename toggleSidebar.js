(function() {
    var sidebar = document.getElementById('mySidebar');
    if (!sidebar) {
        let div = document.createElement('div');
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.position = 'fixed';
        div.style.top = '0';
        div.style.right = '0';
      //   div.style.zIndex = '10000';
    
        let shadow = div.attachShadow({mode: 'open'});
    
        let sidebar = document.createElement('div');
        sidebar.style.width = '420px';
        sidebar.style.height = '100%';
        sidebar.style.position = 'fixed';
        sidebar.style.top = '0';
        sidebar.style.right = '0';
        sidebar.style.backgroundColor = 'gray';
        sidebar.innerText = 'This is the sidebar';
        shadow.appendChild(sidebar);
    
      //   let style_1 = document.createElement('style');
      //   style_1.textContent = `
      //     body {
      //       margin-right: 420px; /* width of sidebar + margin */
      //       transition: margin-right 0.5s; /* smooth transition */
      //     }
      //   `;
      //   shadow.appendChild(style_1);
    
        document.body.appendChild(div);
  
        // 调整主页面内容的宽度
      //   let mainContent = document.querySelector('head'); // 获取body元素
      //   mainContent.style.width = `calc(100% - ${sidebar.style.width})`;
      //   mainContent.style.marginRight = sidebar.style.width;
        let style = document.createElement('style');
        style.textContent = `
          html {
            width: calc(100% - 500px); /* width of sidebar + margin  ${sidebar.style.width} */
            position: relative !important;
            min-height:100vh !important;
          }
        `;
      //   shadow.appendChild(style);
    
        document.head.appendChild(style);
    } else if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      // 显示侧边栏
      sidebar.style.display = 'block';
    } else {
      // 隐藏侧边栏
      sidebar.style.display = 'none';
    }
  })();