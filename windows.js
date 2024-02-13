const {app,BrowserWindow} = require('electron');
const path = require('path'); 

const { request } = require('http');
const { join } = require("path");
const url = require('url')

function pedidosWindow(arguments) {
    console.log(arguments.id)
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: join(__dirname, "preload.js"),
            sandbox: false,//uai ????   
            additionalArguments: ["myvarvalue", "secondvarvalue", "--another=something"]
        }
    })
    // win.loadFile('pages/details/pedidos-details.html')
    win.loadURL(url.format({
        slashes: true,
        protocol: 'file:',
        pathname: path.resolve(app.getAppPath(), "pages/details/pedidos-details.html"),
        query: {
          test: 'test',
          id:arguments.id
        }
      }));
}

module.exports = {pedidosWindow}