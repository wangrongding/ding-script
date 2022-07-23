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
// @run-at       document-end
// ==/UserScript==

(function () {
  const btn = document.createElement('BUTTON');
  btn.innerText = '在线编辑';
  btn.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 100px;
    // position: relative;
    color:white;
    color-scheme:dark;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-weight: bolder;
    font-size: 14px;
    margin-left: 8px !important;
    display: inline-block;
    padding: 5px 16px;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid rgba(205, 217, 229, 0.1);
    border-radius: 6px;
    background: rgb(52, 125, 57);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    `;
  //   document.querySelector(".file-navigation").appendChild(btn);
  /*

    // insert into DOM //
    // locate file navigation
    let nav = document.getElementsByClassName("file-navigation")[0] || document.getElementsByClassName("gh-header-actions")[0];

    // insert element
    if (nav !== undefined) {
        nav.append(a_element);
    }

*/
  document.body.appendChild(btn);
  btn.onclick = toOnlineEditor;
  function toOnlineEditor() {
    window.open(`${`https://github1s.com${window.location.pathname}`}`);
  }
  // Your code here...
}());
