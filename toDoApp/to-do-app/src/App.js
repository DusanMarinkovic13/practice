import React, { Component } from 'react';
import './App.css';
import Planer from './Uradi';
import Dodaj from './Dodaj';


class App extends Component {
 state={
   zadaci: [
     {id: 1, sadrzaj: 'uradi nesto glupo'},
     {id: 2, sadrzaj: 'uradi nesto pametno'}
   ]
 };
 genereateID = (stavka) => {
   stavka.id = Math.random();
   let zadaci = [...this.state.zadaci, stavka];
   this.setState({
     zadaci
   });
 }

 brisiZadatak = (id) => {
   const zadaci = this.state.zadaci.filter(stavka => {
     return stavka.id !== id
   });
   this.setState({
     zadaci
   });
 }

 render() {
   return (
     <div className="App">
       <h1 className="test">Planer</h1>
       <Planer zadaci={this.state.zadaci} brisiZadatak={this.brisiZadatak}/>
       <Dodaj genereateID={this.genereateID}/>
     </div>
   );
 }
}

export default App;
 /* <h3>{this.state.zadaci[0].id} {this.state.zadaci[0].sadrzaj}</h3>
        <h3>{this.state.zadaci[1].id} {this.state.zadaci[1].sadrzaj}</h3> */