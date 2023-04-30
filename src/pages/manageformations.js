import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { AdminLinks } from "../components/adminlinks";
import 'swiper/swiper-bundle.css';
import imageUpload from '../images/image-upload.svg';
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function ManageFormations()
{
    document.addEventListener('DOMContentLoaded', () => {
        // 1. Display file name when select file
        let fileInputs = document.querySelectorAll('.file.has-name')
        for (let fileInput of fileInputs) {
          let input = fileInput.querySelector('.file-input')
          let name = fileInput.querySelector('.file-name')
          input.addEventListener('change', () => {
            let files = input.files
            if (files.length === 0) {
              name.innerText = 'photo'
            } else {
              name.innerText = files[0].name
            }
          })
        }
    // 2. Remove file name when form reset
    let forms = document.getElementsByTagName('form')
    for (let form of forms) {
    form.addEventListener('reset', () => {
        console.log('a')
        let names = form.querySelectorAll('.file-name')
        for (let name of names) {
        name.innerText = 'Aucune photo choisie'
        }
    })
    }
    });

    const [cookies, setCookies, removeCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    function logout()
    {
        removeCookies("access_token");
        window.localStorage.removeItem("userID");
        window.localStorage.removeItem("remember");
        window.sessionStorage.removeItem("remember");
        navigate("/login");
    };

    useEffect(() => {
        if(window.localStorage.getItem("remember") || window.sessionStorage.getItem("remember"))
        {

        }
        else
        {
            logout();
        }
        getCategoriesData();
        getBlogsData()
    }, []);

    const [currentSlide, setCurrentSlide] = useState(1);

    const Tabs = () =>
    {
        function tabSwitch(nb)
        {
            setCurrentSlide(nb);
        };

        return(
            <>
                <div className="tabs is-toggle is-centered">
                    <ul>
                        <li className={currentSlide === 1 ? "is-active" : ""} onClick={() => {tabSwitch(1)}}>
                            <a className="is-size-5">Ajouter</a>
                        </li>
                        <li className={currentSlide === 2 ? "is-active" : ""} onClick={() => {tabSwitch(2)}}>
                            <a className="is-size-5">Modifier</a>
                        </li>
                        <li className={currentSlide === 3 ? "is-active" : ""} onClick={() => {tabSwitch(3)}}>
                            <a className="is-size-5">Supprimer</a>
                        </li>
                    </ul>
                </div>
            </>
        )
    }

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState('');
    const [content, setContent] = useState("");

    function handleImage(event)
    {
        setImage(event.target.files[0]);
    }

    async function submitHandle(event)
    {
        if(category === "")
        {
            event.preventDefault();
            alert("Choissisez une catégorie")
        }
        const formData = new FormData();

        formData.append('image', image);
        formData.append('title', title);
        formData.append('category', category);
        formData.append('content', content);

        try
        {
            const response = await axios.post("http://localhost:3001/blog", formData, {headers: {auth: cookies.access_token}});
        }
        catch (err)
        {
            console.log(err);
        }
    }

    async function updateHandle(event)
    {
        const formData = new FormData();

        formData.append('image', image);
        formData.append('blogId', blogId);
        formData.append('title', title);
        formData.append('category', category);
        formData.append('content', content);

        try
        {
            if (image === '')
            {
                const response = await axios.put("http://localhost:3001/blog/noimage",
                {
                    blogId,
                    title,
                    category,
                    content
                },
                {headers: {auth: cookies.access_token}});
            }
            else
            {
                const response = await axios.put("http://localhost:3001/blog", formData, {headers: {auth: cookies.access_token}});
            }
        }
        catch (err)
        {
            console.log(err);
        }
    }

    async function deleteHandle(event)
    {
        try
        {
            console.log(blogId);
            const response = await axios.delete(`http://localhost:3001/blog/${blogId}`, {headers: {auth: cookies.access_token}});
        }
        catch (err)
        {
            console.log(err);
        }
    }

    async function getBlogsData()
    {
        try
        {
            
            const response = await axios.get(`http://localhost:3001/blog`);
            setBlogsData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [blogsData, setBlogsData] = useState({blogs: []});
    const [blogId, setBlogId] = useState("");

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

    const [categoriesData, setCategoriesData] = useState({categories: []});

    const modules = {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          [{ color: [ "#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", ] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link'],
          ['clean'],
        ],
    };

    return (
        <>
            <Navbar2 />
            <div className="box m-2 mt-5 is-shadowless">
                <div className="columns">
                    <div className="column is-narrow">
                        <AdminLinks />
                    </div>
                    <div className="column is-11 has-text-centered">
                        <div className="formation-details box is-shadowless mt-6 mr-6 ml-6 mb-0 pr-6 pl-6 pt-5">
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className={currentSlide === 1 ? "under-tab-content p-6" : "is-hidden under-tab-content p-6"}>
                                <form className="has-text-left-desktop" onSubmit={submitHandle}>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Title</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="title" placeholder="Title" onChange={(event) => setTitle(event.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Photo</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="file has-name">
                                            <label className="file-label">
                                                <input className="file-input" type="file" name="image" accept="images/png,image/jpg,image/jpeg" onChange={handleImage} required />
                                                <span className="file-cta">
                                                    <img className="image-upload-icon" src={imageUpload} alt="up" />
                                                    <span className="file-label pl-2">
                                                        Choisisez une photo ...
                                                    </span>
                                                </span>
                                                <span className="file-name">
                                                    Aucune photo choisie
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Catégorie</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="select">
                                                <select onChange={(event) => setCategory(event.target.value)} required>
                                                    <option value="">Choisissez une catégorie</option>
                                                    {
                                                        categoriesData.categories.length != 0 ?
                                                        <>
                                                            {
                                                                categoriesData.categories.map((category) => {
                                                                    return (
                                                                        <option key={category._id} value={category.name}>{category.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </> :
                                                        <></>
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Contenu</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={content} modules={modules} onChange={(text) => setContent(text)} />
                                        </div>
                                    </div>
                                    <div className="has-text-left">
                                        <button className="button is-medium is-link" type="submit">Ajouter</button>
                                    </div>
                                </form>
                            </div>
                            <div className={currentSlide === 2 ? "under-tab-content p-6" : "is-hidden under-tab-content p-6"}>
                            <form className="has-text-left-desktop" onSubmit={updateHandle}>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Blog à modifier</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="select">
                                                <select onChange={(event) => setBlogId(event.target.value)} required>
                                                    <option value="">Choisissez une blog</option>
                                                    {
                                                        blogsData.blogs.length != 0 ?
                                                        <>
                                                            {
                                                                blogsData.blogs.map((blog) => {
                                                                    return (
                                                                        <option key={blog._id} value={blog._id}>{blog.title}</option>
                                                                    )
                                                                })
                                                            }
                                                        </> :
                                                        <></>
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Title</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="title" placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Photo</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="file has-name">
                                            <label className="file-label">
                                                <input className="file-input" type="file" name="image" accept="images/png,image/jpg,image/jpeg" onChange={handleImage} />
                                                <span className="file-cta">
                                                    <img className="image-upload-icon" src={imageUpload} alt="up" />
                                                    <span className="file-label pl-2">
                                                        Choisisez une photo ...
                                                    </span>
                                                </span>
                                                <span className="file-name">
                                                    Aucune photo choisie
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Catégorie</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="select">
                                                <select onChange={(event) => setCategory(event.target.value)}>
                                                    <option value="">Choisissez une catégorie</option>
                                                    {
                                                        categoriesData.categories.length != 0 ?
                                                        <>
                                                            {
                                                                categoriesData.categories.map((category) => {
                                                                    return (
                                                                        <option key={category._id} value={category.name}>{category.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </> :
                                                        <></>
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Contenu</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={content} modules={modules} onChange={(text) => setContent(text)} />
                                        </div>
                                    </div>
                                    <div className="has-text-left">
                                        <button className="button is-medium is-link" type="submit">Modifier</button>
                                    </div>
                                </form>
                            </div>
                            <div className={currentSlide === 3 ? "under-tab-content p-6" : "is-hidden under-tab-content p-6"}>
                                <form className="has-text-left-desktop" onSubmit={deleteHandle}>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Blog à supprimer</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="select">
                                                <select onChange={(event) => setBlogId(event.target.value)} required>
                                                    <option value="">Choisissez une blog</option>
                                                    {
                                                        blogsData.blogs.length != 0 ?
                                                        <>
                                                            {
                                                                blogsData.blogs.map((blog) => {
                                                                    return (
                                                                        <option key={blog._id} value={blog._id}>{blog.title}</option>
                                                                    )
                                                                })
                                                            }
                                                        </> :
                                                        <></>
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="has-text-left">
                                        <button className="button is-medium is-link" type="submit">Supprimer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
