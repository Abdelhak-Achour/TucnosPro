import React from "react";
import Logo from "../images/logo_tucnospro.png";
import "bulma/css/bulma.min.css";
import {Link, NavLink} from "react-router-dom";

export function Navbar ()
{
    return(
        <>
            <nav className = "navbar has-shadow is-transparent">
                <div className = "navbar-brand">
                    <Link className = "navbar-item py-4 px-6" to = "/"> <img className = "logo" src = {Logo} alt = "logo img" /></Link>
                </div>
                <div className = "navbar-menu" id = "nav-links">
                    <div className = "navbar-end">
                        <NavLink className = "navbar-item" to = "/">Accueil</NavLink>
                        <NavLink className = "navbar-item" to = "/a-propos">A propos</NavLink>
                        <NavLink className = "navbar-item" to = "/formation">Formations</NavLink>
                        <NavLink className = "navbar-item" to = "/nos-partenaires">Nos partenaires</NavLink>
                        <NavLink className = "navbar-item" to = "/certification">Certifications</NavLink>
                        <NavLink className = "navbar-item" to = "/blog">Blog</NavLink>
                        <NavLink className = "navbar-item" to = "/contact">Contact</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}