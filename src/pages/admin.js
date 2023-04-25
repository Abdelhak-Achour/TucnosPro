import React, { useEffect } from "react";
import { Navbar2 } from "../components/navbar2";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AdminLinks } from "../components/adminlinks";

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

    useEffect(() => {
        if(window.localStorage.getItem("remember") || window.sessionStorage.getItem("remember"))
        {

        }
        else
        {
            logout();
        }
    }, []);

    return (
        <>
            <Navbar2 />
            <div className="box m-2 mt-5">
                <div className="columns">
                    <div className="column is-narrow">
                        <AdminLinks />
                    </div>
                </div>
            </div>
            <p className="title is-1 has-text-centered has-text-dark m-5">Admin page</p>
            <div className="has-text-centered">
                <button className="button is-link m-5" onClick={logout}>Logout</button>
            </div>
        </>
    )
}