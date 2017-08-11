import React, { Component } from 'react';
import './App.css';
import ExpenseListEntry from './ExpenseListEntry.js';
import $ from 'jquery';

class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    };
  }

  componentDidMount() {
    getExpenses.call(this, (data) => {
      this.setState({
        expenses: data
      });
    });
  }

  render() {
    var expenses = this.state.expenses;
    return (
      <div className='ExpenseList'>
        Date  Merchant  Amount
          {expenses.map(expense =>
            <ExpenseListEntry expense={expense} key={expense._id} />
          )}

        </div>
    );
  }
}

export default ExpenseList;

var getExpenses = (cb) => {
  $.get('/expenses', function(data) {
  })
  .done((data) => {
    if (cb) {
      cb(data.reverse());
    }
  })
  .fail((response) => {
    console.log(response);
  });
};
