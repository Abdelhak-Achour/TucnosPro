import React, { useState, useRef, useEffect } from "react";
import Logo from "../images/logo_tucnospro.png";
import "bulma/css/bulma.min.css";
import {Link, NavLink} from "react-router-dom";
import phoneIcon from '../images/phone-287-dark.svg';
import emailIcon from '../images/email-155-dark.svg';
import { Expo, gsap } from "gsap";
import data from '../mock_data.json';
import uuid from "react-uuid";

export function Navbar2 ()
{

    const [active, setActive] = useState(false);

    function activateLinks()
    {
        setActive( (prev) => {
            return !prev
        })
    };

    const dropmenuRef = useRef(null);

    const [toggle, setToggle] = useState(false);

    function toggleDrop ()
    {
        setToggle(!toggle);
    };

    useEffect(() => {
        if (toggle)
        {
            console.log(toggle);
            gsap.to(dropmenuRef.current, {
                duration: 1,
                y: 0,
                delay: 0,
                repeat: 0,
                yoyo: false,
                ease: Expo.easeInOut,
                paused: false
            });
        }
        else
        {
            console.log(toggle)
            gsap.to(dropmenuRef.current, {
                duration: 0.85,
                y: -375,
                delay: 0,
                repeat: 0,
                yoyo: false,
                ease: Expo.easeInOut,
                paused: false
            });
        }
    }, [toggle]);

    return(
        <>
            <nav className = "navbar">
                <div className = "navbar-brand">
                    <Link className = "navbar-item my-4 mx-5" to = "/"> <img className = "logo" src = {Logo} alt = "logo img" /></Link>
                    <ul className="info">
                        <li>
                            <span class="info icon-text is-hidden-mobile">
                                <span class="icon">
                                    <img className="icon-custom" src={phoneIcon} alt = "phone-icon" />
                                </span>
                                <span className="has-text-dark">92 999 737 | 27 643 085</span>
                            </span>
                        </li>
                        <li>
                            <span class="info icon-text is-hidden-mobile">
                                <span class="icon">
                                    <img className="icon-custom" src={emailIcon} alt = "email-icon" />
                                </span>
                                <div className="m-auto">
                                    <span className="has-text-dark">tucnospro@gmail.com</span>
                                </div>
                            </span>
                        </li>
                    </ul>
                    <a className="navbar-burger" onClick={activateLinks}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className = {active ? "navbar-menu is-active mx-5" : "navbar-menu mx-6"} id = "nav-links">
                    <div className = "navbar-end">
                        <NavLink className = "navbar-item has-text-dark font-size" to = "/">Accueil</NavLink>
                        <NavLink className = "navbar-item has-text-dark font-size" to = "/a-propos">A propos</NavLink>
                        <div className="drop">
                            <NavLink onMouseEnter={() => {toggle ? setToggle(true) : setToggle(true)}} onMouseLeave={toggleDrop} className = "navbar-item has-text-dark font-size drop-btn-padding" to = "/formations">Formations</NavLink>
                            <div className="drop-menu-box">
                                <div ref={dropmenuRef} onMouseEnter={() => {toggle ? setToggle(true) : setToggle(true)}} onMouseLeave={toggleDrop} className="drop-menu box fa-bg">
                                    {
                                        data.categories.map((categorie) =>
                                        {
                                            return (
                                                <>
                                                    <a key={uuid()}><p className="has-text-dark my-2">{categorie.name}</p></a>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <NavLink className = "navbar-item has-text-dark font-size" to = "/nos-partenaires">Nos partenaires</NavLink>
                        <NavLink className = "navbar-item has-text-dark font-size" to = "/certifications">Certifications</NavLink>
                        <NavLink className = "navbar-item has-text-dark font-size" to = "/blog">Blog</NavLink>
                        <NavLink className = "navbar-item has-text-dark font-size" to = "/contact">Contact</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}