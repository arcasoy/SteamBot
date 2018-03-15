const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/views/'));

app.get('/', function (req, res) {

  var options = {
    undefined;
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
