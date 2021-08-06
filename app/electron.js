const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 480,
    webPreferences: {
    }
  });

  window.loadFile('app/core/index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  app.quit()
});