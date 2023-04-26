import React from "react";
import commentsicon from "../images/comment-103.svg";
import dateicon from "../images/date-24.svg"

export function FullPost (props)
{
    return (
        <>
            <div className="box">
                <div className="article-header has-text-centered">
                    <p className="lvl-5 has-text-dark">{props.category}</p>
                    <p className="title is-1 orange-text mt-1">{props.title}</p>
                    <p className="subtitle lvl-10 has-text-grey"><img className="comments-icon" src={commentsicon} alt="ci" />{props.comments.length} commentaires</p>
                    <img className="article-img" src={require(`../images/${props.image}`)} />
                </div>
                <div className="has-text-right mr-6">
                    <p className="title lvl-5 has-text-dark"><img className="blog-date-icon" src={dateicon} alt="di" />{props.date}</p>
                </div>
                <div className="content-preview-div" dangerouslySetInnerHTML={{__html: props.content}} />
            </div>
        </>
    )
}