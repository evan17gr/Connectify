import React, { Component } from 'react';
import {Link} from "react-router";

import {fire} from '../firebase';

class NavBar extends Component {
    constructor(props){
        super(props);

        this.signOut = this.signOut.bind(this);

        this.state = {userLoggedOut:false};

    }

    signOut (){
        fire.auth().signOut().then( (user) => {
            this.setState({userLoggedOut:true});
            console.log("sign out");
            console.log(this.state.user);
        }
        );

        this.props.getDataFromNavBar(this.state.userLoggedOut);
    }
    

    render(){
        return(
            <div className="ui secondary  menu">
                <img className="ui top aligned tiny image" src="https://st2.depositphotos.com/4827821/7207/v/450/depositphotos_72076771-stock-illustration-letter-c-logo-template.jpg"/>
                <div className="right menu">
                    <div className="item">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search..."/>
                        <i className="search link icon"></i>
                    </div>
                    </div>
                    <a className="ui item">
                    Profile
                    </a>
                    <a className="ui item" onClick={this.signOut}>
                    Logout
                    </a>
                </div>
            </div>
        );
    }
}

export default NavBar;
