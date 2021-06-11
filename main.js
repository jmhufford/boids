const { app, BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
    win = new BrowserWindow();
    win.loadFile('index.html')

    win.on('closed', () => {
        win = null;
    })
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform == 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win == null) {
        createWindow()
    }
})