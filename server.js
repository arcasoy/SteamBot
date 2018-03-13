const express = require('express')
const app = express();
const router = express.Router();
const path = path.join(__dirname + ‘views’);

app.set('views', path);  
app.use(‘/’,router);
  
app.get('/', function (req, res) {
  res.sendFile(path + 'index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})