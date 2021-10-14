import React from 'react';

import communication from '../assets/img/communication.png';
import notifications from '../assets/img/notifications.png';
import avatar from '../assets/img/avatar.png';

const UserMenu = () => {
    const userMenu = [
        {
            id: 1,
            src: communication,
            name: 'communication',
            height: '32',
            width: '32',
        },
        {
            id: 2,
            src: notifications,
            name: 'notifications',
            height: '32',
            width: '32',
        },
        {
            id: 3,
            src: avatar,
            name: 'avatar',
            height: '32',
            width: '32',
        },
    ];

    return (
        <nav className="header-menu">
            {
                userMenu.map((itemMenu) => {
                    return (
                        <a className="header-menu__item" key={ itemMenu.id }>
                            <img 
                                src={ itemMenu.src } 
                                alt={ itemMenu.name } 
                                height={ itemMenu.height } 
                                width={ itemMenu.width } 
                            />
                        </a>
                    )
                })
            }
        </nav>
    );
};

export default UserMenu;
