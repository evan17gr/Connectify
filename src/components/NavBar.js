import React, { Component } from 'react';
import {Link} from "react-router";

const NavBar = () => {
    return(
        <div class="ui secondary  menu">
            <img class="ui top aligned tiny image" src="https://st2.depositphotos.com/4827821/7207/v/450/depositphotos_72076771-stock-illustration-letter-c-logo-template.jpg"/>
            <div class="right menu">
                <div class="item">
                <div class="ui icon input">
                    <input type="text" placeholder="Search..."/>
                    <i class="search link icon"></i>
                </div>
                </div>
                <a class="ui item">
                Profile
                </a>
                <a class="ui item">
                Logout
                </a>
            </div>
        </div>
    );
}

export default NavBar;
