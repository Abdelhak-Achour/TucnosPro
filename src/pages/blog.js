import React, {useState, useEffect} from "react";
import { Navbar2 } from "../components/navbar2";
import axios from "axios";
import { Article } from "../components/article";

export function Blog ()
{
    async function getData()
    {
        try
        {
            const response = await axios.get("http://localhost:3001/blog/");
            setData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [data, setData] = useState({blogs: []});

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Navbar2 />
            <div className="box m-3 is-shadowless">
                <div className="columns">
                    <div className="column is-narrow is-9">
                        <div className="has-text-centered">
                            <p className="subtitle is-5 has-text-grey mb-0">TOUTES LES CATÉGORIES</p>
                            <hr className="blog-hr" />
                        </div>
                        <div className="articles-div">
                            {
                                data.blogs.map((blog) => {
                                    return (
                                        <>
                                            <Article
                                                key = {blog._id}
                                                id = {blog._id}
                                                title = {blog.title}
                                                content = {blog.content}
                                                image = {blog.image}
                                                comments = {blog.comments}
                                             />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-6 p-5">
                <p className="title is-1 has-text-dark">Blog page</p>
            </div>
        </>
    )
}