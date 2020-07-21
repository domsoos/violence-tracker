import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Violent Tracker</h2>
        </div>
        <p className="App-Intro">
          This is our app that tracks police violence in a map
        </p>
      </div>
    );
  }
}

export default App;
