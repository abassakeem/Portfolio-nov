import React from "react";
import logo from "/logo.png"
import search from "../assets/images/search.svg"
import store from "../assets/images/store.svg"
function Nav() {
    const handleAbout = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top:element?.getBoundingClientRect().top,
            left: 0,
            behavior:"smooth"
        })
    }
    const handleWorks = () => {
        const element = document.querySelector(".works-section");
        window.scrollTo({
            top:element?.getBoundingClientRect().top,
            left: 0,
            behavior:"smooth"
        })
    }
    const handleContact = () => {
        const element = document.querySelector(".contact-section");
        window.scrollTo({
            top:element?.getBoundingClientRect().top,
            left: 0,
            behavior:"smooth"
        })
    }
    const handleAvatar = () => {
        const element = document.querySelector(".display-section");
        window.scrollTo({
            top:element?.getBoundingClientRect().top,
            left: 0,
            behavior:"smooth"
        })
    }
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img className="logo-img" src={logo} alt="Apple" />
                    </li>
                    
                    <li>
                        <a className="link-styled  nav-link" onClick={handleAbout} >About</a>
                    </li>
                   <li>
                          <a className="link-styled nav-link" onClick={handleWorks} >Works</a>
                    </li>
                    <li>
                        <a className="link-styled " onClick={handleContact} >Contact</a>
                    </li>
                    <li>
                        <a className="link-styled nav-link" onClick={handleAvatar} >Avatar</a>
                    </li>
                    
                    
                   
                </ul>
            </div>

        </nav>
    );
}

export default Nav;