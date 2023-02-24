import React from "react";

export function Card (props)
{
    return (
        <>
            <div className='card-section-box'>
                <div className='card'>
                    <div className='card-image has-text-centered'>
                        <img className='card-image' src = {props.image} alt = {props.image + " image"} />
                    </div>
                    <div className='card-content'>
                        <p className='title is-3 has-text-dark has-text-centered'>{props.name}</p>
                        <p className='has-text-dark has-text-centered'>{props.description}</p>
                    </div>
                    <footer className='card-footer has-text-centered'>
                        <p className='has-text-grey card-footer-item'>view</p>
                    </footer>
                </div>
            </div>
        </>
    )
}