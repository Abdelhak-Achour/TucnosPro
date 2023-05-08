import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AdminLinks } from "../components/adminlinks";
import axios from "axios";
import { StatsBar } from "../components/statsbar";

export function Messages()
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

    async function getMessages()
    {
        try
        {
            
            const response = await axios.get("http://localhost:3001/contact", {headers: {auth: cookies.access_token}});
            setMessages(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [messages, setMessages] = useState({messages: []});

    useEffect(() => {
        if(window.localStorage.getItem("remember") || window.sessionStorage.getItem("remember"))
        {

        }
        else
        {
            logout();
        }
        getMessages();
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
                            <p className="title is-1 has-text-dark mt-3 mb-5">Messages</p>
                        </div>
                        <div className="messages-div">
                        {
                            messages.messages.length != 0 ?
                            <>
                                {
                                    messages.messages.map((message) => {
                                        return (
                                            <div key={message._id} className="box">
                                            <p className="title is-4 mb-0 pb-0 has-text-dark">{message.prenom} {message.nom}</p>
                                            <p className="has-text-dark lvl-10 mt-0 pt-0">{message.dateNtime}</p>
                                            <p className="title is-4 has-text-dark ml-4 mr-3 mb-3 mt-2">{message.sujet}</p>
                                            <p className="subtitle is-5 has-text-dark ml-4 mr-3 mb-3 mt-2">{message.message}</p>
                                            </div>
                                        )
                                    })
                                }
                            </> :
                            <p className="title has-text-dark is-3">Pas de message</p>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}