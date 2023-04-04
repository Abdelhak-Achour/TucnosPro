import React, { useState } from "react";
import { Navbar2 } from "../components/navbar2";
import Logo from "../images/logo_tucnospro.png";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const [_, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    async function submitHandle(event)
    {
        event.preventDefault();

        try
        {
            const response = await axios.post("http://localhost:3001/auth/login", {
                email,
                password
            });

            if(remember)
            {
                window.localStorage.setItem("remember", true);
            }
            else
            {
                window.sessionStorage.setItem("remember", true);
            }

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);

            navigate("/admin")
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
                    <p className="title has-text-dark is-4">Login</p>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="Votre Email" onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Mot de passe</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Votre mot de passe" onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                </div>
                <div className="field">
                    <label className="checkbox">
                        <input type="checkbox" onClick={() => setRemember(!remember)} /> Se souvenir de moi
                    </label>
                </div>
                <div className="control">
                    <button className="button is-link" type="submit">Se connecter</button>
                </div>
            </form>
        </>
    )
}