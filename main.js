const {app, BrowserWindow} = require('electron');

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 250, height: 200});

    // and load the index.html of the app.
    win.loadFile('src/index.html');
}

app.on('ready', createWindow);