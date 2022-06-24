// ==UserScript==
// @name         echarts-options-quick-copy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://echarts.apache.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=apache.org
// @grant        none
// @require      file://E:\Noah-Programs\ding-script\echarts-options-quick-copy.js
// ==/UserScript==

(function () {
  'use strict';
  window.onload = function () {
    document.querySelectorAll('.doc-content-item-card h4').forEach((item) => {
      item.querySelectorAll('.path-parent')?.forEach((title) => {
        title.textContent = title.textContent.replace(/\./g, ':{');
        if (item.querySelector('.default-value')) {
          item.querySelector('.default-value').textContent = (
            item.querySelector('.default-value').textContent + '}'
          ).replace(/\=/g, ':');
        }
      });

      const el = document.createElement('div');
      el.innerText =
        item.querySelector('.path-base').innerText +
          ':' +
          item.querySelector('.default-value')?.innerText || '-' + '}';
      el.style.cssText = 'height:100px; 1px solid pink';
      item.appendChild(el);
    });
  };
})();
