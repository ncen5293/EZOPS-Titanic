import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Passengers from './components/Passengers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <hr/>
            <Route exact path = "/" component = {Passengers} exact />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
