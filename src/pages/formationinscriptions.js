import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AdminLinks } from "../components/adminlinks";
import axios from "axios";
import { StatsBar } from "../components/statsbar";

export function FormationInscriptions()
{
    const {id} = useParams();

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
            const response = await axios.get(`http://localhost:3001/formation/${id}`);
            setFormationData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [formationData, setFormationData] = useState({formation: {}});

    useEffect(() => {
        if(window.localStorage.getItem("remember") || window.sessionStorage.getItem("remember"))
        {

        }
        else
        {
            logout();
        }
        getFormationsData();
    }, [id]);

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
                            <p className="title is-1 has-text-dark mt-3 mb-5">Liste des inscriptions</p>
                        </div>
                        <div className="messages-div">
                        {
                            formationData.formation.inscriptions ?
                            <>
                                {
                                    formationData.formation.inscriptions.map((sub) => {
                                        return (
                                            <div key={sub._id} className="box">
                                                <p className="title is-5 mb-0 pb-0 has-text-dark">{sub.lastname ? sub.lastname : ""} {sub.name ? sub.name : ""}</p>
                                                <p className="has-text-dark lvl-10 mt-0 pt-0">{sub.date ? sub.date : ""}</p>
                                                <p className="subtitle lvl-5 has-text-dark ml-4 mr-3 mb-0 mt-2">Email: {sub.email ? sub.email : ""}</p>
                                                <p className="subtitle lvl-5 has-text-dark ml-4 mr-3 mb-0 mt-2">Tél: {sub.phonenumber ? sub.phonenumber : ""}</p>
                                                <p className="subtitle lvl-5 has-text-dark ml-4 mr-3 mb-0 mt-2">Situation: {sub.situation ? sub.situation : ""}</p>
                                                <p className="subtitle lvl-5 has-text-dark ml-4 mr-3 mb-0 mt-2">Niveau d'études: {sub.studieslvl ? sub.studieslvl : ""}</p>
                                                <p className="subtitle lvl-5 has-text-dark ml-4 mr-3 mb-0 mt-2">Niveau d'études spécifique: {sub.studiesspecific ? sub.studiesspecific : ""}</p>
                                                <p className="subtitle lvl-5 has-text-dark ml-4 mr-3 mb-0 mt-2">Spécialité: {sub.speciality ? sub.speciality : ""}</p>
                                                <p className="subtitle lvl-5 has-text-dark ml-4 mr-3 mb-0 mt-2">Type de formation: {sub.type ? sub.type : ""}</p>
                                                <p className="subtitle lvl-5 has-text-dark ml-4 mr-3 mb-0 mt-2">Contact: {sub.contactmethod ? sub.contactmethod : ""}</p>
                                                <p className="subtitle lvl-5 has-text-dark ml-4 mr-3 mb-0 mt-2">Questions: {sub.questions ? sub.questions : ""}</p>
                                            </div>
                                        )
                                    })
                                }
                            </> :
                            <p className="title has-text-dark is-3">Pas d'inscriptions</p>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}