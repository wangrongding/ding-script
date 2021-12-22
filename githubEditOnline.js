// ==UserScript==
// @name         github一键在线编辑
// @namespace    https://github.com/wangrongding/ding-script
// @version      0.1
// @description  github一键跳转在线编辑,实现在网页端上通过线上vsCode直观的对代码进行浏览与编译
// @author       汪荣顶
// @homeurl      https://github.com/wangrongding/ding-script/githubEditOnline.js
// @license      MIT
// @match        https://*.github.com/*/*
// @icon         http://ww1.sinaimg.cn/large/75314ac9ly1gsoywgjgl3j205k05kaab.jpg
// @require      file://E:\Noah-Programs\ding-script\githubEditOnline.js
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    var btn = document.createElement("BUTTON");
    btn.innerText = "在线编辑";
    btn.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 100px;
            background:#282C34;
            width: 100px;
            height: 50px;
            color:white;
            z-index:999;
            font-weight:bold;
            font-size:15px; 
            line-height:50px;
            border-radius:50px;
            `;
    setTimeout(() => {
        btn.onclick = toOnlineEditor;
    }, 2000);
    document.body.appendChild(btn);
    function toOnlineEditor() {
        console.log("toOnlineEditor");
        window.open(`${"https://github1s.com" + window.location.pathname}`);
    }
    // Your code here...
})();
