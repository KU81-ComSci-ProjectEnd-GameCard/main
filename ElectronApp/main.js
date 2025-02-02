"use strict";

const nodeCPc = require('node:child_process')
const nodeFS = require("node:fs");
const nodePath = require('node:path')
const electron = require('electron/main')
const main = new Object();

main.regExp_un1 = RegExp('^(?<cardName>[A-Za-z0-9 _.]+)(?:\\+(?<upgrade>[0-9]+)){0,1}\\.png$');
main.rawCardList = nodeFS.readdirSync("www/cardImgs");
main.cardList = {};

for (let tmpe of main.rawCardList) {
  if (tmpe === "Unused") { continue; }
  let tmp1 = tmpe.match(main.regExp_un1).groups['cardName'];
  let tmp2 = tmpe.match(main.regExp_un1).groups['upgrade'];
  tmp2 = parseInt(tmp2 ? tmp2 : "0");
  let tmp3 = main.cardList[tmp1] ? main.cardList[tmp1] : 0;
  main.cardList[tmp1] = Math.max(
    tmp3,
    tmp2
  );
}

main.createWindow = () => {
  // Create the browser window.
  const mainWindow = new electron.BrowserWindow({
    webPreferences: {
      preload: nodePath.join(__dirname, 'preload.js'),
      sandbox: true,
      defaultEncoding: "uft-8",
      defaultMonospaceFontSize: 16,
      devTools: false,
      disableHtmlFullscreenWindowResize: true,
      scrollBounce: true,
    },
    autoHideMenuBar: true,
    title: "Slay The Spire End Card Picking Predictor",
    center: true,
    // Got ratio 8920:4904
    width: 1091,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    useContentSize: true,
    resizable: true,
    maximizable: true,
    fullscreenable: true,
    // transparent: true,
    // backgroundMaterial: 'acrylic',
    // backgroundColor: "#00808080",
    backgroundColor: "#000000",
    vibrancy: "appearance-based",
    visualEffectState: "followWindow",

  })

  // and load the index.html of the app.
  mainWindow.loadFile('./www/main.html');
  mainWindow.setBackgroundMaterial('acrylic');

}

main.request_getCardLib = () => {
  return main.cardList;
}

main.request_doPredict = (event, data) => {
  let tmp = nodeCPc.spawnSync("./python/bin/python.exe", ['./main.py'], { input: data, cwd: "./ModelSys" });
  return tmp.stdout.toString();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron.app.whenReady().then(() => {
  electron.ipcMain.handle("DOMContentLoaded", () => { });
  electron.ipcMain.handle("request_getCardLib", main.request_getCardLib);
  electron.ipcMain.handle("request_doPredict", main.request_doPredict);
  main.createWindow();

  electron.app.on('activate', () => {
    main.createWindow();
  })
})

electron.app.on('window-all-closed', () => {
  electron.app.quit();
})

