import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AdminLinks } from "../components/adminlinks";
import axios from "axios";

export function Inscriptions()
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

    async function getFormationsData()
    {
        try
        {
            const response = await axios.get(`http://localhost:3001/formation`);
            setFormationsData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [formationsData, setFormationsData] = useState({formations: []});

    useEffect(() => {
        if(window.localStorage.getItem("remember") || window.sessionStorage.getItem("remember"))
        {

        }
        else
        {
            logout();
        }
        getFormationsData();
    }, []);

    return (
        <>
            <Navbar2 />
            <div className="box is-shadowless m-2 mt-5 mb-6">
                <div className="columns">
                    <div className="column is-narrow">
                        <AdminLinks />
                    </div>
                    <div className="column is-11">
                        <div className="has-text-centered">
                            <p className="title is-1 has-text-dark mt-3 mb-5">Liste des formations</p>
                        </div>
                        <div className="messages-div">
                        {
                            formationsData.formations.length != 0 ?
                            <>
                                {
                                    formationsData.formations.map((formation) => {
                                        return (
                                            <div key={formation._id} className="box">
                                                <p className="subtitle is-5 mb-0 pb-0 has-text-dark">{formation.formateur}</p>
                                                <p className="has-text-dark lvl-9 mt-0 pt-0">{formation.inscriptions ? formation.inscriptions.length : ""} inscriptions</p>
                                                <Link className="title is-4 has-text-dark ml-4 mr-3 mb-0 mt-2" to={`/inscriptionslist/${formation._id}`}>{formation.name}</Link>
                                            </div>
                                        )
                                    })
                                }
                            </> :
                            <p className="title is-3">Pas de message</p>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}