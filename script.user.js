// ==UserScript==
// @name          JetBrainsMono4GitHub
// @namespace     https://userscript.clazex.net/
// @version       2.1.0
// @description   Change GitHub code view font to JetBrains Mono
// @license       MIT
// @author        Clazex
// @copyright     2022, Clazex
// @icon          https://github.githubassets.com/favicons/favicon.png
// @downloadURL   https://raw.githubusercontent.com/Clazex/JetBrainsMono4GitHub/main/script.user.js
// @updateURL     https://raw.githubusercontent.com/Clazex/JetBrainsMono4GitHub/main/script.user.js
// @supportURL    https://github.com/Clazex/JetBrainsMono4GitHub/issues
// @homepage      https://github.com/Clazex/JetBrainsMono4GitHub
// @run-at        document-body
// @grant         GM_addStyle
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_registerMenuCommand
// @grant         GM_unregisterMenuCommand
// @match         https://github.com/*
// ==/UserScript==

(function() {
  'use strict';

  const DEFAULT_FONT = `'Jetbrains Mono'`;

  function getFont() {
    return GM_getValue('font', DEFAULT_FONT);
  }

  function setFont(font) {
    if (getFont() === font) {
      return;
    }

    GM_setValue('font', font);
    applyFont(font);
  }

  let style;
  function applyFont(font = getFont()) {
    style?.remove();
    style = GM_addStyle(
      `pre, code.markdown-body, .blob-code-inner, .CodeMirror-lines, .react-code-text, .diff-text, ul[aria-label="Code Navigation"] .PRIVATE_TreeView-item-content-text span { font-family: ${font}, monospace !important }`
      + '.blob-code-inner, .CodeMirror-lines, .react-code-text, .diff-text { font-size: 1em !important; }'
    );

    unregisterMenuCommand();
    registerMenuCommand(font);
  }

  function updateFont() {
    const oldFont = getFont();
    let newFont = '';

    while (true) {
      newFont = prompt('Specify font family', oldFont);

      if (newFont == null) {
        return;
      }

      if (newFont.length > 0) {
        break;
      }
    }

    setFont(newFont);
  }

  let menuCommandId = null;
  function registerMenuCommand(font) {
    menuCommandId = GM_registerMenuCommand("Current font: " + font, updateFont);
  }

  function unregisterMenuCommand() {
    if (menuCommandId === null) {
      return;
    }

    GM_unregisterMenuCommand(menuCommandId);
    menuCommandId = null;
  }

  applyFont();
})();
