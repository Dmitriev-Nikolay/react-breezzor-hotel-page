import React from 'react';

import { SwiperSlide } from 'swiper/react';

import { Slider, LikeCardItem } from '../components';

const MayLikeBlock = React.memo(({ cards }) => {
    
    return (
        <section className="may-also-like-block content">
            <div className="may-also-like-block__title">
                <h1 className="headline">Вам также может понравиться:</h1>
            </div>
            <div className="may-also-like-block__info paragraph">
                Quis exercitation deserunt aliquip Lorem non velit id ad incididunt eu. Eu labore eiusmod duis ad cupidatat occaecat 
                dolor anim eiusmod fugiat labore sunt eu.  
            </div>
            <div className="cards-slider">
                <Slider>
                    {
                        cards.map((card) => {
                            return (
                                <SwiperSlide key={ card.id }>
                                    <LikeCardItem
                                        location={ card.location }
                                        price={ card.price }
                                        title={ card.title }
                                        duration={ card.duration }
                                        desc={ card.desc }
                                        likes={ card.likes }
                                        photo={ card.photo }
                                        offer={ card.offer }
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Slider> 
            </div>
        </section>
    );
});

export default MayLikeBlock;
