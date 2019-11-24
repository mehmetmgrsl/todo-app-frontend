import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
        <Counter by={5}></Counter >
        <Counter by={10}></Counter >
      </div >
    );
  }
}
export default App;