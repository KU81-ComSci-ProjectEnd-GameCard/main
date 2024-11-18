"use strict";

const electron = require('electron')
const main = new Object();

window.addEventListener('DOMContentLoaded', () => {
  electron.ipcRenderer.invoke('DOMContentLoaded');
})

electron.contextBridge.exposeInMainWorld("rendererPreload",{
  doPredict: (data) => electron.ipcRenderer.invoke('request_doPredict',data),
  getcardLibPromise: electron.ipcRenderer.invoke('request_getCardLib')
});

