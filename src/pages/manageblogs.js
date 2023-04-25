import React, { useEffect, useState } from "react";
import { Navbar2 } from "../components/navbar2";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AdminLinks } from "../components/adminlinks";
import { A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export function ManageBlogs()
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
    }, []);

    const [currentSlide, setCurrentSlide] = useState(1);

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

    return (
        <>
            <Navbar2 />
            <div className="box m-2 mt-5">
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
                                        <p className="has-text-dark is-size-5">Cillum irure enim ipsum aliqua non cillum reprehenderit ipsum nostrud. Eiusmod dolore enim ea in qui veniam ipsum. Do aliqua et nostrud dolore incididunt amet nostrud eiusmod ullamco. Consectetur quis velit officia irure eu aliquip duis enim excepteur deserunt minim dolor eiusmod id. Elit eiusmod consequat voluptate consectetur commodo excepteur et elit proident pariatur labore.</p>
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
            <p className="title is-1 has-text-centered has-text-dark m-5">Manage Blogs page</p>
            <div className="has-text-centered">
                <button className="button is-link m-5" onClick={logout}>Logout</button>
            </div>
        </>
    )
}