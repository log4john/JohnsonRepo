var express = require('express')
  , cors = require('cors')
  , app = express();
 
app.use(cors());
 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  res.end("hello World");
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});