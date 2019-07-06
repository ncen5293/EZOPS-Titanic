import React, { Component } from 'react';
import Passengers from './components/Passengers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Passengers />
        </header>
      </div>
    );
  }
}

export default App;
