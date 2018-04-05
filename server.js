const express = require('express');
const mongo = require('mongodb');
const app = express();
const router = express.Router();

var MongoClient = require('mongodb').MongoClient
var mongourl = "mongodb://Arcasoy:Clo12!dog@mycluster0-shard-00-00.mongodb.net:27017,mycluster0-shard-00-01.mongodb.net:27017,mycluster0-shard-00-02.mongodb.net:27017/admin?ssl=true&replicaSet=Mycluster0-shard-0&authSource=admin";

MongoClient.connect(mongourl, function(err, db) {
   db.close();
});

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/', function (req, res) {
  res.sendFile('main.css');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
