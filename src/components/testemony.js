import React from "react";

export function Testemony(props)
{
    return (
        <>
            <div className="testemony-box has-text-centered">
                <img className="testemony-img" src={require(`../images/${props.image}`)} alt={props.lastname + " " + props.name} />
                <p className="title is-size-4 my-1 has-text-dark">{props.lastname + " " + props.name}</p>
                <p className="has-text-grey my-2 lvl-10">{props.job}</p>
                <p className="has-text-grey my-2 lvl-10">{props.testemony}</p>
                <p className="has-text-warning my-2 is-size-4">{"★".repeat(props.note)}</p>
            </div>
        </>
    )
}