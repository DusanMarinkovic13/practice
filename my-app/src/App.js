import React, { Component } from 'react';
import Osobe from './Osobe'
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Prva app</h1>
        <Osobe ime="Petar" godine="20" pol="M" />
        <Osobe ime="Mika" godine="30" pol="M" /> 
        <Osobe ime="Joka" godine="32" pol="Z" /> 
        <Osobe ime="Zika" godine="37" pol="M" /> 
      </div>
    );
  }
}

export default App;
