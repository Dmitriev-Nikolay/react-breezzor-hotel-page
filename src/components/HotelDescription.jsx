import React from 'react';

import infrastructureIcon0 from '../assets/img/Infrastructureicon-0.png';
import infrastructureIcon1 from '../assets/img/Infrastructureicon-1.png';
import infrastructureIcon2 from '../assets/img/Infrastructureicon-2.png';
import infrastructureIcon3 from '../assets/img/Infrastructureicon-3.png';
import infrastructureIcon4 from '../assets/img/Infrastructureicon-4.png';
import infrastructureIcon5 from '../assets/img/Infrastructureicon-5.png';
import infrastructureIcon6 from '../assets/img/Infrastructureicon-6.png';
import infrastructureIcon7 from '../assets/img/Infrastructureicon-7.png';
import infrastructureIcon8 from '../assets/img/Infrastructureicon-8.png';
import infrastructureIcon9 from '../assets/img/Infrastructureicon-9.png';
import infrastructureIcon10 from '../assets/img/Infrastructureicon-10.png';
import infrastructureIcon11 from '../assets/img/Infrastructureicon-11.png';
import infrastructureIcon12 from '../assets/img/Infrastructureicon-12.png';
import infrastructureIcon13 from '../assets/img/Infrastructureicon-13.png';
import star from '../assets/img/star.png';

const HotelDescription = () => {
    
    return (
        <section className="description-block content">
            <div className="general-desc">
                <h1 className="general-desc__title headline">Hilton</h1>
                <div className="general-desc__information paragraph-desc">
                    <p>
                        Испытайте роскошный день в межконтинентальном курорте del Coronado.
                        Проведите день, впитывая солнце на дожденском пляже Аль-Ака или погрузитесь в бесконечности в окружении величественных гор Аль-Хаджар.
                    </p>
                    <p>
                        Дети могут насладиться веселой планетой Trekkers Kids Club с запланированными мероприятиями в течение дня.
                        Воспользуйтесь эксклюзивными скидками с 25% скидка на продукты питания и напитки в любом из ресторанов курорта и скидка 15% на спа-процедуры в спа-салоне L'Occitane.
                    </p>
                    <p>
                        * Бесплатно для детей до 4 лет.
                    </p>
                </div>
                <div className="general-desc__icons-info">
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon0 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Шезлонги</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon1 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Зонтики</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon2 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Ресторан</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon3 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Бар</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon4 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Бассейн</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon5 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Cпасатели</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon6 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Буйки</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon8 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Wi-Fi</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon9 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Душ</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon7 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Детская <br/>площадка</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon10 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Доступность</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon11 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Туалет</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon12 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">СПА</p>
                    </div>
                    <div className="item-icon block-center">
                        <img className="responsive-image" src={ infrastructureIcon13 } alt="Icon" width="64" height="64" />
                        <p className="icons-text">Джакузи</p>
                    </div>
                </div>
            </div>
            <div className="secondary-desc">
                <div className="secondary-desc__stars">
                    <img className="star" src={ star } alt="Star" width="12" height="12" />
                    <img className="star" src={ star } alt="Star" width="12" height="12" />
                    <img className="star" src={ star } alt="Star" width="12" height="12" />
                    <img className="star" src={ star } alt="Star" width="12" height="12" />
                    <img className="star" src={ star } alt="Star" width="12" height="12" />
                </div>
                <div className="secondary-desc__more-info-block">
                    <p className="more-info-text">Вежливый персонал</p>
                    <p className="more-info-text">Отличное место для ланча</p>
                </div>
            </div>
        </section>
    );
};

export default HotelDescription;
