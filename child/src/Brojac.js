import React, { Component } from 'react';

class Brojac extends  Component{

    constructor(props) {
    	super(props);
        this.state = {clicks: 0}        
    }
    
    handleClick() {
    	this.setState((prevState) => ({
      	   clicks: prevState.clicks + 1
        }));
    } 
    
    render() {
    	return(
            <button className="btn btn-primary buttonS" onClick={this.handleClick.bind(this)}>Clicked {this.state.clicks} Times</button>
        ) 
    }
    
}
   


export default Brojac;
