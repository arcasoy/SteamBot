const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
})

app.get('/', function (req, res) {
  res.sendFile('main.css');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
