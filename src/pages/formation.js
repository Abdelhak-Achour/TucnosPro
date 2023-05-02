import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar2 } from "../components/navbar2";
import data from '../mock_data.json';
import { A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import uuid from "react-uuid";
import axios from "axios";

export function Formation()
{
    const { id } = useParams();
    const [currentSlide, setCurrentSlide] = useState(1);
    const [formationData, setFormationData] = useState({formation: {}});

    async function getFormationData()
    {
        try
        {
            var response = await axios.get(`http://localhost:3001/formation/${id}`);
            setFormationData(response.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const navigate = useNavigate()

    useEffect(() =>
    {
        getFormationData();
    }, []);

    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    async function submitHandle(event)
    {
        try
        {
            const response = await axios.post("http://localhost:3001/formation/comment", {
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

    const Tabs = () =>
    {
        const swiper = useSwiper();
        console.log(swiper);

        function tabSwitch(nb)
        {
            setCurrentSlide(nb);
            swiper.slideTo(nb);
        };

        return(
            <>
                <div className="tabs is-toggle is-fullwidth">
                    <ul>
                        <li className={currentSlide === 1 ? "is-active" : ""} onClick={() => {tabSwitch(1)}}>
                            <a className="is-size-5">description</a>
                        </li>
                        <li className={currentSlide === 2 ? "is-active" : ""} onClick={() => {tabSwitch(2)}}>
                            <a className="is-size-5">programme</a>
                        </li>
                        <li className={currentSlide === 3 ? "is-active" : ""} onClick={() => {tabSwitch(3)}}>
                            <a className="is-size-5">pré-requis</a>
                        </li>
                        <li className={currentSlide === 4 ? "is-active" : ""} onClick={() => {tabSwitch(4)}}>
                            <a className="is-size-5">objectif</a>
                        </li>
                        <li className={currentSlide === 5 ? "is-active" : ""} onClick={() => {tabSwitch(5)}}>
                            <a className="is-size-5">déroulement</a>
                        </li>
                        <li className={currentSlide === 6 ? "is-active" : ""} onClick={() => {tabSwitch(6)}}>
                            <a className="is-size-5">les outils</a>
                        </li>
                        <li className={currentSlide === 7 ? "is-active" : ""} onClick={() => {tabSwitch(7)}}>
                            <a className="is-size-5">public cible</a>
                        </li>
                    </ul>
                </div>
            </>
        )
    }

    return(
        <>
            <Navbar2 />
            <p className="title is-1 m-6 pt-6 has-text-centered has-text-dark formation-title">{formationData.formation.name ? formationData.formation.name : ""}</p>
            {
                formationData.formation ?
                <div className="box formation-info-box m-6">
                    <div className="columns">
                        <div className="column is-narrow">
                            <img className="formation-page-image" src = {require(`../images/${formationData.formation.image ? formationData.formation.image : "logo_tucnospro.png"}`)} alt = "formation" />
                        </div>
                        <div className="column is-narrow">
                            <div className="columns is-mobile">
                                <div className="column is-narrow">
                                    <img className="formateur-image" src = {require(`../images/${formationData.formation.formateur_image ? formationData.formation.formateur_image : "logo_tucnospro.png"}`)} alt = "formateur" />
                                </div>
                                <div className="column is-narrow">
                                    <div className="box is-shadowless pt-1 pb-1 pr-0 pl-0">
                                        <p className="subtitle is-4 has-text-dark">Formateur:</p>
                                        <p className="title is-3 has-text-dark">{formationData.formation.formateur ? formationData.formation.formateur : ""}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-mobile">
                                <div className="column is-narrow">
                                    <p className="is-size-4 has-text-dark">Durée:</p>
                                </div>
                                <div className="column is-narrow pl-0">
                                    <p className="is-size-4 has-text-dark">{formationData.formation.duration ? formationData.formation.duration : ""} heures</p>
                                </div>
                            </div>
                            <div className="columns is-mobile">
                                <div className="column pt-0 is-narrow">
                                    <p className="is-size-4 has-text-dark">Date:</p>
                                </div>
                                <div className="column pt-0 is-narrow pl-0">
                                    <p className="is-size-4 has-text-dark">{formationData.formation.date ? formationData.formation.date : ""}</p>
                                </div>
                            </div>
                            <div className="columns is-mobile">
                                <div className="column pt-0 is-narrow">
                                    <p className="is-size-4 has-text-dark">Prix:</p>
                                </div>
                                <div className="column pt-0 is-narrow pl-0">
                                    <p className="is-size-4 has-text-dark">{formationData.formation.price ? formationData.formation.price : ""} TND</p>
                                </div>
                            </div>
                            <div className="columns is-mobile">
                                <div className="column pt-0 is-narrow">
                                    <Link to={`/formations/${id}/inscrire`}><button className="button is-medium is-link">S'INSCRIRE</button></Link>
                                </div>
                                <div className="column pt-0 is-narrow pl-0">
                                    <Link to={`/formations/${id}/inscrire`}><button className="button is-medium is-link">CATALOGUE</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
            {
                formationData.formation ?
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
                                <div className="has-text-dark is-size-5" dangerouslySetInnerHTML={{__html: formationData.formation.long_description ? formationData.formation.long_description : ""}} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <div className="has-text-dark is-size-5" dangerouslySetInnerHTML={{__html: formationData.formation.program ? formationData.formation.program : ""}} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <div className="has-text-dark is-size-5" dangerouslySetInnerHTML={{__html: formationData.formation.requirements ? formationData.formation.requirements : ""}} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <div className="has-text-dark is-size-5" dangerouslySetInnerHTML={{__html: formationData.formation.objectif ? formationData.formation.objectif : ""}} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <div className="has-text-dark is-size-5" dangerouslySetInnerHTML={{__html: formationData.formation.plan ? formationData.formation.plan : ""}} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <div className="has-text-dark is-size-5" dangerouslySetInnerHTML={{__html: formationData.formation.tools ? formationData.formation.tools : ""}} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                            <div className="has-text-dark is-size-5" dangerouslySetInnerHTML={{__html: formationData.formation.target ? formationData.formation.target : ""}} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        </SwiperSlide>
                    </Swiper>
                </div>
                :
                <></>
            }
            <div className="leave-comment-section">
                <hr className="comment-hr" />
                <p className="title orange-text has-text-centered">QU'EN PENSEZ-VOUS ?</p>
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
                    formationData.formation.comments ?
                    <div>
                        <hr className="comment-hr" />
                        <p className={formationData.formation.comments.length === 0 ? "title has-text-dark has-text-centered mb-6 orange-text" : "is-hidden"}>Il n'y a pas encore de commentaire.</p>
                        <div className={formationData.formation.comments.length === 0 ? "is-hidden" : "comments"}>
                            <p className="title has-text-dark has-text-centered orange-text">Commentaires</p>
                            {
                                formationData.formation.comments.map((comment) =>
                                {
                                    return(
                                        <div key={comment._id}>
                                            <p className="title is-4 mb-0 pb-0 has-text-dark">{comment.username}</p>
                                            <p className="has-text-dark lvl-10 mt-0 pt-0">{comment.date}</p>
                                            <p className="subtitle is-5 has-text-dark mb-6 mt-2">{comment.comment}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
        </>
    )
}