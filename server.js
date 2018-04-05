const express = require('express');
const mongo = require('mongodb');
const app = express();
const router = express.Router();

var MongoClient = require('mongodb').MongoClient
var mongourl = "mongodb://localhost:3000/Cluster0";

MongoClient.connect(mongourl, function(err, db) {
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
