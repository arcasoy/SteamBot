const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();

app.get('/', function (req, res) {

  var options = {
    root: __dirname + '/views/',
  };

  res.sendFile('index.html', options, function (err) {
    if (err) {
      console.log('Send Failed');
    } else {
      console.log('Send Successful');
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
