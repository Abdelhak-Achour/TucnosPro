import React from "react";

export function BlogComments (props)
{
    return (
        <>
            <hr className="comment-hr" />
            <p className={props.comments.length === 0 ? "title has-text-dark has-text-centered mb-6 orange-text" : "is-hidden"}>Il n'y a pas encore de commentaire.</p>
            <div className={props.comments.length === 0 ? "is-hidden" : "comments"}>
                <p className="title has-text-dark has-text-centered orange-text">Commentaires</p>
                {
                    props.comments.map((comment) =>
                    {
                        return(
                            <div key={comment._id}>
                                <p className="title is-4 mb-0 pb-0 has-text-dark">{comment.username}</p>
                                <p className="has-text-dark lvl-10 mt-0 pt-0">{comment.date}</p>
                                <p className="subtitle is-5 has-text-dark mb-3 mt-2">{comment.comment}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}