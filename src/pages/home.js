import React, { useRef } from 'react';
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

    return (
        <>
            <div className='welcome-section'>
                <Swiper
                    modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                    slidesPerView={1}
                    centeredSlides={true}
                    // navigation
                    pagination={{ clickable: true, dynamicBullets: true }}
                    loop={true}
                    rewind={false}
                    initialSlide = {0}
                    autoplay={{
                        delay: 10500,
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
                    {/* <Navbar /> */}
                    <SwiperSlide>
                        <div className = 'home-image'>
                            <Navbar />
                            <p className='title lvl-1 has-text-centered'>Tucnos Pro,</p>
                            <p className='subtitle lvl-1 is-spaced has-text-centered'>Se former, c'est Avancer</p>
                            <div className='buttons-div'>
                                <div className='columns'>
                                    <div className='column is-narrow has-text-centered'>
                                        <button className='button medium-height-btn is-medium is-link orange-bg'><Link className='anchor-style' href='/formation'>VOIR LES COURS</Link></button>
                                    </div>
                                    <div className='column is-narrow has-text-centered'>
                                        <button className='button medium-height-btn is-medium is-link'><Link className='anchor-style' href='/contact'>CONTACTEZ-NOUS</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className = 'home-image-2'>
                            <Navbar />
                            <p className='title lvl-1 has-text-centered'>Tucnos Pro,</p>
                            <p className='subtitle lvl-1 is-spaced has-text-centered'>Se former, c'est Avancer</p>
                            <div className='buttons-div'>
                                <div className='columns'>
                                    <div className='column is-narrow has-text-centered'>
                                        <button className='button medium-height-btn is-medium is-link orange-bg'><Link className='anchor-style' href='/formation'>VOIR LES COURS</Link></button>
                                    </div>
                                    <div className='column is-narrow has-text-centered'>
                                        <button className='button medium-height-btn is-medium is-link'><Link className='anchor-style' href='/contact'>CONTACTEZ-NOUS</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            
            <div className='card-section'>
                <p className='title is-3 has-text-centered has-text-dark cards-title'> Nous avons ce qu'il vous faut</p>
                <Swiper
                    modules={[Navigation, Pagination, A11y, EffectCoverflow]}
                    slidesPerView={1}
                    centeredSlides={true}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    rewind={false}
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
                        data.categories.map((categorie) => {
                            return (
                                <SwiperSlide>
                                    <Card
                                        key = {categorie.id}
                                        id = {categorie.id}
                                        name = {categorie.name}
                                        description = {categorie.description}
                                        image = {categorie.image}
                                     />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

            <div className='methods-section'>
                <div className='columns'>
                    <div className='column is-11-mobile has-text-centered-mobile is-4 padding-0'>
                        <img className='has-text-centered-mobile' src = {methodsimg} alt = "work methods" />
                    </div>
                    <div className='column'>
                        <p className='title is-2 has-text-dark margin-left'>Faire la bonne chose au bon moment.</p>
                        <div className='columns is-mobile'>
                            <div className='column is-narrow has-text-centered-tablet is-paddingless'>
                                <p className='title is-3 method-nb margin-left'>01.</p>
                            </div>
                            <div className='column is-narrow is-paddingless'>
                                <p className='title is-3 has-text-grey-dark has-text-centered-mobile'>Notre Centre</p>
                            </div>
                        </div>
                        <p className='has-text-dark methods-p margin-left'>TucnosPRO est spécialisé dans la formation et le consulting principalement dans les métiers des nouvelles technologies. Nous vous proposons des formations ciblées pour accélérer et faciliter votre intégration dans le milieu professionnel.Notre objectif est de vous garantir une formation qui répond à vos besoins et vous permet d'acquérir de véritables compétences. et vous rendre opérationnels.</p>
                        <div className='columns is-mobile'>
                            <div className='column is-narrow has-text-centered-tablet is-paddingless'>
                                <p className='title is-3 method-nb margin-left'>02.</p>
                            </div>
                            <div className='column is-narrow is-paddingless'>
                                <p className='title is-3 has-text-grey-dark has-text-centered-mobile'>Nos atouts</p>
                            </div>
                        </div>
                        <p className='has-text-dark methods-p margin-left'>C’est par la pratique et l'écoute de nos clients que nous arrivons à faciliter votre insertion professionnel. Les formations qu'on propose s'adressent aussi bien aux entreprises, aux particuliers, étudiants, personnes douées ou encore aux salariés à la recherche d'une formule de reconversion. Nous nous efforçons de traiter le besoins de la façon la plus appropriée possible tout en restant flexible et ouverts à toute suggestion.</p>
                        <div className='columns is-mobile'>
                            <div className='column is-narrow has-text-centered-tablet is-paddingless'>
                                <p className='title is-3 method-nb margin-left'>03.</p>
                            </div>
                            <div className='column is-narrow is-paddingless'>
                                <p className='title is-3 has-text-grey-dark has-text-centered-mobile'>Notre méthode</p>
                            </div>
                        </div>
                        <p className='has-text-dark methods-p margin-left'>TucnosPRO vous propose des formations pratiques, sur-mesure et adaptés à vos besoins. Développez votre savoir-faire et vos compétences grâce à nos formations orientées métiers. Pratiques, adaptées et riches, nos formations répondent parfaitement aux besoins du marché du travail actuel. Nos formateurs qualifiés sont disponibles pour vous accompagner tout au long de votre passage chez nous.</p>
                    </div>
                </div>
            </div>

            <div className='formations-section'>
                <div className='formations-section-title'>
                    <a className='title is-1 has-text-dark'>Les sessions en cours</a>
                </div>
                <div className='box formations-container'>
                    {
                        data.formations.map((formation) => {
                            return(
                                <>
                                    <FormationCard
                                        key = {formation.id}
                                        id = {formation.id}
                                        image = {formation.image}
                                        name = {formation.name}
                                        duration = {formation.duration}
                                        date = {formation.date}
                                        price = {formation.price}
                                        description = {formation.description}
                                        formateur = {formation.formateur}
                                     />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}