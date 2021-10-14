import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import slider1 from '../assets/img/slider-1.png';

const Slider = () => {
    return (
        <div className="hotel-slider">
            <Swiper
                slidesPerView={3}
                spaceBetween={300}
                loop={true}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                className="mySwiper"
            >
                <SwiperSlide><img src={slider1} alt="Slide-2" width="520" height="350" /></SwiperSlide>
                <SwiperSlide><img src={slider1} alt="Slide-1" width="520" height="350" /></SwiperSlide>
                <SwiperSlide><img src={slider1} alt="Slide-3" width="520" height="350" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
