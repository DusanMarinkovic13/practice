import React, { Component } from 'react';
import Slika from './Slika'
import Form from './Form'
import './slika.css'

class Child extends Component{
   
    render(){
        //const imgUrl = "car_sport.png"
        return(
            <div className="app">               
                <div>title={this.props.title}</div>
                <Slika /> 
                <Form />              
            </div>
        );
    }
}
export default Child;