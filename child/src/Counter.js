import React, { Component } from 'react';

class Counter extends Component{
    
    constructor(props){
        super(props);
        this.state={clicks:0}
    }
    handleClickA = () => {
        this.setState({clicks: this.state.clicks + 1});
    }
    render = () => (
        <button className="btn btn-primary buttonS" onClick={this.handleClickA}>Clicked {this.state.clicks} times</button>
      )
}
export default Counter;