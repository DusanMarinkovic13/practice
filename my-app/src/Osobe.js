import React, { Component } from 'react';

class Osobe extends Component{
    render(){
        const {ime,godine,pol} = this.props;
        return(
            <div className="osoba">
            <div>Ime: {ime}</div>
            <div>Godine: {godine}</div>
            <div>Pol: {pol}</div>
            </div>
        )
    }
}
export default Osobe