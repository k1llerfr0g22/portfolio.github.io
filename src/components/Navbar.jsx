import React from "react";
import "../css/Navbar.css"
import "../css/App.css"
import Link from "react-scroll/modules/components/Link";
import { Contact } from "./Contact";
import { Projects } from "./Projects"

export const Navbar = () => {
    return (
       <div className="Navbar">
            <div className="nav-name-section">
                <a className="nav-name" href="#">Luis</a>
            </div>
            <div className="nav-link-section">
                <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                    <button className="nav-link" href="#">Home</button>
                </Link>
                
                <Link spy={true} to="Projects" smooth={true} activeClass="activeClass">
                    <button className="nav-link" href="#">Projects</button>
                </Link> 
                <Link spy={true} to="Websites" smooth={true} activeClass="activeClass">
                    <button className="nav-link" href="#">Websites</button>
                </Link>               
                {/* <Link spy={true} to='About' smooth={true} activeClass="activeClass">
                    <button className="nav-link" href="#">About</button>
                </Link>             */}
                <Link spy={true} to='CodingJourney' smooth={true} activeClass="activeClass">
                    <button className="nav-link" href="#">Coding Journey</button>
                </Link>
                <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
                    <button className="button" href="#">Contact me</button>
                </Link>
            </div>
       </div>
    );
}