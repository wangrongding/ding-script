// ==UserScript==
// @name         custom文档页面
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://192.168.1.114:8100/doc.html
// @icon         https://www.google.com/s2/favicons?domain=1.114
// @grant        none
// @require      file://E:\NoahSpace\Noah-Item\tampermonkey-template\custom.js
// ==/UserScript==

(function () {
    "use strict";
    //=======================================================================

    let input = document.getElementById("searchTxt");
    input.style.cssText =
        "width:500px;height:40px;border:1px solid white;margin-right:50px;";
    input.focus();
    input.onkeydown = function (event) {
        var e = event || window.event;
        if (e && e.keyCode == 13) {
            document.getElementById("spanSearch").click();
        } else if (e && e.keyCode == 27) {
            input.focus();
        }
    };
    let select = document.getElementById("sbu-group-sel");
    document.body.onkeydown = function (e) {
        if (e && e.keyCode == 27) {
            input.focus();
        } else if (e && e.keyCode == 32) {
            select.focus();
        } else if (e && e.keyCode == 192) {
            input.focus();
        } else if (e && e.keyCode == 13) {
            document.getElementById("spanSearch").click();
        }
    };

    //=======================================================================
})();
