// ==UserScript==
// @name         githubEditOnline
// @namespace    https://github.com/wangrongding/ding-script
// @version      0.1
// @description  githubEditOnline
// @author       汪荣顶
// @homeurl      https://github.com/wangrongding/ding-script
// @license      MIT
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @match        https://github.com/*
// @require      file://E:\NoahSpace\Noah-Item\ding-script\githubEditOnline.js
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    setTimeout(() => {
        var btn = document.createElement("BUTTON");
        btn.innerText = "在线编辑";
        btn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 100px;
        background:#282C34;
        width: 100px;
        height: 50px;
        line-height:50px;
        color:white;
        z-index:999;

        `;
        document.body.appendChild(btn);
    }, 500);
    // Your code here...
})();
