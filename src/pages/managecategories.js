import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { AdminLinks } from "../components/adminlinks";
import 'swiper/swiper-bundle.css';
import imageUpload from '../images/image-upload.svg';
import axios from "axios";

export function ManageCategories()
{

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
        getcategories()
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

    const [name, setName] = useState("");
    const [image, setImage] = useState('');

    function handleImage(event)
    {
        setImage(event.target.files[0]);
    }

    async function submitHandle(event)
    {   
        try
        {
            const response = await axios.post("http://localhost:3001/category/", {name}, {headers: {auth: cookies.access_token}});
        }
        catch (err)
        {
            console.log(err);
        }
    }

    async function updateHandle(event)
    {
        try
        {
            
            const response = await axios.put("http://localhost:3001/category/",
            {
                categoryId,
                name,
            },
            {headers: {auth: cookies.access_token}});
            
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
            const response = await axios.delete(`http://localhost:3001/category/${categoryId}`, {headers: {auth: cookies.access_token}});
        }
        catch (err)
        {
            console.log(err);
        }
    }

    async function getcategories()
    {
        try
        {
            
            const response = await axios.get(`http://localhost:3001/category/`);
            setCategories(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [categories, setCategories] = useState({categories: []});
    const [categoryId, setCategoryId] = useState("");

    return (
        <>
            <Navbar2 />
            <div className="box m-2 mt-5 is-shadowless">
                <div className="columns">
                    <div className="column is-narrow">
                        <AdminLinks />
                    </div>
                    <div className="column is-11 has-text-centered">
                        <p className="title is-1 has-text-dark">Catégories</p>
                        <div className="formation-details box is-shadowless mt-3 mr-6 ml-6 mb-0 pr-6 pl-6 pt-5">
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className={currentSlide === 1 ? "under-tab-content p-6" : "is-hidden under-tab-content p-6"}>
                                <form className="has-text-left-desktop" onSubmit={submitHandle}>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Nom</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Nom" onChange={(event) => setName(event.target.value)} required />
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
                                                <label className="label">Catégorie à modifier</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="select">
                                                <select onChange={(event) => setCategoryId(event.target.value)} required>
                                                    <option value="">Choisissez une catégorie</option>
                                                    {
                                                        categories.categories.length != 0 ?
                                                        <>
                                                            {
                                                                categories.categories.map((category) => {
                                                                    return (
                                                                        <option key={category._id} value={category._id}>{category.name}</option>
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
                                                <label className="label">Nom</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Nom" onChange={(event) => setName(event.target.value)} />
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
                                                <label className="label">Catégorie à supprimer</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="select">
                                                <select onChange={(event) => setCategoryId(event.target.value)} required>
                                                    <option value="">Choisissez un partenaire</option>
                                                    {
                                                        categories.categories.length != 0 ?
                                                        <>
                                                            {
                                                                categories.categories.map((category) => {
                                                                    return (
                                                                        <option key={category._id} value={category._id}>{category.name}</option>
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
