import React, { Component } from 'react';
import {Link} from "react-router-dom";


const ForgotPassword = () => {
    return(
        <div class="ui form">
            <div class="field">
                <label>E-mail</label>
                <input type="email" placeholder="joe@schmoe.com"/>
            </div>
            <div class="ui submit button">Reset Password</div>
            <div>Already have an account? <Link to="/login">Sign In</Link></div> 
        </div>
        
    );
}

export default ForgotPassword;