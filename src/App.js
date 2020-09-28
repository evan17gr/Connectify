import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";

import Login from "./pages/Login";
import Feed  from "./pages/Feed";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import fire from "./firebase";
import SignUp from './pages/SignUp';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            user : {}
        };
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        fire.auth.onAuthStateChanged( (user) => {
            if(user){
                this.setState({user});
            }
            else{
                this.setState({user:null});
            }
        })
    }
   

    render(){ 
        return (
            <div>
                {this.state.user ? (<Feed/>) : (<Login/>)}
                <Switch>
                    <Route exact path="/" component={Feed} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/profile" component={Profile} />
                    <Route component={Error}/>
                </Switch>
            </div>
            
    );
    }
}

export default App;
