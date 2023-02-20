import React, { useState } from "react";
import Logo from "../images/logo_tucnospro.png";
import "bulma/css/bulma.min.css";
import {Link, NavLink} from "react-router-dom";
import phoneIcon from '../images/phone-287.svg';
import emailIcon from '../images/email-161.svg';

export function Navbar ()
{

    const [active, setActive] = useState(false);

    function activateLinks()
    {
        setActive( (prev) => {
            return !prev
        })
    }

    return(
        <>
            <nav className = "navbar has-shadow is-transparent">
                <div className = "navbar-brand">
                    <Link className = "navbar-item py-4 px-6" to = "/"> <img className = "logo" src = {Logo} alt = "logo img" /></Link>
                    <table className="info">
                        <tr>
                            <td>
                                <img className="icon-custom" src={phoneIcon} alt = "phone-icon" />
                            </td>
                            <td>
                                92 999 737 | 27 643 085
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="icon-custom" src={emailIcon} alt = "email-icon" />
                            </td>
                            <td>
                                tucnospro@gmail.com
                            </td>
                        </tr>
                    </table>
                    <a className="navbar-burger" onClick={activateLinks}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className = {active ? "navbar-menu is-active" : "navbar-menu"} id = "nav-links">
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