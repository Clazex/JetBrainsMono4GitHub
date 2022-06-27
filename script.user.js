// ==UserScript==
// @name          JetBrainsMono4GitHub
// @namespace     https://userscript.clazex.net/
// @version       1.3.0
// @description   Change GitHub code view font to JetBrains Mono
// @license       MIT
// @author        Clazex
// @copyright     2022, Clazex
// @icon          https://github.githubassets.com/favicons/favicon.png
// @downloadURL   https://cdn.jsdelivr.net/gh/Clazex/JetBrainsMono4GitHub@latest/script.user.js
// @updateURL     https://cdn.jsdelivr.net/gh/Clazex/JetBrainsMono4GitHub@latest/script.user.js
// @supportURL    https://github.com/Clazex/JetBrainsMono4GitHub/issues
// @homepage      https://github.com/Clazex/JetBrainsMono4GitHub
// @run-at        document-body
// @grant         GM_addStyle
// @match         https://github.com/*
// ==/UserScript==

(function() {
  "use strict";
  GM_addStyle(".blob-code-inner { font-family: 'JetBrains Mono', monospace; }");
})();
