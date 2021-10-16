
//Header.js : is the component of the upper Black Bar of the web UI . 

import React from 'react';
import logo from "../Assets/Images/logo.PNG"

export default function Header() {
    return (
        <div className="grid-container">
            <header>
                <a href to="/">
                <img src={logo} alt="" height="50" padding="2px 10px" /> 
                </a>
                
            </header>
        </div>
    )
}

 
