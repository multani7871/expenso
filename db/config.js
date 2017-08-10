require('dotenv').config();

var mongoose = require('mongoose');
var mongoServer = process.env.MONGO_SERVER;
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;

var mongoURI = `mongodb://${mongoUsername}:${mongoPassword}@${mongoServer}`;

mongoose.connect(mongoURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo connection open');
});

module.exports = db;
