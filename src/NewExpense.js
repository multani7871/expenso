import React, { Component } from 'react';

class NewExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {date: '', merchant: '', amount: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An expense was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter New Expense: <br />
          <input type='text' value={this.state.date} onChange={this.handleChange} placeholder="date" />
          <input type='text' value={this.state.merchant} onChange={this.handleChange} placeholder="merchant" />
          <input type='text' value={this.state.amount} onChange={this.handleChange} placeholder="amount" />
          <button>
            Add expense
          </button>
        </label>
      </form>
    );
  }
}

export default NewExpense;
