import React from 'react';

import locationIcon from '../assets/svg/location.svg';
import likeIcon from '../assets/img/like.png';

const LikeCardItem = ({ location, price, title, duration, desc, likes, photo }) => {

    return (
        <div className="like-card">
            <section className="like-card__photo-block">
                <div className="card-location">
                    <img src={ photo } alt={ title } />
                    <div className="card-location__country">{ location }</div>
                    <img src={ locationIcon } alt="Location" width="15" height="20" />
                </div>
            </section>
            <section className="like-card__info-block">
                <h4 className="card-title">{ title }</h4>
                <div className="card-price">{ price }</div>
                <div className="card-duration">{ duration }</div>
                <div className="card-desc">{ desc }</div>
                <div className="likes-block">
                    <img src={ likeIcon } alt="Like" width="28" height="28" />
                    <div>{ likes }</div>
                </div>
            </section>
        </div>
    );
};

export default LikeCardItem;
