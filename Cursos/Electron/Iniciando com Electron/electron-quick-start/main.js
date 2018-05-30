const electron = require('electron');
const app = electron.app;
const url = require('url');
const path = require('path');
const dialog = electron.dialog;
const Menu = electron.Menu;

let win;

app.on('ready', function(){
  win = new electron.BrowserWindow({
    width: 300,
    height: 300
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:'
  }));

  //win.webContents.openDevTools();

  win.on('closed', function(){
    console.log('closed');    
  });

  /*dialog.showMessageBox(win, {
    type: 'none',
    message: 'Hello',
    title: 'SON',
    buttons:[]
  });*/

  /*dialog.showOpenDialog(win, {
    title: 'Select a new file from Electron',
    buttonLabel: 'SON'
  })*/
  
  //dialog.showErrorBox('Title', 'Content');

  /*dialog.showSaveDialog(win, {
    title: 'Title',
    buttonLabel: 'Save'
  });*/

  let menuTemplate = [
    {
      label: 'Menu 1'
    },
    {
      label: 'Menu 2',
      submenu: [
        {
          label: 'Hello',
          click: function(item, win, event){
            dialog.showMessageBox(win, {
              type: 'none',
              message: 'Hello',
              title: 'SON',
              buttons:[]
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
});

app.on('before-quit', function(){
  console.log('Bye bye app');
});

