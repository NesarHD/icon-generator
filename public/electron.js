const { app, BrowserWindow } = require("electron");
const path = require("path");

// Main window initialization
let mainWindow;

const createWindow = () => {
  // Main window configuration refer electron js documentaion of BrowserWindow
  mainWindow = new BrowserWindow(
    // Height and width if required.
    { width: 800, height: 600 }
  );

  mainWindow.setMenuBarVisibility(true);
  mainWindow.setFullScreen(false);
  // uncomment only in development
  mainWindow.loadURL(`http://localhost:3001`);

  // comment this in development
  // mainWindow.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
  mainWindow.on("closed", () => (mainWindow = null));
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
