import React, { Component } from 'react';

const Login = () => {
    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label>E-mail</label>
                    <input type="text" name="email" placeholder="E-mail"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password"/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;