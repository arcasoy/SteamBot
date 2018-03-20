const connect = require('connect');
const express = require('express');
const app = express();
const con = connect();
const router = express.Router();
var bodyParser = require('body-parser')

con.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/', function (req, res) {
  res.sendFile('main.css');
});

app.post('/', function (req, res) {
console.log('Weapon: ' + req.body.weapon);
console.log('Wear: ' + req.body.wear);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
