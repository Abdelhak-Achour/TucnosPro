import React from "react";
import { Navbar2 } from "../components/navbar2";

export function Blog ()
{
    return (
        <>
            <Navbar2 />
            <div className="box m-5">
                <div className="columns">
                    <div className="column is-narrow"></div>
                </div>
            </div>
            <div className="m-6 p-5">
                <p className="title is-1 has-text-dark">Blog page</p>
            </div>
        </>
    )
}