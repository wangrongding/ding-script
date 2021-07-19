// ==UserScript==
// @name         谷歌翻译绕过代码块
// @namespace    https://github.com/wangrongding/ding-script.git
// @version      1.0
// @description  使用谷歌翻译插件翻译网页时，绕过代码块和一些指定的无需翻译的元素
// @author       汪荣顶
// @homeurl      https://github.com/wangrongding/ding-script.git
// @homeurl      https://greasyfork.org/zh-CN/scripts/
// @match        https://github.com/*
// @match        https://npmjs.com/*
// @match        https://stackoverflow.com/*
// @match        https://*.google.com/*
// @license      MIT
// @grant        none
// ==/UserScript==
/*jshint esversion: 6 */
(function () {
    "use strict";
    const passTransList = ["pre"];
    function noTranslate(array) {
        array.forEach((name) => {
            [...document.querySelectorAll(name)].forEach((node) => {
                if (node.className.indexOf("notranslate") === -1) {
                    node.classList.add("notranslate");
                }
            });
        });
    }
    if (window.location.hostname.indexOf("github") !== -1) {
        // 以下为github中不需要翻译的元素,可根据需求自定义配置
        const githubSelector = [
            ".bg-gray-light.pt-3.hide-full-screen.mb-5",
            "summary.btn.css-truncate",
            ".commit-author",
            ".js-navigation-open.link-gray-dark",
            ".Box-title",
            ".BorderGrid-cell > div.mt-3 > a.muted-link",
            ".BorderGrid-cell > ul.list-style-none",
            ".hx_page-header-bg",
            ".list-style-none", //仓库名
            ".text-bold", //首页人名,仓库名
            "div[data-repository-hovercards-enabled] .body > div .flex-items-baseline",
            ".js-header-wrapper", //nav
            ".file-navigation", //代码仓库按钮
            ".Details:not(.Details--on) .Details-content--hidden-not-important", //代码仓库和顶部导航
        ];
        passTransList.push.apply(passTransList, githubSelector);
    }
    window.onload = () => {
        setTimeout(function () {
            //对于github的插件(我使用的octotree)
            const githubPluginSelector = [
                ".github-repo-size-div",
                ".octotree-tree-view",
            ];
            noTranslate(githubPluginSelector);
            noTranslate(passTransList);
        }, 1500);
        console.log(
            document.querySelectorAll(".text-bold"),
            "********************"
        );
    };
})();
