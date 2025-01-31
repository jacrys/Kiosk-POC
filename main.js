const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    show: false,
    fullscreen: true
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})