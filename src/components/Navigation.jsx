import React from 'react';

import { NavLink } from "react-router-dom";

// import classNames from 'classnames';

import { ReactComponent as Hotel } from '../assets/svg/hotel.svg';
import { ReactComponent as Pass } from '../assets/svg/pass.svg';
import { ReactComponent as Services } from '../assets/svg/services.svg';
import { ReactComponent as Restaurant } from '../assets/svg/restaurant.svg';
import { ReactComponent as Events } from '../assets/svg/events.svg';

const Navigation = () => {

    const navigationItems = [
        {
            id: 1,
            name: 'Отель',
            imgSrc: Hotel,
            height: '32',
            width: '32',
            link: '/hotel',
        },
        {
            id: 2,
            name: 'Breeezzor Pass',
            imgSrc: Pass,
            height: '32',
            width: '32',
            link: '/pass',
        },
        {
            id: 3,
            name: 'Услуги',
            imgSrc: Services,
            height: '32',
            width: '32',
            link: '/services',
        },
        {
            id: 4,
            name: 'Ресторан',
            imgSrc: Restaurant,
            height: '32',
            width: '32',
            link: '/restaurant',
        },
        {
            id: 5,
            name: 'События',
            imgSrc: Events,
            height: '32',
            width: '32',
            link: '/events',
        },
    ];

    return (
        <nav className="navigation block-center">
            {
                navigationItems.map((navItem) => {
                    return (
                        <NavLink 
                            className="navigation__item block-center text-nav" 
                            activeClassName="active" 
                            to={navItem.link} 
                            key={navItem.id}
                        >
                            <navItem.imgSrc />
                            <div>{navItem.name}</div>
                        </NavLink >
                    )
                })
            }
        </nav>
    );
};

export default Navigation;
