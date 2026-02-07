import { app, BrowserWindow } from 'electron'
import path from "node:path"

const preload = path.join(import.meta.dirname, "preload.js")
console.log("preload", preload)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
