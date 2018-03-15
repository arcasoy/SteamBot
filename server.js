const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/views/'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
