import React from "react"
import {NavLink} from "react-router-dom"
import Logo from "../logo.jpg"

const Navbar = () => {
    return(
        <nav className="nav-wrapper teal lighten-1">
           
            <div className="container ">
                
            <div>        
            <img  src={Logo} width="75" height="64" className="left" alt="logo"/>
            </div>
            <div>    
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
                </div>    
                
                </div>
                
            <h5 className="center-align">AP Restoration Clinic</h5> 
               
        </nav>
    )
}

export default Navbar