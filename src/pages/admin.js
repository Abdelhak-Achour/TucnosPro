import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AdminLinks } from "../components/adminlinks";
import axios from "axios";
import { StatsBar } from "../components/statsbar";

export function Admin()
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

    async function getStats()
    {
        try
        {
            
            const response = await axios.get("http://localhost:3001/stats");
            setStats(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [stats, setStats] = useState({stats: []});

    useEffect(() => {
        if(window.localStorage.getItem("remember") || window.sessionStorage.getItem("remember"))
        {

        }
        else
        {
            logout();
        }
        getStats()
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
                            <p className="title is-1 has-text-dark mt-3 mb-5">Nombre des visites et vues</p>
                        </div>
                        <div className="messages-div">
                        {
                            stats.stats ?
                            <>
                                {
                                    stats.stats.map((stat) => {
                                        return (
                                            <div key={stat._id} className="box">
                                            <p className="title is-4 mb-0 pb-0 has-text-dark">{stat.date}</p>
                                            <p className="subtitle is-5 has-text-dark ml-4 mr-3 mb-3 mt-2">visites: {stat.visits}</p>
                                            <p className="subtitle is-5 has-text-dark ml-4 mr-3 mb-3 mt-2">vues: {stat.views}</p>
                                            </div>
                                        )
                                    })
                                }
                            </> :
                            <p className="title has-text-centered has-text-dark is-3">Pas de stats</p>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}