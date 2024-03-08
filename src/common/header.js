import React from "react";
import Logo from "./icon/Logo";

export default  function Header(){
    return(
        <div className="header">
            <div className="container">
                <div className="header-logo-holder">
                  <Logo />
                </div>
                <ul className="menu-list">
                    <li className="menu-item"><a href="/" className="menu-link" aria-labelledby="Home">Home</a></li>
                    <li className="menu-item"><a href="/aboutUs" className="menu-link" a>About Us</a></li>
                    <li className="menu-item"><a href="/contactus" className="menu-link">Contact Us</a></li>          
                </ul>
            </div>
        </div>
    );
}