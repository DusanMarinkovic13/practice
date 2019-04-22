import React, { Component } from 'react';
import ParentComponent from 'ParentComponent'



class Appi extends Component {
    render() {
      return (
        <div className="Appi">
          <h1>Prva app</h1>
          <ParentComponent /> 
        </div>
      );
    }
  }
  
  export default Appi;