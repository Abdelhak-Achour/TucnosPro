import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AdminLinks } from "../components/adminlinks";
import axios from "axios";
import { StatsBar } from "../components/statsbar";

export function NewsletterEmails()
{
    const [cookies, setCookies, removeCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    function logout()
    {
        removeCookies("access_token");
        window.localStorage.removeItem("userID");
        window.localStorage.removeItem("remember");
        window.sessionStorage.removeItem("remember");
        navigate("/login");
    };

    async function getEmails()
    {
        try
        {
            
            const response = await axios.get("http://localhost:3001/newsletter", {headers: {auth: cookies.access_token}});
            setEmails(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [emails, setEmails] = useState({emails: []});

    useEffect(() => {
        if(window.localStorage.getItem("remember") || window.sessionStorage.getItem("remember"))
        {

        }
        else
        {
            logout();
        }
        getEmails();
    }, []);

    return (
        <>
            <Navbar2 />
            <StatsBar />
            <div className="box is-shadowless m-2 mt-5 mb-6">
                <div className="columns">
                    <div className="column is-narrow">
                        <AdminLinks />
                    </div>
                    <div className="column is-11">
                        <div className="has-text-centered">
                            <p className="title is-1 has-text-dark mt-3 mb-5">Emails</p>
                        </div>
                        <div className="messages-div">
                        {
                            emails.emails.length ?
                            <>
                                {
                                    emails.emails.map((email) => {
                                        return (
                                            <div key={email._id} className="box">
                                                <p className="title is-4 mb-0 pb-0 has-text-dark">{email.email}</p>
                                            </div>
                                        )
                                    })
                                }
                            </> :
                            <p className="title has-text-dark is-3">Pas de email</p>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}