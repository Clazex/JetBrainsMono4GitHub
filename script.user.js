// ==UserScript==
// @name         JetBrainsMono4GitHub
// @namespace    https://userscript.clazex.net/
// @version      1.1.1
// @description  Change GitHub code view font to JetBrains Mono
// @license      MIT
// @author       Clazex
// @copyright    2022, Clazex
// @updateURL    https://cdn.jsdelivr.net/gh/Clazex/JetBrainsMono4GitHub@latest/script.user.js
// @downloadURL  https://cdn.jsdelivr.net/ghClazex/JetBrainsMono4GitHub@latest/script.user.js
// @supportURL   https://github.com/Clazex/JetBrainsMono4GitHub/issues
// @homepage     https://github.com/Clazex/JetBrainsMono4GitHub
// @match        https://github.com/*
// @icon         https://github.githubassets.com/favicons/favicon.png
// @grant        none
// ==/UserScript==

(function() {
  "use strict";

  var fonts = document.createElement("link");
  fonts.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap";
  fonts.rel = "stylesheet";
  document.head.appendChild(fonts);

  var style = document.createElement("style");
  style.innerHTML = ".highlight * { font-family: 'JetBrains Mono', monospace; }";
  document.body.appendChild(style);
})();
