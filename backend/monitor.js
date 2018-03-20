var express = require('express');
var bodyParser = require('body-parser')
var app 	= express();

app.use(express.bodyParser());

console.log('Weapon: ' + req.body.weapon);
console.log('Wear: ' + req.body.wear);
