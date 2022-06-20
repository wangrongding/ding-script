// ==UserScript==
// @name         无限循环刷新相应的页面
// @namespace    https://github.com/wangrongding/ding-script
// @version      0.1
// @description  (需要自己改写match地址,默认匹配规则是所有URL)
// @author       汪荣顶
// @homeurl      https://github.com/wangrongding/ding-script/loopReload.js
// @updateURL    https://github.com/wangrongding/ding-script/loopReload.js
// @match        https://*.*
// @exclude      none
// @icon         http://ww1.sinaimg.cn/large/75314ac9ly1gsoywgjgl3j205k05kaab.jpg
// @grant        none
// @license      MIT
// @require      file://localPath
// ==/UserScript==

(function () {
  'use stric';

  // script template by 汪荣顶
  // Your code here...
  setInterval(() => {
    window.location.reload();
  }, 500);
}());
