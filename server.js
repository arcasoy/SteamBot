const express = require('express');
const mongo = require('mongodb');
const request = require('request');
const app = express();
const router = express.Router();

var MongoClient = require('mongodb').MongoClient
const mongourl = "mongodb://arcasoy1:3141592653589793238462643383279@cluster0-shard-00-00-ebxjm.mongodb.net:27017,cluster0-shard-00-01-ebxjm.mongodb.net:27017,cluster0-shard-00-02-ebxjm.mongodb.net:27017/SteamBot?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
const dbName = 'SteamBot';

//request the list of CSGO skins from api here which will be used to test if/make a collection for each skin
request('http://api.steamapis.com/market/items/730?api_key=3euKunlWOMTCoRTjGXWEbDAmJ8c', function (error, response, json) {
  var allItems = JSON.parse(json);
  console.log("There are", allItems.data.length, "CS:GO items on the market");

  //Connect to MongoDB and check connection. Then create collection for each skin if not already made
  MongoClient.connect(mongourl, function(err, client) {
     if(!err) {
       console.log("Connected to MongoDB");
     }
     if(err) {
       console.log("Could not connect to MongoDB");
     }

     const db = client.db(dbName);

     for (var i = 0; i < 2; i++) {
      var colName = allItems.data[i].market_name;
      console.log(colName);
      //having troubles figuring out a way to find current collections and compare them to new ones being made
      db.collections(function(err, collections) {
        console.log(collections);
        var curCol = db.collection(colName);
          db.createCollection(colName);
          //https://docs.mongodb.com/manual/reference/method/db.createCollection/
          console.log("Created collection for", colName);
      });
    };
  });
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
  console.log('Example app listening on port 3000')
});
