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
    const [description, setDescription] = useState("");
    const [image, setImage] = useState('');

    function handleImage(event)
    {
        setImage(event.target.files[0]);
    }

    async function submitHandle(event)
    {   
        const formData = new FormData();

        formData.append('image', image);
        formData.append('name', name);
        formData.append('description', description);

        try
        {
            const response = await axios.post("http://localhost:3001/category/", formData, {headers: {auth: cookies.access_token}});
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
        formData.append('name', name);
        formData.append('description', description);

        try
        {
            if (image === '')
            {
                const response = await axios.put("http://localhost:3001/category/noimage",
                {
                    categoryId,
                    name,
                    description
                },
                {headers: {auth: cookies.access_token}});
            }
            else
            {
                const response = await axios.put("http://localhost:3001/category", formData, {headers: {auth: cookies.access_token}});
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
                                                <label className="label">Description</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <textarea class="textarea" placeholder="Description" rows="7" onChange={(event) => setDescription(event.target.value)} required></textarea>
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
                                                <label className="label">Description</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <textarea class="textarea" placeholder="Description" rows="7" onChange={(event) => setDescription(event.target.value)}></textarea>
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
