import React from "react";

export function FormationCard(props)
{
    return (
        <>
            <div className="formation-card-section-box">
                <div className='card is-shadowless'>
                    <div className='formation-card-image has-text-centered'>
                        <img className='formation-card-image' src = {require(`../images/${props.image}`)} alt = "categorie" />
                    </div>
                    <div className='card-content p-1'>
                        <p className='title is-6 m-1 has-text-dark'>{props.name}</p>
                        <p className='has-text-dark lvl-10 m-1'>{props.duration + "h " + props.date}</p>
                        <p className=' tag orange-bg lvl-10 m-1'>{props.price} TND</p>
                    </div>
                </div>
            </div>
        </>
    )
}