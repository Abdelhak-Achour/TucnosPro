import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar2 } from "../components/navbar2";
import data from '../mock_data.json';

export function Formation()
{
    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(() =>
    {
        if(id > data.formations.length)
        {
            navigate("/not-found");
        }
    });

    const image = data.formations[id-1].image;

    if(id<=data.formations.length)
    {
        return(
            <>
                <Navbar2 />
                <p className="title is-1 m-6 pt-6 has-text-centered has-text-dark formation-title">{data.formations[id-1].name}</p>
                <div className="box formation-info-box m-6">
                    <div className="columns">
                        <div className="column is-narrow">
                            <img className="formation-page-image" src = {require(`../images/${image}`)} alt = "formation" />
                        </div>
                        <div className="column is-narrow">
                            <div className="columns">
                                <div className="column is-narrow">
                                    <img className="formateur-image" src = {require(`../images/not_real_person_2.png`)} alt = "formateur" />
                                </div>
                                <div className="column is-narrow">
                                    <div className="box is-shadowless pt-1 pb-1 pr-0 pl-0">
                                        <p className="subtitle is-4 has-text-dark">Formateur:</p>
                                        <p className="title is-3 has-text-dark">{data.formations[id-1].formateur}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-narrow">
                                    <p className="is-size-3 has-text-dark">Durée:</p>
                                </div>
                                <div className="column is-narrow pl-0">
                                    <p className="is-size-3 has-text-dark">{data.formations[id-1].duration} heures</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column pt-0 is-narrow">
                                    <p className="is-size-3 has-text-dark">Date:</p>
                                </div>
                                <div className="column pt-0 is-narrow pl-0">
                                    <p className="is-size-3 has-text-dark">{data.formations[id-1].date}</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column pt-0 is-narrow">
                                    <p className="is-size-3 has-text-dark">Prix:</p>
                                </div>
                                <div className="column pt-0 is-narrow pl-0">
                                    <p className="is-size-3 has-text-dark">{data.formations[id-1].price} TND</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column pt-0 is-narrow">
                                    <Link to="/inscription"><button className="button is-medium is-link">S'INSCRIRE</button></Link>
                                </div>
                                <div className="column pt-0 is-narrow pl-0">
                                <Link to="/inscription"><button className="button is-medium is-link">CATALOGUE</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else
    {
        return(
            <>
                <p className="title is-1 has-text-centered has-text-dark">Formation {id} n'existe pas</p>
            </>
        )
    }
}