import React from "react";
import { Navbar2 } from "../components/navbar2";
import Logo from "../images/logo_tucnospro.png";

export function Login()
{
    return(
        <>
            <Navbar2 />
            <div className="login-logo-div">
                <img className = "login-logo" src = {Logo} alt = "logo img" />
            </div>
            <form className="box login-form">
                <div className="has-text-centered mb-2">
                    <p className="title has-text-dark is-4">Login</p>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="Votre Email" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Mot de passe</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Votre mot de passe" />
                    </div>
                </div>
                <div className="field">
                    <label className="checkbox">
                        <input type="checkbox" /> Se souvenir de moi
                    </label>
                </div>
                <div className="control">
                    <button className="button is-link">Se connecter</button>
                </div>
            </form>
        </>
    )
}