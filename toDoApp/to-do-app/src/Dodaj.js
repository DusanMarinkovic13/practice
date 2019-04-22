import React, {Component} from 'react'

class Dodaj extends Component {
   state = {
       sadrzaj: ''}
       handleChange = (e) => {
           this.setState({
               sadrzaj: e.target.value
           });
       }

       handleSubmit = (e) => {
           e.preventDefault();
           this.props.genereateID(this.state);
           this.setState({
               sadrzaj: ''
           })
       }


 render() {
   return (
     <div>
       <form onSubmit = {this.handleSubmit}>
       <label>Dodaj stavku: </label>
       <input type='text' onChange={this.handleChange} value={this.state.sadrzaj}/>
       </form>
     </div>
   )
 }
}

export default Dodaj;