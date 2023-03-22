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
                duration: 1,
                y: "-100vh",
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
                duration: 1,
                y: "-100vh",
                delay: 0,
                repeat: 0,
                yoyo: false,
                ease: Expo.easeInOut,
                paused: false
            });
        }
    }, [toggle2]);

    const mobilenavRef = useRef(null);
    const [pulled, setPulled] = useState(false);

    function menuClickedPull()
    {
        if (pulled)
        {
            setPulled(false);
            gsap.to(mobilenavRef.current, {
                duration: 1,
                x: "100vh",
                ease: Expo.easeInOut
            })
        }
        else
        {
            setPulled(true);
            gsap.to(mobilenavRef.current, {
                duration: 1,
                x: 0,
                ease: Expo.easeInOut
            })
        }
    }

    const categoriesMenuRef = useRef(null);
    const [categoriesPulled, setCategoriesPulled] = useState(false);

    function categoriesPull()
    {
        if(categoriesPulled)
        {
            setCategoriesPulled(false);
            gsap.to(categoriesMenuRef.current, {
                duration: 0.3,
                opacity: 0,
                display: "none"
            })
        }
        else
        {
            setCategoriesPulled(true);
            gsap.to(categoriesMenuRef.current, {
                duration: 1,
                opacity: 1,
                display: "block"
            })
        }
    }

    return(
        <>
            <nav className = "navbar">
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
                    <div className="navbar-burger mr-5 mt-5">
                        <p className={pulled ? "is-hidden" : ""} onClick={menuClickedPull}>menu</p>
                        <p className={pulled ? "" : "is-hidden"} onClick={menuClickedPull}>close</p>
                    </div>
                </div>
                <div className = "navbar-menu mx-6" id = "nav-links">
                    <div className = "navbar-end">
                        <NavLink className = "subtitle is-5 custom-item-margin navbar-item aqua font-size" to = "/">Accueil</NavLink>
                        <NavLink className = "subtitle is-5 custom-item-margin navbar-item aqua font-size" to = "/a-propos">A propos</NavLink>
                        <div className="drop">
                            <NavLink onMouseEnter={() => {toggle ? setToggle(true) : setToggle(true)}} onMouseLeave={toggleDrop} className = "subtitle is-5 navbar-item aqua font-size drop-btn-padding" to = "/formations">Formations</NavLink>
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
                        <NavLink className = "subtitle is-5 custom-item-margin navbar-item aqua font-size" to = "/nos-partenaires">Nos partenaires</NavLink>
                        <div className="drop">
                            <NavLink onMouseEnter={() => {toggle2 ? setToggle2(true) : setToggle2(true)}} onMouseLeave={toggleDrop2} className = "subtitle is-5 navbar-item aqua font-size drop-btn-padding" to = "/certifications">Certifications</NavLink>
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
                        <NavLink className = "subtitle is-5 custom-item-margin navbar-item aqua font-size" to = "/blog">Blog</NavLink>
                        <NavLink className = "subtitle is-5 custom-item-margin-contact navbar-item aqua font-size" to = "/contact">Contact</NavLink>
                    </div>
                </div>
                <div ref={mobilenavRef} className="mobile-navbar-menu is-hidden-tablet">
                    <div className="mobile-navbar-menu-content pt-5 pb-5 pl-3">
                        <NavLink className = "subtitle mobile-navbar-menu-content is-4" to = "/">Accueil</NavLink>
                        <br />
                        <br />
                        <NavLink className = "subtitle mobile-navbar-menu-content is-4" to = "/a-propos">A propos</NavLink>
                        <br />
                        <br />
                        <p className = "subtitle mobile-navbar-menu-content is-4 pb-0 mb-0" to = "" onClick={categoriesPull}>Formations</p>
                        <br />
                        <div ref={categoriesMenuRef} className="categories-menu pl-5 pt-0 pb-2">
                            {
                                data.categories.map((categorie) =>
                                {
                                    return (
                                        <>
                                            <p key={uuid()} className="subtitle mobile-navbar-menu-content is-5 mb-2">{categorie.name}</p>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <NavLink className = "subtitle mobile-navbar-menu-content is-4" to = "/nos-partenaires">Nos partenaires</NavLink>
                        <br />
                        <br />
                        <NavLink className = "subtitle mobile-navbar-menu-content is-4" to = "/certifications">Certifications</NavLink>
                        <br />
                        <br />
                        <NavLink className = "subtitle mobile-navbar-menu-content is-4" to = "/blog">Blog</NavLink>
                        <br />
                        <br />
                        <NavLink className = "subtitle mobile-navbar-menu-content is-4" to = "/contact">Contact</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}