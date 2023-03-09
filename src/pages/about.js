import React from "react";
import proposImage from '../images/propos.jpg';
import methodsimg from '../images/methods.jpg';
import founderWordImage from '../images/founder_word.jpg';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import data from '../mock_data.json';
import { Testemony } from "../components/testemony";

export function About ()
{
    return (
        <>
            <div className="presentation-section">
                <div className="box m-6 is-shadowless">
                    <div className="columns">
                        <div className="column is-1">
                            <hr className="orange-hr" />
                        </div>
                        <div className="column">
                            <p className="title has-text-grey is-size-5">Présentation du centre</p>
                        </div>
                    </div>
                    <p className="title is-size-2 has-text-dark">TucnosPro</p>
                    <div className="columns">
                        <div className="column is-3">
                            <img className="pres-img" src={proposImage} alt="propos" />
                        </div>
                        <div className="column">
                            <p className="has-text-dark pres-text">TucnosPRO est un centre de formation enregistré sous le N°34-056-20. C'est un établissement de formation professionnelle et de consulting qui opère dans divers domaine reliés principalement aux nouvelles technologies.</p>
                            <br />
                            <p className="has-text-dark pres-text">Notre centre propose des formations certifiantes et ciblées aux profit des étudiants, professionnels, chefs d'entreprise ou toute autre entité voulant mettre en place un parcous de formation pour ces collaborateurs. Nous accompagnons également toutes les personnes qui veulent se lancer dans un parcours de reconversion professionnelle en leur proposons des solutions adaptées à keur rythme. TucnosPRO offre plusieurs catégories de formation: Data Science, Intelligence Artificielle, Développement et coding, Ethical Hacking et sécurité informatique, Fibre optique et télécommunications, réseaux et système, etc</p>
                            <br />
                            <p className="has-text-dark pres-text">Les sessions qu'on proposent font l'objet d'une sélection très stricte pour répondre aux exigences du marché de l'emploi aussi bien en Tunisie et à l'étranger. Nous mettons également à votre disposition une liste d'experts certifiés dans leur domaine pour vous aider à bien démarrer votre apprentissage et fournir l'assistance nécessaire.</p>
                            </div>
                    </div>
                </div>
            </div>

            <div className='methods-section'>
                <div className='columns'>
                    <div className='column is-11-mobile has-text-centered-mobile is-4 padding-0'>
                        <img className='' src = {methodsimg} alt = "work methods" />
                    </div>
                    <div className='column is-paddingless'>
                        <p className='title lvl-3 has-text-dark margin-left pt-2'>Notre plus-value</p>
                        <div className='columns'>
                            <div className='column is-1 has-text-centered-tablet is-paddingless'>
                                <p className='title lvl-4 method-nb margin-left'>01.</p>
                            </div>
                            <div className='column is-paddingless'>
                                <p className='title lvl-4 has-text-grey-dark has-text-centered-mobile'>Ecoute et disponibilité</p>
                            </div>
                        </div>
                        <p className='has-text-dark lvl-7 methods-p margin-left'>On s'engage à être à l'écoute de ses clients et de traiter leurs besoins individuellement et à leur rythme. Nos conseillers sont à votre disposition pour vous guider et vous orienter jusqu'à atteindre votre objectif. Le contenu de votre formation s'adapte à votre niveau, vos objectifs, votre rythme d'apprentissage et peut être actualisé à tout moment. En terme de financement, on s'engage à proposer des plans selon votre budget et cherche des moyens de financement appropriés à proposer.</p>
                        <div className='columns'>
                            <div className='column is-1 has-text-centered-tablet is-paddingless'>
                                <p className='title lvl-4 method-nb margin-left'>02.</p>
                            </div>
                            <div className='column is-paddingless'>
                            <p className='title lvl-4 has-text-grey-dark has-text-centered-mobile'>Qualité et expertise</p>
                            </div>
                        </div>
                        <p className='has-text-dark lvl-7 methods-p margin-left'>On s'engage à appliquer une procédure qualité à la mise en place d'une session de formation : validation des experts formateurs, des programmes de formation ciblés et spécifiques, un support de formation détaillé, disponibilité totale auprès de nos contacts, horaires adaptés, un suivi post-formation, évaluation de votre passage. Nos experts certifiés dans leurs domaines ont une expérience significative. Il partagent avec vous non seulement leur savoir technique mais aussi leur expérience dans le milieu professionnel pour vous permettre de vous faire une idée sur les opportunités et les parcours disponibles.</p>
                        <div className='columns'>
                            <div className='column is-1 has-text-centered-tablet is-paddingless'>
                                <p className='title lvl-4 method-nb margin-left'>03.</p>
                            </div>
                            <div className='column is-paddingless'>
                            <p className='title lvl-4 has-text-grey-dark has-text-centered-mobile'>Innovation et implication</p>
                            </div>
                        </div>
                        <p className='has-text-dark lvl-7 methods-p margin-left'>On s'engage dans un processus innovant qui vise à combiner les besoins des clients et les offres proposées. Nos méthodes font l'objet d'une réflexion continue et permanente pour moderniser et apporter des éléments nouveaux. On s'implique de façon directe avec nos clients en développant un relationnel fort et durable pour rester compétitif et installer la confiance.</p>
                    </div>
                </div>
            </div>

            <div className="notre-method-section">
                <div className="notre-method-text has-text-centered">
                    <p className="title is-2 has-text-dark">Notre méthode</p>
                    <hr className="notre-method-hr" />
                    <p className="has-text-dark notre-method-p">TucnosPRO Training & Consulting opère dans le domaine des nouvelles technologies et du management. On offre à nos clients des services de conseil, d’accompagnement, de formation et de reconversion pour se positionner dans le milieu professionnel. Notre methode est basée sur la mise en place d'une bonne réputation et une relation de confiance avec nos clients. Notre approche repose sur le sérieux, la réactivité et la pertinence de nos offres. TucnosPRO s’engage à continuer à fidéliser ses clients à travers la diversification de ses services de qualité afin d’être à la hauteur des attentes de ses clients.</p>
                </div>
            </div>

            <div className="founder-word-section">
                <div className="box is-shadowless founder-word-box">
                    <div className="columns">
                        <div className="column is-8">
                            <p className="title is-2 has-text-dark">Mot du fondateur</p>
                            <p className="has-text-dark founder-word-p">Chez TucnosPRO, nous sommes conscients de l’importance de créer des services avec une vraie valeur qui résiste à l’épreuve du temps. Voilà pourquoi, avec nos clients, nous sommes engagés à proposer des services de bonne qualité sur le long terme. Notre réputation et notre présence sur le marché de la formation professionnelle et continue confirment la pertinence de notre modèle et le sérieux de nos relations. TucnosPRO propose aujourd’hui des formations variées et de qualité pour s'intégrer facilement et rapidement dans la vie professionnelle. Notre priorité aujourd’hui, c’est de poursuivre notre croissance. Voilà pourquoi nous renforçons notre capacité à innover et à servir nos clients afin de générer une croissance forte et régulière. Nos valeurs sont des guides précieux. Notre agilité nous permet de nous adapter aux exigences, à la rapide évolution de nos clients et aux nouveaux enjeux de la révolution digitale. Avec TucnosPRO, on vous donne les meilleurs atouts pour bien réussir. Grâce à la diversité de nos formations et l'expertise de nos consultants, on sera en mesure de répondre efficacement à votre besoin.</p>
                        </div>
                        <div className="column is-4">
                            <img className="founder-word-img" src={founderWordImage} alt="founder word" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonies-section">
                <p className="title has-text-dark has-text-centered mb-5">Nos clients qui nous font confiance</p>
                <div className="testemonies-box">
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
                                        slidesPerView: 2
                                    }
                            }
                        }
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        {
                            data.testimonies.map((testemony) => {
                                return (
                                    <SwiperSlide>
                                        <Testemony
                                            key = {testemony.id}
                                            id = {testemony.id}
                                            name = {testemony.name}
                                            lastname = {testemony.lastname}
                                            image = {testemony.image}
                                            job = {testemony.job}
                                            testemony = {testemony.testimony}
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}