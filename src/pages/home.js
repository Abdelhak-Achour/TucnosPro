import React from 'react';
import ehimage from '../images/eh.png';
import data from '../mock_data.json';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Card } from '../components/card';

export function Home()
{
    return (
        <>
            <div className = 'home-image'>
                <p className='title is-1 has-text-centered'>Tucnos Pro,</p>
                <p className='subtitle is-1 is-spaced has-text-centered'>Se former, c'est Avancer</p>
                <div className='columns'>
                    <div className='column is-2 has-text-centered is-offset-4'>
                        <button className='button is-medium is-primary'><a className='anchor-style' href='/formation'>VOIR LES COURS</a></button>
                    </div>
                    <div className='column is-2 has-text-centered'>
                        <button className='button is-medium is-primary'><a className='anchor-style' href='/contact'>CONTACTEZ-NOUS</a></button>
                    </div>
                </div>
            </div>
            
            <div className='card-section'>
                <p className='title is-3 has-text-centered has-text-dark cards-title'> Nous avons ce qu'il vous faut</p>
                <Swiper
                    modules={[Navigation, Pagination, A11y, EffectCoverflow]}
                    slidesPerView={1}
                    centeredSlides={true}
                    navigation
                    pagination={{ clickable: true }}
                    loop={false}
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
                        data.categories.map((categorie) => {
                            return (
                                <SwiperSlide>
                                    <Card 
                                        key = {categorie.id} 
                                        id = {categorie.id} 
                                        image = {categorie.image} 
                                        name = {categorie.name} 
                                        description = {categorie.description} 
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                    
                </Swiper>
            </div>

            <div className='temp-div'>
                <h1>it works</h1>
            </div>
        </>
    )
}