import React, { Component } from 'react';
import $ from 'jquery';

class NewExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      merchant: '',
      amount: 0
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleMerchantChange = this.handleMerchantChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(event) {
    this.setState({date: event.target.value});
  }

  handleMerchantChange(event) {
    this.setState({merchant: event.target.value});
  }

  handleAmountChange(event) {
    this.setState({amount: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    var data = {
      date: this.state.date,
      merchant: this.state.merchant,
      amount: this.state.amount
    };

    $.post('/expenses', {
      data: data
    }).done((str) => {
      this.forceUpdate();
      console.log((`Submitted: ${JSON.stringify(this.state)}`));
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter New Expense: <br />
          <input type='text' onChange={this.handleDateChange} placeholder='date' />
          <input type='text' onChange={this.handleMerchantChange} placeholder='merchant' />
          <input type='text' onChange={this.handleAmountChange} placeholder='amount' />
          <button>
            Add expense
          </button>
        </label>
      </form>
    );
  }
}

export default NewExpense;
