// Basic init
const electron = require('electron');
const { app, BrowserWindow } = electron;

// Let electron reloads by itself when webpack watches changes in ./app/
if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(__dirname);
}

// To avoid being garbage collected
let mainWindow;

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);

    // Remove default menu
    mainWindow.setMenu(null);
    if (process.env.NODE_ENV === 'development') {
        // Open Chrome Dev Tools
        mainWindow.openDevTools();
    }

    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});

app.on('login', (event, webContents, request, authInfo, callback) => {
    event.preventDefault();
    callback('Parry', '123456');
});
