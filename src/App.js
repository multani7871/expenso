import React, { Component } from 'react';
import './App.css';
import NewExpense from './NewExpense.js'
import ExpenseList from './ExpenseList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Expenso!</h2>
        </div>
        <p className="Instructions">
          Enter your transactions below to easily track your spending!
        </p>
        <NewExpense />
        <div>
          <ExpenseList />
        </div>
      </div>
    );
  }
}

export default App;
