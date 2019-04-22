import React, { Component } from 'react';
import Child from './Child';
import Brojac from './Brojac';
import Counter from './Counter';

import './App.css';
import Photos from './Photos';

class App extends Component {
  
  render() {
    return (
      <div className="App container-fluid">
        <Child title = "Hello, World!"
         /> 
        <Photos />
        <div><Brojac /></div>
        <div><Counter /></div>
             
      </div>
    );
  }
}

export default App;
