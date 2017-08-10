var mongoose = require('mongoose');

var expenseSchema = mongoose.Schema({
  date: {type: String},
  merchant: {type: String},
  amount: {type: Number}
});

var Expense = mongoose.model('Expense', expenseSchema);

// var e = Expense();
// e.date = 'meh'
// e.merchant = 'ma';
// e.amount = 12;
//
// e.save(function (err, result) {
//   if (err) {
//     console.log(err);
//   }
// })

module.exports = Expense;
