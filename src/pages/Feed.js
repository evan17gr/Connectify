import React, { Component } from 'react';
import NavBar from '../components/NavBar';

class Feed extends Component {
    constructor(props){
        super(props);
        this.sendDataToApp = this.sendDataToApp.bind(this);

    }

    sendDataToApp(userData){
        this.props.getDataFromFeed(userData);
    }

    render(){
        return (
            <div>
                <NavBar getDataFromNavBar={this.sendDataToApp}/>
            </div>
        );
    }
}

export default Feed;