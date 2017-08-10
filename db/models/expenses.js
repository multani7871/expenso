var mongoose = require('mongoose');

var expensesSchema = mongoose.Schema({
  date: { type: String, required: true },
  merchant: { type: String, required: true }
  amount: { type: String, required: true },
});

var Expense = mongoose.model('Expense', expensesSchema);

module.exports = Expense;
