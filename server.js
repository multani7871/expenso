var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var db = require('./db/config.js');
var Expense = require('./db/models/expense');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
  var expense = new Expense({
    date: req.body.date,
    merchant: req.body.merchant,
    amount: req.body.amount
  })

  expense.save(function(err, save) {
    if (err) {
      return next(err);
    }
    res.send(`${expense.date}, ${expense.merchant}, ${expense.amount}`);
  });
});

var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log(`listening on ${port}`);
});

module.exports = app;
