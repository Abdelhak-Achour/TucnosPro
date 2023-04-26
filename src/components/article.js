import React from "react";
import commentsicon from "../images/comment-103.svg";
import { Link } from "react-router-dom";

export function Article (props)
{
    function extractContent(s) {
        var span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    };
    
    return (
        <>
            <div className="box">
                <div className="article-header has-text-centered">
                    <p className="title is-2 orange-text">{props.title}</p>
                    <p className="subtitle lvl-10 has-text-grey"> <img className="comments-icon" src={commentsicon} alt="ci" />{props.comments.length} commentaires</p>
                    <img className="article-img" src={require(`../images/${props.image}`)} />
                </div>
                <div className="content-preview-div">
                    <p className="has-text-dark is-size-5">{extractContent(props.content).length > 377 ? extractContent(props.content).slice(0, 375) + "..." : extractContent(props.content)}</p>
                </div>
                <div className="article-btn-div has-text-centered">
                    <Link to={`/blog/post/${props.id}`}><button className="button article-btn is-link orange-bg mt-5">VOIR LA PUBLICATION</button></Link>
                </div>
            </div>
        </>
    )
}