import React, { Component } from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    return(
        <div>
            <h1>Oops! Page not found!</h1>
            <div>Don't have an account? <Link to="/login">Sign In</Link></div>
        </div>
    );
}

export default Error;
