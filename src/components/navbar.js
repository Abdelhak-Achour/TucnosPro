import React, { useState, useRef, useEffect } from "react";
import Logo from "../images/logo_tucnospro.png";
import "bulma/css/bulma.min.css";
import {Link, NavLink} from "react-router-dom";
import phoneIcon from '../images/phone-287.svg';
import emailIcon from '../images/email-155.svg';
import { Expo, gsap } from "gsap";
import data from '../mock_data.json';
import uuid from "react-uuid";

export function Navbar ()
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

    const dropmenuRef2 = useRef(null);

    const [toggle2, setToggle2] = useState(false);

    function toggleDrop2 ()
    {
        setToggle2(!toggle2);
    };

    useEffect(() => {
        if (toggle2)
        {
            console.log(toggle2);
            gsap.to(dropmenuRef2.current, {
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
            console.log(toggle2)
            gsap.to(dropmenuRef2.current, {
                duration: 0.85,
                y: -375,
                delay: 0,
                repeat: 0,
                yoyo: false,
                ease: Expo.easeInOut,
                paused: false
            });
        }
    }, [toggle2]);

    return(
        <>
            <nav className = "navbar is-fixed-top">
                <div className = "navbar-brand">
                    <Link className = "navbar-item my-4 mx-5" to = "/"> <img className = "logo" src = {Logo} alt = "logo img" /></Link>
                    <ul className="info">
                        <li>
                            <span className="info icon-text is-hidden-mobile">
                                <span className="icon">
                                    <img className="icon-custom" src={phoneIcon} alt = "phone-icon" />
                                </span>
                                <span>92 999 737 | 27 643 085</span>
                            </span>
                        </li>
                        <li>
                            <span className="info icon-text is-hidden-mobile">
                                <span className="icon">
                                    <img className="icon-custom" src={emailIcon} alt = "email-icon" />
                                </span>
                                <div className="m-auto">
                                    <span>tucnospro@gmail.com</span>
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
                        <NavLink className = "navbar-item aqua font-size" to = "/">Accueil</NavLink>
                        <NavLink className = "navbar-item aqua font-size" to = "/a-propos">A propos</NavLink>
                        <div className="drop">
                            <NavLink onMouseEnter={() => {toggle ? setToggle(true) : setToggle(true)}} onMouseLeave={toggleDrop} className = "navbar-item aqua font-size drop-btn-padding" to = "/formations">Formations</NavLink>
                            <div className="drop-menu-box">
                                <div ref={dropmenuRef} onMouseEnter={() => {toggle ? setToggle(true) : setToggle(true)}} onMouseLeave={toggleDrop} className="drop-menu box">
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
                        <NavLink className = "navbar-item aqua font-size" to = "/nos-partenaires">Nos partenaires</NavLink>
                        <div className="drop">
                            <NavLink onMouseEnter={() => {toggle2 ? setToggle2(true) : setToggle2(true)}} onMouseLeave={toggleDrop2} className = "navbar-item aqua font-size drop-btn-padding" to = "/certifications">Certifications</NavLink>
                            <div className="drop-menu-box">
                                <div ref={dropmenuRef2} onMouseEnter={() => {toggle2 ? setToggle2(true) : setToggle2(true)}} onMouseLeave={toggleDrop2} className="drop-menu box">
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
                        <NavLink className = "navbar-item aqua font-size" to = "/blog">Blog</NavLink>
                        <NavLink className = "navbar-item aqua font-size" to = "/contact">Contact</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}