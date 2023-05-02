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
import dateformater from "date-and-time";

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
        getFormationsData()
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
    const [category, setCategory] = useState("");
    const [image, setImage] = useState('');
    const [formateurImage, setFormateurImage] = useState('');
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");
    const [long_description, setLong_description] = useState("");
    const [formateur, setFormateur] = useState("");
    const [program, setProgram] = useState("");
    const [requirements, setRequirements] = useState("");
    const [objectif, setObjectif] = useState("");
    const [plan, setPlan] = useState("");
    const [tools, setTools] = useState("");
    const [target, setTarget] = useState("");

    useEffect(() => {
        console.log(date);
        console.log(typeof date);
    }, [date])

    function handleImage(event)
    {
        setImage(event.target.files[0]);
    }

    function handleFormateurImage(event)
    {
        setFormateurImage(event.target.files[0]);
    }

    function handleDate(value)
    {
        const dateNtime = value.split('-');
        const formattedDate = `${dateNtime[2]}-${dateNtime[1]}-${dateNtime[0]}`
        setDate(formattedDate);
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
        formData.append('image', formateurImage);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('date', date);
        formData.append('duration', duration);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('long_description', long_description);
        formData.append('formateur', formateur);
        formData.append('program', program);
        formData.append('requirements', requirements);
        formData.append('objectif', objectif);
        formData.append('plan', plan);
        formData.append('tools', tools);
        formData.append('target', target);

        try
        {
            const response = await axios.post("http://localhost:3001/formation", formData, {headers: {auth: cookies.access_token}});
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
        formData.append('image', formateurImage);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('date', date);
        formData.append('duration', duration);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('long_description', long_description);
        formData.append('formateur', formateur);
        formData.append('program', program);
        formData.append('requirements', requirements);
        formData.append('objectif', objectif);
        formData.append('plan', plan);
        formData.append('tools', tools);
        formData.append('target', target);

        try
        {
            if (image === '' && formateurImage === '')
            {
                const response = await axios.put("http://localhost:3001/formation/noimage",
                {
                    formationId,
                    name,
                    price,
                    date,
                    duration,
                    category,
                    description,
                    long_description,
                    formateur,
                    program,
                    requirements,
                    objectif,
                    plan,
                    tools,
                    target},
                {headers: {auth: cookies.access_token}});
            }
            else if (image != '' && formateurImage === '')
            {
                const imageformData = new FormData();

                imageformData.append('image', image);
                imageformData.append('name', name);
                imageformData.append('price', price);
                imageformData.append('date', date);
                imageformData.append('duration', duration);
                imageformData.append('category', category);
                imageformData.append('description', description);
                imageformData.append('long_description', long_description);
                imageformData.append('formateur', formateur);
                imageformData.append('program', program);
                imageformData.append('requirements', requirements);
                imageformData.append('objectif', objectif);
                imageformData.append('plan', plan);
                imageformData.append('tools', tools);
                imageformData.append('target', target);

                const response = await axios.put("http://localhost:3001/formation/image", formData, {headers: {auth: cookies.access_token}});
            }
            else if (image === '' && formateurImage != '')
            {
                const imageformData = new FormData();

                imageformData.append('image', formateurImage);
                imageformData.append('name', name);
                imageformData.append('price', price);
                imageformData.append('date', date);
                imageformData.append('duration', duration);
                imageformData.append('category', category);
                imageformData.append('description', description);
                imageformData.append('long_description', long_description);
                imageformData.append('formateur', formateur);
                imageformData.append('program', program);
                imageformData.append('requirements', requirements);
                imageformData.append('objectif', objectif);
                imageformData.append('plan', plan);
                imageformData.append('tools', tools);
                imageformData.append('target', target);

                const response = await axios.put("http://localhost:3001/formation/formateurimage", formData, {headers: {auth: cookies.access_token}});
            }
            else
            {
                const response = await axios.put("http://localhost:3001/formation", formData, {headers: {auth: cookies.access_token}});
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
            console.log(formationId);
            const response = await axios.delete(`http://localhost:3001/formation/${formationId}`, {headers: {auth: cookies.access_token}});
        }
        catch (err)
        {
            console.log(err);
        }
    }

    async function getFormationsData()
    {
        try
        {
            
            const response = await axios.get(`http://localhost:3001/formation`);
            setFormationsData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const [formationsData, setFormationsData] = useState({formations: []});
    const [formationId, setFormationId] = useState("");

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
                        <p className="title is-1 has-text-dark">Formations</p>
                        <div className="formation-details box is-shadowless mt-3 mr-6 ml-6 mb-0 pr-6 pl-6 pt-5">
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className={currentSlide === 1 ? "under-tab-content p-6" : "is-hidden under-tab-content p-6"}>
                                <form className="has-text-left-desktop" onSubmit={submitHandle}>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Titre</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Titre" onChange={(event) => setName(event.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Prix</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Prix" onChange={(event) => setPrice(event.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Durée</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Durée" onChange={(event) => setDuration(event.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Formateur</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Formateur" onChange={(event) => setFormateur(event.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Date</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="date" onChange={(event) => handleDate(event.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Description bref</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <textarea class="textarea" placeholder="Description bref" rows="7" onChange={(event) => setDescription(event.target.value)} required></textarea>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Photo du formation</label>
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
                                                <label className="label">Photo du formateur</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="file has-name">
                                            <label className="file-label">
                                                <input className="file-input" type="file" name="image" accept="images/png,image/jpg,image/jpeg" onChange={handleFormateurImage} required />
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
                                                <label className="label">Description</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={long_description} modules={modules} onChange={(text) => setLong_description(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Program</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={program} modules={modules} onChange={(text) => setProgram(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Pré-requis</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={requirements} modules={modules} onChange={(text) => setRequirements(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Objectif</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={objectif} modules={modules} onChange={(text) => setObjectif(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Déroulement</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={plan} modules={modules} onChange={(text) => setPlan(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Les outils</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={tools} modules={modules} onChange={(text) => setTools(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Public cible</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={target} modules={modules} onChange={(text) => setTarget(text)} preserveWhitespace />
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
                                                <label className="label">Formation à modifier</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="select">
                                                <select onChange={(event) => setFormationId(event.target.value)} required>
                                                    <option value="">Choisissez une formation</option>
                                                    {
                                                        formationsData.formations.length != 0 ?
                                                        <>
                                                            {
                                                                formationsData.formations.map((formation) => {
                                                                    return (
                                                                        <option key={formation._id} value={formation._id}>{formation.name}</option>
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
                                                <label className="label">Titre</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Titre" onChange={(event) => setName(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Prix</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Prix" onChange={(event) => setPrice(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Durée</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Durée" onChange={(event) => setDuration(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Formateur</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="name" placeholder="Formateur" onChange={(event) => setFormateur(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Date</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="date" onChange={(event) => handleDate(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Description bref</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <textarea class="textarea" placeholder="Description bref" rows="7" onChange={(event) => setDescription(event.target.value)}></textarea>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Photo du formation</label>
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
                                                <label className="label">Photo du formateur</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="file has-name">
                                            <label className="file-label">
                                                <input className="file-input" type="file" name="image" accept="images/png,image/jpg,image/jpeg" onChange={handleFormateurImage} />
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
                                                <label className="label">Description</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={long_description} modules={modules} onChange={(text) => setLong_description(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Program</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={program} modules={modules} onChange={(text) => setProgram(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Pré-requis</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={requirements} modules={modules} onChange={(text) => setRequirements(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Objectif</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={objectif} modules={modules} onChange={(text) => setObjectif(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Déroulement</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={plan} modules={modules} onChange={(text) => setPlan(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Les outils</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={tools} modules={modules} onChange={(text) => setTools(text)} preserveWhitespace />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns is-mobile">
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <label className="label">Public cible</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control has-text-dark">
                                            <ReactQuill value={target} modules={modules} onChange={(text) => setTarget(text)} preserveWhitespace />
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
                                                <label className="label">Formation à supprimer</label>
                                            </div>
                                            <div className="column pb-0 pr-0 is-narrow">
                                                <p className="orange-star">*</p>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="select">
                                                <select onChange={(event) => setFormationId(event.target.value)} required>
                                                    <option value="">Choisissez une formation</option>
                                                    {
                                                        formationsData.formations.length != 0 ?
                                                        <>
                                                            {
                                                                formationsData.formations.map((formation) => {
                                                                    return (
                                                                        <option key={formation._id} value={formation._id}>{formation.name}</option>
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
