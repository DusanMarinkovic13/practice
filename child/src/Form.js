import React, { Component } from 'react';


class Form extends Component{
   
onload(){
    if((!document.getElementById('exampleInputEmail1').nodeValue)||(!document.getElementById('exampleInputPassword1').nodeValue)){
        document.getElementById('btnSubmit').style.disabled = true;
    }else{
        document.getElementById('btnSubmit').style.disabled = false;
    }
}
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center container">
                <form className="row col-md-6 col-lg-5" id="forma" action="https://www.b92.net/sport/">
                <div className="form-group col-sm-12">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" autoComplete="off" required></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group col-sm-12">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete="off" required></input>
                    </div>
                    <div className="form-check col-sm-12">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                <div className="form-check col-sm-12 text-center" >
                    <button type="submit" id="btnSubmit" className="btn btn-primary">Submit</button>
                    </div>
                
                </form>
            </div>
        )
    }
}
export default Form; 