import React, { useEffect } from "react";
import { Navbar2 } from "../components/navbar2";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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
    }, [])

    return (
        <>
            <Navbar2 />
            <p className="title is-1 has-text-centered has-text-dark m-5">Admin page</p>
            <div className="has-text-centered">
                <button className="button is-link m-5" onClick={logout}>Logout</button>
            </div>
        </>
    )
}