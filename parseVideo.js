// ==UserScript==
// @name         解析视频
// @namespace    https://github.com/wangrongding/ding-script
// @version      0.1
// @description  解析视频
// @author       汪荣顶
// @homeurl      https://github.com/wangrongding/ding-script/githubEditOnline.js
// @license      MIT
// @include      *://m.youku.com/v*
// @include      *://m.youku.com/a*
// @include      *://v.youku.com/v_*
// @include      *://*.iqiyi.com/v_*
// @include      *://*.iqiyi.com/w_*
// @include      *://*.iqiyi.com/a_*
// @include      *://*.iqiyi.com/adv*
// @include      *.iq.com/play/*
// @include      *://*.le.com/ptv/vplay/*
// @include      *v.qq.com/x/cover/*
// @include      *v.qq.com/x/page/*
// @include      *v.qq.com/*play*
// @include      *v.qq.com/cover*
// @icon         http://ww1.sinaimg.cn/large/75314ac9ly1gsoywgjgl3j205k05kaab.jpg
// @require      file://E:\Noah-Programs\ding-script\githubEditOnline.js
// @grant        none
// ==/UserScript==

(function () {
  const btn = document.createElement('BUTTON');
  btn.innerText = '解析视频';
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
    // console.log("toOnlineEditor");
    // window.open(`${"https://xxxxxxx.com" + window.location.pathname}`);
  }
  // Your code here...
}());
