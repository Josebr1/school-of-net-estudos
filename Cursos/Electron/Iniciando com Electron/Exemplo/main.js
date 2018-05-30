const electron = require('electron');
const app = electron.app;
const url = require('url');
const path = require('path');


let win;

app.on('ready', function(){
  win = new electron.BrowserWindow({
    width: 500,
    height: 350
  });

  win.setMenu(null);

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:'
  }));
});
