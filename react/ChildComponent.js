import React, { Component } from 'react';

class ChildComponent extends Component{
    render(){
        const {title, imageUrl} = this.props;
        return(
            <div className="app">               
                <div>title={title}</div>
                <div>imageUrl={imageUrl} </div>
                </div>
        );
    }
}
    
export default ChildComponent;