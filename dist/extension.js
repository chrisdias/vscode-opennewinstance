(()=>{"use strict";var e={549:e=>{e.exports=require("vscode")}},o={};function t(s){var n=o[s];if(void 0!==n)return n.exports;var r=o[s]={exports:{}};return e[s](r,r.exports,t),r.exports}var s={};(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const o=t(549);e.activate=function(e){let t=o.commands.registerCommand("extension.openNewInstance",(e=>{o.commands.executeCommand("vscode.openFolder",e,!0)})),s=o.commands.registerCommand("extension.scopeToHere",(e=>{o.commands.executeCommand("vscode.openFolder",e,!1)}));e.subscriptions.push(t),e.subscriptions.push(s)},e.deactivate=function(){}})(),module.exports=s})();