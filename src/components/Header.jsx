import React from 'react';
import { UserMenu, Navigation, Breadcrumb } from '../components';

import mainLogo from '../assets/img/main-logo.png';
import add from '../assets/svg/add.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__top-menu content">
                    <img className="header__logo" src={ mainLogo } alt="Logo" />
                    <UserMenu />
                </div>
            </div>
            <div className="header__bottom-menu content block-center">
                <div className="header-roads">
                    <Breadcrumb />
                    <div className="header-roads__action-block">
                        <div className="button--fav-share">
                            <img src={ add } alt="Plus" height='24' width='24' />
                            <p>В избранное</p>
                        </div>
                        <div className="button--fav-share">
                            <img src={ add } alt="Plus" height='24' width='24' />
                            <p>Поделиться</p>
                        </div>
                    </div>
                </div>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
