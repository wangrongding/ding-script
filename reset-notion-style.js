// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.notion.so/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=notion.so
// @grant        none
// ==/UserScript==

(function () {
  

  // window.onload=()=>{
  window.onload = () => {
    setTimeout(() => {
      document.querySelector('.notion-board-group').style.width = '500px';
      document.querySelector(
        '#notion-app > div > div.notion-cursor-listener > div:nth-child(2) > div.notion-frame > div.notion-scroller.vertical.horizontal > div:nth-child(4) > div > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div',
      ).style.width = '500px';
      console.log('reset style complete！');
    }, 1000);
  };
  // Your code here...
})();
