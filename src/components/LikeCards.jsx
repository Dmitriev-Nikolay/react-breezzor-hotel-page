import React from 'react';

import { LikeCardItem } from '../components';

// import scuba from '../assets/img/like-card-1.png';
// import fishing from '../assets/img/like-card-2.png';
// import balloon from '../assets/img/like-card-3.png';


const LikeCards = ({ array }) => {


    return (
        <div className="">
            {
                array.map((card) => {
                    return (
                        <LikeCardItem
                            key={ card.id }
                            location={ card.location }
                            price={ card.price }
                            title={ card.title }
                            duration={ card.duration }
                            desc={ card.desc }
                            likes={ card.likes }
                            photo={ card.photo }
                        />
                    )
                })
            }
        </div>
    );
};

export default LikeCards
