import React, { Component } from 'react';
import './App.css';

class ExpenseListEntry extends Component {

  render() {
    var expense = this.props.expense;
    return (
      <div className='ExpenseListEntry'>
        {expense.date}  {expense.merchant}  {expense.amount}


      </div>
    );
  }
}

export default ExpenseListEntry;
