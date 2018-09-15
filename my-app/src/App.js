import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: black, id: 1},
      { name: 'Ken', age: 28, belt: black, id: 2},
      { name: 'Shino', age: 33, belt: red, id: 3}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first react App!</h1>
        <p>Welcome!</p>
        <Ninjas name="Ryu" age="25" belt="black"/>
        <Ninjas name="Yoshi" age="30" belt="green"/>
      </div>
    );
  }
}

export default App;
