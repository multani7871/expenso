var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var db = require('./db/config.js');
var Expense = require('./db/models/expense');

var app = express();

app.all('*', function(req, res, next) {
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'build')));
app.use(morgan('combined'));

app.get('/expenses', function(req, res) {
  Expense.find({}, function(err, expenses) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(expenses);
      console.log('got expenses');
    }
  });
});

app.post('/expenses', function(req, res) {
  // console.log(req.body.data);
  var date = req.body.data.date;
  var merchant = req.body.data.merchant;
  var amount = req.body.data.amount;

  var expense = new Expense({
    date: date,
    merchant: merchant,
    amount: amount
  });

  expense.save(function(err, save) {
    if (err) {
      res.send('this is an error');
    }
    res.send(`${expense.date}, ${expense.merchant}, ${expense.amount}`);
  });
});

var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log(`listening on ${port}`);
});

module.exports = app;
