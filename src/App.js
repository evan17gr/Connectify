import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";

import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Feed  from "./pages/Feed";
import Profile from "./pages/Profile";
import {fire} from "./firebase";
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Error from "./pages/Error";

class App extends Component {
    constructor(props){
        super(props);

        this.authListener = this.authListener.bind(this);

        this.state = {
            user : null,
            userLoggedOut:false
        };
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        fire.auth().onAuthStateChanged( (user) => {
            if(user){
                this.setState({user});
            }
            else{
                this.setState({user:null});
            }
        });
    }

    sendDataToLogin(userData){
        this.setState({userLoggedOut:userData});
        console.log(this.state.userLoggedOut);
    }

    render(){ 
        return (
            <div>
                <Switch>
                    <Route path="/login" component={Login} userHasLoggedOut={this.state.userLoggedOut}/>
                    <Route path="/signup" component={Register}/>
                    <Route path="/resetpassword" component={ResetPassword}/>
                    <Route path="/forgotpassword" component={ForgotPassword}/>
                    <Route path="/profile" component={Profile}/>
                    <PrivateRoute exact path="/profile" component={Profile} user={this.state.user}/>
                    <PrivateRoute exact path="/" component={Feed} getDataFromFeed={this.sendDataToLogin} user={this.state.user}/>
                    <Route exact path="*" component={Error}/>
                </Switch>
            </div>
        );
    }
}

export default App;
