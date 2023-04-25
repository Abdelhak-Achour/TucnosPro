import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AdminLinks } from "../components/adminlinks";
import { A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import imageUpload from '../images/image-upload.svg';
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function ManageBlogs()
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
        console.log(categoriesData);
    }, []);

    const [currentSlide, setCurrentSlide] = useState(1);

    const Tabs = () =>
    {
        const swiper = useSwiper();

        function tabSwitch(nb)
        {
            setCurrentSlide(nb);
            swiper.slideTo(nb);
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
                            <Swiper
                                modules={[A11y, EffectFade]}
                                slidesPerView={1}
                                centeredSlides={true}
                                allowTouchMove = {false}
                                autoHeight={true}
                                loop={true}
                                rewind={false}
                                initialSlide = {0}
                                speed={100}
                                effect={"fade"}
                                breakpoints={
                                    {
                                        630:
                                            {
                                                slidesPerView: 1
                                            }
                                    }
                                }
                            >
                                <SwiperSlide>
                                    <div className="under-tab-content p-3">
                                        <Tabs />
                                    </div>
                                    <div className="under-tab-content p-6">
                                        <form className="has-text-left-desktop">
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
                                                                <>

                                                                </>
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
                                        </form>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="under-tab-content p-3">
                                        <Tabs />
                                    </div>
                                    <div className="under-tab-content p-6">
                                        <p className="has-text-dark is-size-5">Nulla ea consectetur aute aliqua est consequat Lorem sint. Sint ad mollit ullamco do pariatur incididunt Lorem est amet. Et culpa et tempor qui tempor irure ipsum Lorem qui do. Aliquip nulla sint officia sit laborum velit laborum eiusmod. Mollit nulla non proident consectetur excepteur id elit quis sint aute voluptate do et aute. Ipsum mollit anim cupidatat labore commodo eiusmod anim proident eu quis id magna do dolore. Et aliquip culpa sit esse. Non excepteur Lorem Lorem deserunt dolor pariatur sit ad est ut quis commodo amet ullamco. Consequat deserunt laboris exercitation magna exercitation eiusmod excepteur reprehenderit sunt minim fugiat in excepteur aute. Laboris cupidatat esse Lorem cupidatat cillum ullamco in voluptate pariatur. Ad eu duis sint laboris sint est culpa qui elit ut. Ullamco veniam magna cupidatat duis ea duis aliquip sit nisi. Quis magna adipisicing occaecat esse. Consectetur dolor ullamco excepteur aute adipisicing deserunt laborum aliquip irure ut qui amet in velit. Mollit amet labore duis ut ad et voluptate exercitation nostrud proident. Fugiat aute Lorem eu ea elit pariatur ullamco irure nisi. Ad aliqua reprehenderit do ipsum culpa aliquip.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="under-tab-content p-3">
                                        <Tabs />
                                    </div>
                                    <div className="under-tab-content p-6">
                                        <p className="has-text-dark is-size-5">Esse ex tempor id commodo. Duis excepteur tempor sunt ea esse mollit nulla. Labore consectetur laboris ut et proident dolor veniam Lorem consectetur. Non sit excepteur id nostrud incididunt exercitation deserunt eiusmod aliquip deserunt. Proident aliquip voluptate et id.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="has-text-centered">
                <button className="button is-medium is-link m-5" onClick={submitHandle}>Ajouter</button>
            </div>
            <p className="title is-1 has-text-centered has-text-dark m-5">Manage Blogs page</p>
            <div className="has-text-centered">
                <button className="button is-link m-5" onClick={logout}>Logout</button>
            </div>
        </>
    )
}

// remove the swiper maybe it's the thing that breaks the react quill size