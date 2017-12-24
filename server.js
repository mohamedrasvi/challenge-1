// server.js

const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

let fs = require("fs"),
json;

function readJsonFileSync(filepath, encoding){

if (typeof (encoding) == 'undefined'){
    encoding = 'utf8';
}
let file = fs.readFileSync(filepath, encoding);
return JSON.parse(file);
}

function getConfig(file){

let filepath = './config/' + file;
return readJsonFileSync(filepath);
}
const db             = getConfig('orderbook.json');

require('./app/routes')(app, db);

app.listen(port, () => {
  console.log('We are live on ' + port);
});