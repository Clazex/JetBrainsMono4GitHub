// ==UserScript==
// @name         JetBrainsMono4GitHub
// @namespace    https://userscript.clazex.net/
// @version      1.0.0
// @description  Change GitHub code view font to JetBrains Mono
// @license      MIT
// @author       Clazex
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
  "use strict";

  var fonts = document.createElement("link");
  fonts.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap";
  fonts.rel = "stylesheet";
  document.head.appendChild(fonts);

  var style = document.createElement("style");
  style.innerHTML = ".highlight * { font-family: 'JetBrains Mono' }";
  document.body.appendChild(style);
})();
