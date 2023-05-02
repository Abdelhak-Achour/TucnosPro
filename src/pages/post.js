import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FullPost } from "../components/fullpost";
import { BlogComments } from "../components/blogcomments";

export function Post()
{
    const {id} = useParams();

    async function getBlogsData()
    {
        try
        {
            var response = await axios.get(`http://localhost:3001/blog`);   
            console.log(response.data);
            setBlogsData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [blogsData, setBlogsData] = useState({blogs: []});

    useEffect(() => {
        getBlogsData();
        console.log(blogsData);
    }, [id])

    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    async function submitHandle(event)
    {
        try
        {
            const response = await axios.post("http://localhost:3001/blog/comment", {
                id,
                username,
                comment
            });
        }
        catch (err)
        {
            console.error(err)
        }
    }

    return (
        <div>
            <Navbar2 />
            <div className="box m-6 is-shadowless">
                <div className="mb-5 ml-5">
                    <Link className="subtitle is-5 has-text-grey mb-0" to="/blog">← TOUTES LES CATÉGORIES</Link>
                </div>
                <div className="articles-div">
                    {
                        blogsData.blogs.map((blog) => {
                            if(blog._id === id)
                            {
                                return (
                                <FullPost
                                    key = {blog._id}
                                    id = {blog._id}
                                    title = {blog.title}
                                    content = {blog.content}
                                    image = {blog.image}
                                    comments = {blog.comments}
                                    category = {blog.category}
                                    date = {blog.date}
                                 /> 
                            )
                            }
                        })
                    }
                </div>

                <div className="has-text-centered">
                    <p className="title is-2 orange-text mt-6">QU'EN PENSEZ-VOUS ?</p>
                    <form className="box leave-comment-form" onSubmit={submitHandle}>
                        <div className="field">
                            <label className="label">NOM D'UTILISATEUR</label>
                            <div className="control">
                                <input className="input" type="username" onChange={(event) => setUsername(event.target.value)} required />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">VOTRE MESSAGE</label>
                            <div className="control">
                                <textarea className="textarea" type="message" onChange={(event) => setComment(event.target.value)} required></textarea>
                            </div>
                        </div>
                        <div className="control">
                            <button className="button is-link" type="submit">Publier un commentaire</button>
                        </div>
                    </form>
                </div>

                <div className="comment-section">
                {
                    blogsData.blogs.map((blog) => {
                        if(blog._id === id)
                        {
                            return (
                            <BlogComments
                                key = {blog._id}
                                id = {blog._id}
                                comments = {blog.comments}
                             /> 
                        )
                        }
                    })
                }
                </div>
            </div>
        </div>
    )
}