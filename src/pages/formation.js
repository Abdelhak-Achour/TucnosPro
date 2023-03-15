import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar2 } from "../components/navbar2";
import data from '../mock_data.json';
import { A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export function Formation()
{
    const [currentSlide, setCurrentSlide] = useState(1);

    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(() =>
    {
        if(id > data.formations.length)
        {
            navigate("/not-found");
        }
    });

    const image = data.formations[id-1].image;

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
                            <a>description</a>
                        </li>
                        <li className={currentSlide === 2 ? "is-active" : ""} onClick={() => {tabSwitch(2)}}>
                            <a>programme</a>
                        </li>
                        <li className={currentSlide === 3 ? "is-active" : ""} onClick={() => {tabSwitch(3)}}>
                            <a>pré-requis</a>
                        </li>
                        <li className={currentSlide === 4 ? "is-active" : ""} onClick={() => {tabSwitch(4)}}>
                            <a>objectif</a>
                        </li>
                        <li className={currentSlide === 5 ? "is-active" : ""} onClick={() => {tabSwitch(5)}}>
                            <a>déroulement</a>
                        </li>
                        <li className={currentSlide === 6 ? "is-active" : ""} onClick={() => {tabSwitch(6)}}>
                            <a>les outils</a>
                        </li>
                        <li className={currentSlide === 7 ? "is-active" : ""} onClick={() => {tabSwitch(7)}}>
                            <a>public cible</a>
                        </li>
                    </ul>
                </div>
            </>
        )
    }

    if(id<=data.formations.length)
    {
        return(
            <>
                <Navbar2 />
                <p className="title is-1 m-6 pt-6 has-text-centered has-text-dark formation-title">{data.formations[id-1].name}</p>
                <div className="box formation-info-box m-6">
                    <div className="columns">
                        <div className="column is-narrow">
                            <img className="formation-page-image" src = {require(`../images/${image}`)} alt = "formation" />
                        </div>
                        <div className="column is-narrow">
                            <div className="columns">
                                <div className="column is-narrow">
                                    <img className="formateur-image" src = {require(`../images/not_real_person_2.png`)} alt = "formateur" />
                                </div>
                                <div className="column is-narrow">
                                    <div className="box is-shadowless pt-1 pb-1 pr-0 pl-0">
                                        <p className="subtitle is-4 has-text-dark">Formateur:</p>
                                        <p className="title is-3 has-text-dark">{data.formations[id-1].formateur}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-narrow">
                                    <p className="is-size-3 has-text-dark">Durée:</p>
                                </div>
                                <div className="column is-narrow pl-0">
                                    <p className="is-size-3 has-text-dark">{data.formations[id-1].duration} heures</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column pt-0 is-narrow">
                                    <p className="is-size-3 has-text-dark">Date:</p>
                                </div>
                                <div className="column pt-0 is-narrow pl-0">
                                    <p className="is-size-3 has-text-dark">{data.formations[id-1].date}</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column pt-0 is-narrow">
                                    <p className="is-size-3 has-text-dark">Prix:</p>
                                </div>
                                <div className="column pt-0 is-narrow pl-0">
                                    <p className="is-size-3 has-text-dark">{data.formations[id-1].price} TND</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column pt-0 is-narrow">
                                    <Link to="/inscription"><button className="button is-medium is-link">S'INSCRIRE</button></Link>
                                </div>
                                <div className="column pt-0 is-narrow pl-0">
                                <Link to="/inscription"><button className="button is-medium is-link">CATALOGUE</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box is-shadowless m-6 pr-6 pl-6 pt-5">
                    <Swiper
                        modules={[A11y, EffectFade]}
                        slidesPerView={1}
                        centeredSlides={true}
                        allowTouchMove = {true}
                        loop={true}
                        rewind={false}
                        initialSlide = {0}
                        speed={150}
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
                                <p className="title has-text-dark">description:</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">programme:</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">pré-requis:</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">objectif:</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">déroulement:</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">les outils:</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">public cible:</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </>
        )
    }
    else
    {
        return(
            <>
                <p className="title is-1 has-text-centered has-text-dark">Formation {id} n'existe pas</p>
            </>
        )
    }
}