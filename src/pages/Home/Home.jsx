import React from 'react';

import { HotelDescription, Slider, Reviews, ImportantInformation, MapBlock, MayLikeBlock } from '../../components';

import { SwiperSlide } from 'swiper/react';

import slider1 from '../../assets/img/slider-0.png';

import scuba from '../../assets/img/like-card-1.png';
import fishing from '../../assets/img/like-card-2.png';
import balloon from '../../assets/img/like-card-3.png';

const Home = () => {
    const likeCards = [
        {
            id: 0,
            location: 'Country, Region',
            price: '$ 15.000 / hour',
            title: 'Your Experience',
            duration: 'Duration: from 60 min',
            desc: 'Training and Riding Horses and Ponies',
            likes: 8,
            photo: scuba,
            offer: true,
        },
        {
            id: 1,
            location: 'Country, Region',
            price: '$ 15.000 / hour',
            title: 'Your Experience',
            duration: 'Duration: from 60 min',
            desc: 'Training and Riding Horses and Ponies',
            likes: 8,
            photo: fishing,
            offer: false,
        },
        {
            id: 2,
            location: 'Country, Region',
            price: '4,000 ₽ / hour',
            title: 'Your Experience',
            duration: 'Duration: from 60 min',
            desc: 'Training and Riding Horses and Ponies',
            likes: 8,
            photo: balloon,
            offer: true,
        },
    ];

    return (
        <main className="hotel-page block-center">
            <HotelDescription />
            <section className="hotel-slider">
                <Slider>
                    <SwiperSlide><img className="hotel-img responsive-image" src={ slider1 } alt="Slide-2" width="520" height="350" /></SwiperSlide>
                    <SwiperSlide><img className="hotel-img responsive-image" src={ slider1 } alt="Slide-2" width="520" height="350" /></SwiperSlide>
                    <SwiperSlide><img className="hotel-img responsive-image" src={ slider1 } alt="Slide-2" width="520" height="350" /></SwiperSlide>
                    <SwiperSlide><img className="hotel-img responsive-image" src={ slider1 } alt="Slide-2" width="520" height="350" /></SwiperSlide>
                    <SwiperSlide><img className="hotel-img responsive-image" src={ slider1 } alt="Slide-2" width="520" height="350" /></SwiperSlide>
                    <SwiperSlide><img className="hotel-img responsive-image" src={ slider1 } alt="Slide-2" width="520" height="350" /></SwiperSlide>
                </Slider>
            </section>
            <Reviews />
            <ImportantInformation />
            <MapBlock />
            <MayLikeBlock cards={ likeCards } />
        </main>
    );
};

export default Home;
