// ==UserScript==
// @name         外链直接跳转(CSDN、掘金、简书、知乎...)
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  自动跳转，CSDN、掘金、简书、知乎、LeetCode等网站的跳转询问界面的自动跳转
// @author       荣顶
// @icon         https://greasyfork.org/packs/media/images/blacklogo16-5421a97c75656cecbe2befcec0778a96.png

// @match        *://link.csdn.net/*
// @match        *://link.juejin.cn/*
// @match        *://link.zhihu.com/*
// @match        *://www.jianshu.com/go-wild*
// @match        *://leetcode-cn.com/link/?target=*
// @match        *://leetcode.cn/link/?target=*

// @require      file://E:\Noah-Programs\ding-script\redirector.js

// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';
  // Your code here...
  const url = document.URL;
  let target = '';
  if (url.match(/jianshu.com\/go-wild/)) {
    target = url.split('url=')[1];
  } else {
    target = url.split('target=')[1];
  }
  target = decodeURIComponent(target);
  window.location.href = target;
})();
