import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../components/navbar2";
import icon404 from '../images/404.svg';

export function NotFound()
{
    return(
        <>
            <Navbar2 />
            <div className="box is-shadowless pt-0 mt-0 mb-6 mr-auto ml-auto has-text-centered not-found-box">
                <img src={icon404} alt = "404" />
                <p className="title is-1 m-0 has-text-centered has-text-dark">Page Not Found</p>
                <p className="subtitle is-2 mt-3 mb-6 has-text-centered has-text-dark">Désolé, la page que vous recherchez a peut-être été supprimée, déplacée ou n'a jamais existé.</p>
                <Link to="/"><button className="button mb-4 is-link is-medium">Retourner à l'accueil</button></Link>
            </div>
        </>
    )
}