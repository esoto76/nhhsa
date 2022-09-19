import { join } from 'path';
import { app, BrowserWindow } from 'electron';

process.env.DIST = join(__dirname, '..');
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : join(process.env.DIST, '../public');

let win: BrowserWindow | null;
// Here, you can also use other preload
const preload = join(__dirname, './preload.js');
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const url = process.env['VITE_DEV_SERVER_URL'];

function createWindow() {
  win = new BrowserWindow({
    icon: join(process.env.PUBLIC, 'icon.png'),
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload
    }
  });
  win.setMenuBarVisibility(false);

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  if (app.isPackaged) {
    win.loadFile(join(process.env.DIST, 'index.html'));
  } else {
    win.loadURL(url);
  }
}

app.on('window-all-closed', () => {
  win = null;
});

app.whenReady().then(createWindow);
