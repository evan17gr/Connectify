import React, { Component } from 'react';
import {Route,Link,Redirect,useHistory} from "react-router-dom";

import {fire, firebaseAuth} from "../firebase";

class Register extends Component {
    constructor(props){
        super(props);

        this.makeAccount = this.makeAccount.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: "",
            password:""
        };
    }
    
    makeAccount(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(
        ).catch((error) => {
            console.log(error);
        })
        console.log("make account");
    }


    handleChange(e){
        this.setState({ [e.target.name] : e.target.value});
    }

    render(){

        return (
            <div>
                <form onSubmit={this.makeAccount} className="ui form">
                    <div className="field">
                        <label>Full Name</label>
                        <input type="text" name="first-name" placeholder="Full Name"/>
                    </div>
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="last-name" placeholder="Username"/>
                    </div>
                    <div className="field">
                        <label>E-mail</label>
                        <input type="text" name="email" onChange={this.handleChange} placeholder="E-mail"/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} placeholder="Password"/>
                    </div>
                    <button className="ui button" type="submit">Sign Up</button>
                    <button style={{backgroundColor : "red", color:"white"}} className="ui button" type="submit">Sign Up with Google</button>
                    <div>Already have an account? <Link to="/login">Sign In</Link></div>
                </form>
            </div>
        )
    }
}

export default Register;
