import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";

import fire from "../firebase";

class Login extends Component {
    constructor(props){
        super(props);

        this.loginUser = this.loginUser.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email:"",
            password: ""
        };
    }

    handleChange(e){
        this.setState({ [e.target.name] : e.target.value});
    }

    loginUser(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then( (user) => {}).catch((error) =>{
            console.log(error);
        })
    }
    
    render(){
        return (
            <div>
                 <form className="ui form">
                    <button style={{backgroundColor : "red", color:"white"}} className="ui button" type="submit">Continue with Google</button>
                    <br></br>
                    <div>Or</div>
                    <br></br>
                    <div className="field">
                        <label>E-mail</label>
                        <input type="text" name="email" onChange={this.handleChange} placeholder="E-mail"/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} placeholder="Password"/>
                    </div>
                    <button className="ui button" type="submit">Sign In</button>
                    <div>Don't have an account? <Link to="/signup">Sign Up</Link></div>
                    <div><Link to="/forgotpassword">Forgot your password?</Link></div>
                </form>
            </div>
        );
    }
}

export default Login;