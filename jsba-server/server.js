// grab express
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

// get objectId
var ObjectID = mongodb.ObjectID;

// create an express app
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

mongodb.MongoClient.connect(
  process.env.MONGODB_URI,
  function(err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    // mongo version ^3.0 will return a client object containing the database object
    db = database.db('js-based');
    console.log('Database connection ready');

    // Initialize the app.
    var server = app.listen(process.env.PORT || 8080, function() {
      var port = server.address().port;
      console.log('App now running on port', port);
    });
  }
);

app.get(function(req, res) {
  console.log('test');
});
