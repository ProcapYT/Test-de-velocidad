const { app, BrowserWindow, Menu } = require('electron');
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: path.join(__dirname, "assets", "icon.png"),
      webPreferences: {
        nodeIntegration: true
      }
    });

    win.maximize();
    win.setFullScreenable(false);

    // win.loadFile('./renderer/index.html'); // Carga un archivo HTML en la ventana

    win.on('closed', () => {
    app.quit();
    });

    Menu.setApplicationMenu(null);
};



app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});