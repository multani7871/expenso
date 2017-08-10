import React, { Component } from 'react';
import './App.css';
import NewExpense from './NewExpense.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Expenso!</h2>
        </div>
        <p className="App-intro">
          Enter your transactions below to easily track your spending!
        </p>
        <NewExpense />
      </div>
    );
  }
}

export default App;
