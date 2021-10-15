import React from 'react';

import locationIcon from '../assets/svg/location.svg';
import likeIcon from '../assets/img/like.png';
import favoriteIcon from '../assets/img/favorite.png';

const LikeCardItem = ({ location, price, title, duration, desc, likes, photo, offer }) => {

    return (
        <div className="like-card">
            <section className="like-card__photo-block">
                <img className="card-img" src={ photo } alt={ title } width="360" height="224"/>
                <div className="country-block block-center">
                    <img src={ locationIcon } alt="Location" width="15" height="20" />
                    <div className="location-country paragraph">{ location }</div>
                </div>
                <img className="favorite-icon"src={ favoriteIcon } alt="FavoriteIcon" width="40" height="40" />
                {
                    offer && 
                    <div className="card-offer block-center">
                        <h5 className="text-nav">BEST OFFER</h5>
                    </div>
                }
            </section>
            <section className="like-card__info-block">
                <h4 className="card-title card-headling">{ title }</h4>
                <div className="card-price card-headling">{ price }</div>
                <div className="card-duration paragraph">{ duration }</div>
                <div className="card-desc paragraph">{ desc }</div>
                <div className="likes-block block-center">
                    <img src={ likeIcon } alt="Like" width="28" height="28" />
                    <h4 className="likes-count">{ likes }</h4>
                </div>
            </section>
        </div>
    );
};

export default LikeCardItem;
