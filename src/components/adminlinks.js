import React from "react";
import { Link } from "react-router-dom";

export function AdminLinks(props)
{
    return (
        <div className="box pr-5">
            <Link className="has-text-dark is-size-5 mt-2 mb-2" to="/admin">Accueil</Link>
            <br />
            <Link className="has-text-dark is-size-5 mt-2 mb-2" to="/manageblogs">Blogs</Link>
        </div>
    )
}