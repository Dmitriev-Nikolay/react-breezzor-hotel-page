import React from 'react';

import add from '../assets/svg/add.svg';
import avatarFeedback from '../assets/img/avatar-feedback.png';

const Reviews = () => {
    
    return (
        <section className="reviews-block content">
            <div className="reviews-block__title">
                <h3 className="sub-headling">Отзывы:</h3>
                <div className="button--fav-share">
                    <p>Читать все</p>
                    <img src={ add } alt="Plus" height='24' width='24' />
                </div>
            </div>
            <div className="reviews-block__feedback">
                <div className="user-feedback">
                    <img className="user-feedback__avatar" src={ avatarFeedback } alt="Avatar" width="48" height="48" />
                    <div className="user-feedback__name">
                        <div className="paragraph">Alexandra</div>
                        <div className="data">Была здесь 18.09.2020</div>
                    </div>
                </div>
                <div className="feedback-item">
                    <div className="feedback-item__review paragraph">
                        Отдыхали с детьми во второй половине июня в этом приятном месте.
                        В целом отдых удался, так этому способствовала прекрасная погода, дивный климат,
                        душевное море и отличное средиземноморское настроение!
                        Услуги на высшем уровне, особенно СПА и услуги официанта. Кухня и бар лайк!
                    </div>
                </div>
            </div>
            <div className="block-center">
                <button className="button button--reviews">Оставить отзыв</button>
            </div>
        </section>
    );
};

export default Reviews;
