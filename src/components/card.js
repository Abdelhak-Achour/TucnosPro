import React from "react";
import { Link } from "react-router-dom";

export function Card (props)
{
    return (
        <>
            <div className='card-section-box'>
                <div className='card'>
                    <div className='card-image has-text-centered m-auto'>
                        <Link to={`/formations/bycategory/${props.id}`}><img className='card-image' src = {require(`../images/${props.image}`)} alt = "categorie" /></Link>
                    </div>
                    <div className='card-content'>
                        <p className='title is-3 has-text-dark has-text-centered'>{props.name}</p>
                        <p className='has-text-dark has-text-centered'>{props.description}</p>
                    </div>
                    <footer className='card-footer has-text-centered'>
                        <div className="m-auto">
                            <Link to={`/formations/bycategory/${props.id}`}><p className='has-text-grey card-footer-item'>view</p></Link>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}