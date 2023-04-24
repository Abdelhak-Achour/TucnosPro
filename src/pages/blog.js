import React, {useState, useEffect} from "react";
import { Navbar2 } from "../components/navbar2";
import axios from "axios";
import { Article } from "../components/article";
import { Link, useParams } from "react-router-dom";

export function Blog()
{
    const {id} = useParams();

    async function getBlogsData()
    {
        try
        {
            if (id)
            {
                var response = await axios.get(`http://localhost:3001/blog/${id}`);
            }
            else
            {
                var response = await axios.get(`http://localhost:3001/blog`);
            }
            
            console.log(response.data);
            setBlogsData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    async function getCategoriesData()
    {
        try
        {
            const response = await axios.get("http://localhost:3001/category/");
            setCategoriesData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [blogsData, setBlogsData] = useState({blogs: []});

    const [categoriesData, setCategoriesData] = useState({categories: []});

    useEffect(() => {
        console.log(id);
        getBlogsData();
        getCategoriesData();
    }, [id])

    if (blogsData.blogs.length === 0)
    {
        return (
            <div>
                <Navbar2 />
                <div className="box m-6 is-shadowless">
                    <div className="columns">
                        <div className="column is-narrow is-9">
                            <div className="has-text-centered">
                                <p className="subtitle is-5 has-text-grey mb-0">TOUTES LES CATÉGORIES</p>
                                <hr className="blog-hr" />
                            </div>
                            <div className="articles-div has-text-centered">
                                <p className="title is-2 has-text-dark">Il n'y a pas encore d'Article.</p>
                            </div>
                        </div>
                        <div className="column is-narrow">
                            <div className="box m-0 mt-6">
                                <div className="mt-2">
                                    <Link className={id ? "category-link has-text-dark lvl-5 mb-2 ml-1" : "category-link orange-text lvl-5 mb-2 ml-1"} to="/blog">Toutes les catégories</Link>
                                </div>
                                {
                                    categoriesData.categories.map((category) => {
                                        return (
                                            <div key={category._id}>
                                                <div className="mt-2">
                                                    <Link key={`${id}`} className={category._id === id ? "has-text-dark category-link lvl-5 ml-1 orange-text" : "has-text-dark category-link lvl-5 ml-1"} to={`/blog/${category._id}`}>{category.name}</Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Navbar2 />
            <div className="box m-6 is-shadowless">
                <div className="columns">
                    <div className="column is-narrow is-9">
                        <div className="has-text-centered">
                            <p className="subtitle is-5 has-text-grey mb-0">TOUTES LES CATÉGORIES</p>
                            <hr className="blog-hr" />
                        </div>
                        <div className="articles-div">
                            {
                                blogsData.blogs.map((blog) => {
                                    return (
                                        <Article
                                            key = {blog._id}
                                            id = {blog._id}
                                            title = {blog.title}
                                            content = {blog.content}
                                            image = {blog.image}
                                            comments = {blog.comments}
                                         /> 
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="column is-narrow">
                        <div className="box m-0 mt-6">
                            <div className="mt-2">
                                <Link className={id ? "category-link has-text-dark lvl-5 mb-2 ml-1" : "category-link orange-text lvl-5 mb-2 ml-1"} to="/blog">Toutes les catégories</Link>
                            </div>
                            {
                                categoriesData.categories.map((category) => {
                                    return (
                                        <div key={category._id}>
                                            <div className="mt-2">
                                                <Link key={`${id}`} className={category._id === id ? "has-text-dark category-link lvl-5 ml-1 orange-text" : "has-text-dark category-link lvl-5 ml-1"} to={`/blog/${category._id}`}>{category.name}</Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}