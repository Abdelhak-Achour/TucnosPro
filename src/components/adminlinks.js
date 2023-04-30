import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function AdminLinks(props)
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

    return (
        <div className="box pr-5">
            <Link className="has-text-dark is-size-4 mt-2 mb-2" to="/admin">Accueil</Link>
            <br />
            <Link className="has-text-dark is-size-4 mt-2 mb-2" to="/managecategories">Catégories</Link>
            <br />
            <Link className="has-text-dark is-size-4 mt-2 mb-2" to="/manageformations">Formations</Link>
            <br />
            <Link className="has-text-dark is-size-4 mt-2 mb-2" to="/manageblogs">Blogs</Link>
            <br />
            <Link className="has-text-dark is-size-4 mt-2 mb-2" to="/managepartners">Partenaires</Link>
            <br />
            <Link className="has-text-dark is-size-4 mt-2 mb-2" to="/messages">Messages</Link>
            <br />
            <button className="button is-link mt-4" onClick={logout}>Logout</button>
        </div>
    )
}