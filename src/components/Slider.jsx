import React from 'react';

import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation]);

const Slider = React.memo(({ children }) => {

    return (
        <div className="slider">
            <Swiper
                slidesPerView={ 3 }
                spaceBetween={ 20 }
                centeredSlides={ true }
                loop={ true }
                navigation={{
                    clickable: true
                }}
                className="mySwiper"
            >
                { children }
            </Swiper>
        </div >
    );
});

export default Slider;
