import React, { useState } from "react";
import { Navbar2 } from "../components/navbar2";
import Logo from "../images/logo_tucnospro.png";
import axios from "axios";

export function Register()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submitHandle(event)
    {
        event.preventDefault();

        try
        {
            await axios.post("http://localhost:3001/auth/register", {
                email,
                password
            });
            alert("Registration successful");
        }
        catch (err)
        {
            console.error(err)
        }
    }

    return(
        <>
            <Navbar2 />
            <div className="login-logo-div">
                <img className = "login-logo" src = {Logo} alt = "logo img" />
            </div>
            <form className="box login-form" onSubmit={submitHandle}>
                <div className="has-text-centered mb-2">
                    <p className="title has-text-dark is-4">Register</p>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="Votre Email" onChange={(event) => setEmail(event.target.value)} required/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Mot de passe</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Votre mot de passe" onChange={(event) => setPassword(event.target.value)} required/>
                    </div>
                </div>
                <div className="control">
                    <button className="button is-link" type="submit">Register</button>
                </div>
            </form>
        </>
    )
}