import React, { Component } from 'react';
import './App.css';
import Nav from './Component/Nav/Nav';
import Main from './Component/Main/Main';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}

