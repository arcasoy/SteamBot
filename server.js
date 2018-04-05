const express = require('express');
const mongo = require('mongodb');
const app = express();
const router = express.Router();

var MongoClient = require('mongodb').MongoClient
var mongourl = "mongodb://arcasoy1:3141592653589793238462643383279@cluster0-shard-00-00-ebxjm.mongodb.net:27017,cluster0-shard-00-01-ebxjm.mongodb.net:27017,cluster0-shard-00-02-ebxjm.mongodb.net:27017/SteamBot?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

MongoClient.connect(mongourl, function(err, db) {
   sleep(30);
   db.close();
   if(!err) {
     console.log("Connected to MongoDB");
   }
   if(err) {
     console.log("Could not connect to MongoDB");
   }
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
