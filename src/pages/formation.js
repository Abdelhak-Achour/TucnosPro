import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar2 } from "../components/navbar2";
import data from '../mock_data.json';
import { A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import uuid from "react-uuid";

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

                <div className="box is-shadowless mt-6 mr-6 ml-6 mb-0 pr-6 pl-6 pt-5">
                    <Swiper
                        modules={[A11y, EffectFade]}
                        slidesPerView={1}
                        centeredSlides={true}
                        allowTouchMove = {true}
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
                                <p className="title has-text-dark">description:</p>
                                <p className="has-text-dark">Cillum irure enim ipsum aliqua non cillum reprehenderit ipsum nostrud. Eiusmod dolore enim ea in qui veniam ipsum. Do aliqua et nostrud dolore incididunt amet nostrud eiusmod ullamco. Consectetur quis velit officia irure eu aliquip duis enim excepteur deserunt minim dolor eiusmod id. Elit eiusmod consequat voluptate consectetur commodo excepteur et elit proident pariatur labore.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">programme:</p>
                                <p className="has-text-dark">Nulla ea consectetur aute aliqua est consequat Lorem sint. Sint ad mollit ullamco do pariatur incididunt Lorem est amet. Et culpa et tempor qui tempor irure ipsum Lorem qui do. Aliquip nulla sint officia sit laborum velit laborum eiusmod. Mollit nulla non proident consectetur excepteur id elit quis sint aute voluptate do et aute. Ipsum mollit anim cupidatat labore commodo eiusmod anim proident eu quis id magna do dolore. Et aliquip culpa sit esse. Non excepteur Lorem Lorem deserunt dolor pariatur sit ad est ut quis commodo amet ullamco. Consequat deserunt laboris exercitation magna exercitation eiusmod excepteur reprehenderit sunt minim fugiat in excepteur aute. Laboris cupidatat esse Lorem cupidatat cillum ullamco in voluptate pariatur. Ad eu duis sint laboris sint est culpa qui elit ut. Ullamco veniam magna cupidatat duis ea duis aliquip sit nisi. Quis magna adipisicing occaecat esse. Consectetur dolor ullamco excepteur aute adipisicing deserunt laborum aliquip irure ut qui amet in velit. Mollit amet labore duis ut ad et voluptate exercitation nostrud proident. Fugiat aute Lorem eu ea elit pariatur ullamco irure nisi. Ad aliqua reprehenderit do ipsum culpa aliquip.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">pré-requis:</p>
                                <p className="has-text-dark">Esse ex tempor id commodo. Duis excepteur tempor sunt ea esse mollit nulla. Labore consectetur laboris ut et proident dolor veniam Lorem consectetur. Non sit excepteur id nostrud incididunt exercitation deserunt eiusmod aliquip deserunt. Proident aliquip voluptate et id.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">objectif:</p>
                                <p className="has-text-dark">Cillum pariatur esse duis officia. Amet cupidatat do cupidatat voluptate reprehenderit id id irure magna ad. Adipisicing voluptate commodo ullamco pariatur nulla sit nulla quis Lorem aliquip elit incididunt aliqua. Labore dolore elit amet voluptate occaecat. Nostrud laboris exercitation occaecat aliqua anim.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">déroulement:</p>
                                <p className="has-text-dark">Labore aute qui veniam voluptate mollit do ullamco. Dolore proident ullamco incididunt et consectetur reprehenderit magna tempor consequat proident ex magna elit veniam. Tempor do velit voluptate culpa dolor laboris ipsum. Laborum consectetur velit aliqua labore adipisicing sint sit ipsum nostrud Lorem Lorem. Qui irure dolore eu officia anim et dolore occaecat aliquip. Ullamco pariatur eu occaecat deserunt cupidatat aliqua dolore cillum occaecat laboris voluptate irure incididunt aliquip.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">les outils:</p>
                                <p className="has-text-dark">Lorem amet tempor reprehenderit labore consequat minim et commodo. Laboris dolor id culpa eu. Labore sint voluptate exercitation laborum pariatur. Minim reprehenderit occaecat excepteur eu dolore nisi officia ipsum. Aute ea ullamco officia velit cillum nulla. Ex nostrud sunt ut in anim fugiat aute incididunt ex pariatur. Mollit sint pariatur velit pariatur incididunt culpa mollit culpa occaecat irure aliquip labore deserunt aliquip. Ut mollit labore velit eiusmod labore anim pariatur cupidatat dolor qui occaecat. Anim et reprehenderit labore officia tempor duis ullamco dolore. Aute nostrud officia minim laborum excepteur commodo ex officia elit sunt anim. Deserunt nulla laborum aliquip deserunt proident tempor mollit ut non. Elit proident pariatur nostrud elit esse et anim non. Occaecat cupidatat voluptate ea sint fugiat ea amet occaecat ea aute nulla. Commodo eiusmod aute enim consectetur dolore cillum occaecat id irure ut anim. Voluptate aliqua occaecat adipisicing velit veniam fugiat pariatur cupidatat sit reprehenderit quis culpa. Proident mollit enim sint esse. Nisi nostrud aliqua anim consectetur. Esse nisi minim minim quis eu aute cupidatat laborum labore consectetur non. Esse duis veniam laboris irure do laborum exercitation do proident qui irure est ut eiusmod. Dolore anim Lorem laborum anim. Nostrud occaecat sit amet ipsum. Occaecat ullamco cupidatat aliqua consequat adipisicing Lorem deserunt ex. Deserunt aliquip laborum irure irure excepteur est amet amet duis id labore. Culpa minim cupidatat aliqua cillum. Sit eiusmod laborum qui esse amet nostrud commodo labore tempor.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="under-tab-content p-3">
                                <Tabs />
                            </div>
                            <div className="under-tab-content p-6">
                                <p className="title has-text-dark">public cible:</p>
                                <p className="has-text-dark">Velit sint laborum qui magna veniam. Do labore adipisicing non quis ullamco. Ullamco deserunt in anim est duis reprehenderit nostrud amet exercitation ipsum elit ut amet.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="leave-comment-section">
                    <hr className="comment-hr" />
                    <p className="title orange-text has-text-centered">QU'EN PENSEZ-VOUS ?</p>
                    <form className="box leave-comment-form">
                        <div className="field">
                            <label className="label">NOM D'UTILISATEUR</label>
                            <div className="control">
                                <input className="input" type="username" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">VOTRE MESSAGE</label>
                            <div className="control">
                                <textarea className="textarea" type="message"></textarea>
                            </div>
                        </div>
                        <button className="button is-link">Publier un commentaire</button>
                    </form>
                </div>

                <div className="comment-section">
                    <hr className="comment-hr" />
                    <p className={data.formations[id-1].comments.length === 0 ? "title has-text-dark has-text-centered mb-6 orange-text" : "is-hidden"}>Il n'y a pas encore de commentaire.</p>
                    <div className={data.formations[id-1].comments.length === 0 ? "is-hidden" : "comments"}>
                        <p className="title has-text-dark has-text-centered orange-text">Commentaires</p>
                        {
                            data.formations[id-1].comments.map((comment) =>
                            {
                                return(
                                    <div key={uuid()}>
                                        <p className="title is-4 mb-0 pb-0 has-text-dark">{comment.username}</p>
                                        <p className="has-text-dark lvl-10 mt-0 pt-0">{comment.date}</p>
                                        <p className="subtitle is-5 has-text-dark mb-6 mt-2">{comment.comment}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
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