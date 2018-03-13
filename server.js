const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();

app.set('views', 'views');  
  
app.get('/', function (req, res) {
  res.sendFile('/views/index.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})