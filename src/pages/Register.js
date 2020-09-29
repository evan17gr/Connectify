import React, { Component } from 'react';
import {Link,Redirect} from "react-router-dom";

import fire from "../firebase";

class Register extends Component {
    constructor(props){
        super(props);

        this.makeAccount = this.makeAccount.bind(this);

        this.state = {
            email: "",
            password:""
        };
    }
    
    makeAccount(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch((error) => {
            console.log(error);
        })
    }

    render(){
        return (
            <div>
                <form className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name"/>
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name"/>
                    </div>
                    <div className="field">
                        <label>E-mail</label>
                        <input type="text" name="email" placeholder="E-mail"/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                    <button className="ui button" type="submit" onClick={this.makeAccount}>Sign Up</button>
                    <button style={{backgroundColor : "red", color:"white"}} className="ui button" type="submit">Sign Up with Google</button>
                    <div>Already have an account? <Link to="/login">Sign In</Link></div>
                </form>
            </div>
        )
    }
}

export default Register;
