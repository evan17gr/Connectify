import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";

import SingUp from "./pages/SignUp";
import Login from "./pages/Login";
import Feed  from "./pages/Feed";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

const App = () => {
    return (
        <div>
            <Switch>
                <div>Hello</div>
                <Route exact path="/" component={Feed}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/signup" component={SingUp}/>
                <Route path="/login" component={Login}/>
                <Route component={Error}/>
            </Switch>
        </div>
        
    );
}

export default App;
