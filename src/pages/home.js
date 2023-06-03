import React, { useEffect, useRef, useState } from 'react';
import data from '../mock_data.json';
import { Navigation, Pagination, A11y, EffectCoverflow, EffectCreative, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Card } from '../components/card';
import methodsimg from '../images/methods.jpg';
import { FormationCard } from '../components/formationcard';
import { Navbar } from '../components/navbar';
import { Link } from 'react-router-dom';
import SplitType from 'split-type';
import { gsap } from "gsap";
import uuid from 'react-uuid';
import axios from 'axios';

export function Home()
{
    // const lineOneRef = useRef(null);
    
    // const lineOneText = new SplitType(lineOneRef, {types: 'chars', charClass: 'lineonechar'});

    // console.log(lineOneText)

    // gsap.from(lineOneText.chars, {
    //     y: -30,
    //     duration: 0.5,
    //     delay: 2,
    //     stagger: 0.05
    // })

    const [delay, setDelay] = useState(10500);

    async function getFormationsData()
    {
        try
        {
            var response = await axios.get(`http://localhost:3001/formation`);
            setFormationsData(response.data);
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

    const [formationsData, setFormationsData] = useState({formations: []});
    const [categoriesData, setCategoriesData] = useState({categories: []});
    
    useEffect(() => {
        getFormationsData();
        getCategoriesData();
    }, [])

    return (
        <>
            <Navbar />
            <div className='welcome-section'>
                <Swiper
                    modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                    slidesPerView={1}
                    centeredSlides={true}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    allowTouchMove = {false}
                    loop={true}
                    rewind={false}
                    initialSlide = {0}
                    autoplay={{
                        delay: delay,
                        disableOnInteraction: false,
                    }}
                    speed={750}
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
                        <div className = 'home-image'>
                            <p className='title lvl-1 has-text-centered'>Tucnos Pro,</p>
                            <p className='subtitle lvl-1 is-spaced has-text-centered'>Se former, c'est Avancer</p>
                            <div className='buttons-div'>
                                <div className='columns'>
                                    <div className='column is-narrow has-text-centered'>
                                        <Link className='anchor-style' to='/formations'><button className='button medium-height-btn is-medium is-link orange-bg'>VOIR LES COURS</button></Link>
                                    </div>
                                    <div className='column is-narrow has-text-centered'>
                                    <Link className='anchor-style' to='/contact'><button className='button medium-height-btn is-medium is-link'>CONTACTEZ-NOUS</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className = 'home-image-2'>
                            <p className='title lvl-1 has-text-centered'>Tucnos Pro,</p>
                            <p className='subtitle lvl-1 is-spaced has-text-centered'>Se former, c'est Avancer</p>
                            <div className='buttons-div'>
                                <div className='columns'>
                                    <div className='column is-narrow has-text-centered'>
                                        <Link className='anchor-style' to='/formations'><button className='button medium-height-btn is-medium is-link orange-bg'>VOIR LES COURS</button></Link>
                                    </div>
                                    <div className='column is-narrow has-text-centered'>
                                        <Link className='anchor-style' to='/contact'><button className='button medium-height-btn is-medium is-link'>CONTACTEZ-NOUS</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            
            <div className='card-section'>
                <p className='title is-2 mt-0 pt-0 has-text-centered has-text-dark cards-title'> Nous avons ce qu'il vous faut</p>
                <Swiper
                    modules={[Navigation, Pagination, A11y, EffectCoverflow]}
                    slidesPerView={1}
                    centeredSlides={true}
                    navigation
                    pagination={{ clickable: true }}
                    loop={false}
                    rewind={true}
                    initialSlide = {0}
                    grabCursor={true}
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 17,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    breakpoints={
                        {
                            630:
                                {
                                    slidesPerView: 3
                                }
                        }
                    }
                    >
                    {
                        categoriesData.categories.map((category) => {
                            return (
                                <SwiperSlide key = {category._id}>
                                    <Card
                                        id = {category._id}
                                        name = {category.name}
                                        description = {category.description}
                                        image = {category.image}
                                     />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            
            <div className='methods-section'>
                <p className='title is-2 has-text-dark has-text-centered pt-4 mb-0'>Faire la bonne chose au bon moment.</p>
                <div className='box is-shadowless methods-box has-text-centered'>
                    <div className='columns'>
                        <div className='column pr-6'>
                            <p className='title is-3 has-text-grey-dark has-text-centered orange-text'>Notre Centre</p>
                            <p className='has-text-dark methods-p is-size-5'>TucnosPRO est spécialisé dans la formation et le consulting principalement dans les métiers des nouvelles technologies. Nous vous proposons des formations ciblées pour accélérer et faciliter votre intégration dans le milieu professionnel.Notre objectif est de vous garantir une formation qui répond à vos besoins et vous permet d'acquérir de véritables compétences. et vous rendre opérationnels.</p>
                        </div>
                        <div className='column pr-5 pl-5'>
                            <p className='title is-3 has-text-grey-dark has-text-centered orange-text'>Nos atouts</p>
                            <p className='has-text-dark methods-p is-size-5'>C’est par la pratique et l'écoute de nos clients que nous arrivons à faciliter votre insertion professionnel. Les formations qu'on propose s'adressent aussi bien aux entreprises, aux particuliers, étudiants, personnes douées ou encore aux salariés à la recherche d'une formule de reconversion. Nous nous efforçons de traiter le besoins de la façon la plus appropriée possible tout en restant flexible et ouverts à toute suggestion.</p>
                        </div>
                        <div className='column pl-6'>
                            <p className='title is-3 has-text-grey-dark has-text-centered orange-text'>Notre méthode</p>
                            <p className='has-text-dark methods-p is-size-5'>TucnosPRO vous propose des formations pratiques, sur-mesure et adaptés à vos besoins. Développez votre savoir-faire et vos compétences grâce à nos formations orientées métiers. Pratiques, adaptées et riches, nos formations répondent parfaitement aux besoins du marché du travail actuel. Nos formateurs qualifiés sont disponibles pour vous accompagner tout au long de votre passage chez nous.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='formations-section'>
                <div className='formations-section-title'>
                    <a className='title is-1 has-text-dark'>Les sessions en cours</a>
                </div>
                <div className='box formations-container'>
                {
                    formationsData.formations ?
                    <>
                        {
                            formationsData.formations.map((formation) => {
                                return (
                                    <div key = {formation._id}>
                                        <FormationCard
                                            key = {formation._id}
                                            id = {formation._id}
                                            image = {formation.image}
                                            name = {formation.name}
                                            duration = {formation.duration}
                                            date = {formation.date}
                                            price = {formation.price}
                                            description = {formation.description}
                                            formateur = {formation.formateur}
                                        />
                                    </div>
                                )
                            })
                        }
                    </> :
                    <></>
                }
                </div>
            </div>
        </>
    )
}