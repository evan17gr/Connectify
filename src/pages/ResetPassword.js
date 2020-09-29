import React, { Component } from 'react';


const ResetPassword = () => {
    return(
        <div class="ui form">
            <div className="field">
                <label>New Password</label>
                <input type="password" name="password" placeholder="Password"/>
            </div>
        </div>
    );
}

export default ResetPassword;