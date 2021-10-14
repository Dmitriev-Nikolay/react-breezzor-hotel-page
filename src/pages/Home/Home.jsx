import React from 'react';

import { Slider } from '../../components';

import infrastructureIcon0 from '../../assets/img/Infrastructureicon-0.png';
import infrastructureIcon1 from '../../assets/img/Infrastructureicon-1.png';
import infrastructureIcon2 from '../../assets/img/Infrastructureicon-2.png';
import infrastructureIcon3 from '../../assets/img/Infrastructureicon-3.png';
import infrastructureIcon4 from '../../assets/img/Infrastructureicon-4.png';
import infrastructureIcon5 from '../../assets/img/Infrastructureicon-5.png';
import infrastructureIcon6 from '../../assets/img/Infrastructureicon-6.png';
import infrastructureIcon7 from '../../assets/img/Infrastructureicon-7.png';
import infrastructureIcon8 from '../../assets/img/Infrastructureicon-8.png';
import infrastructureIcon9 from '../../assets/img/Infrastructureicon-9.png';
import infrastructureIcon10 from '../../assets/img/Infrastructureicon-10.png';
import infrastructureIcon11 from '../../assets/img/Infrastructureicon-11.png';
import infrastructureIcon12 from '../../assets/img/Infrastructureicon-12.png';
import infrastructureIcon13 from '../../assets/img/Infrastructureicon-13.png';
import star from '../../assets/img/star.png';
import add from '../../assets/svg/add.svg';
import avatarFeedback from '../../assets/img/avatar-feedback.png';

const Home = () => {
    return (
        <main className="hotel-page block-center">
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
                            <img src={ infrastructureIcon0 } alt="Icon" />
                            <p className="icons-text">Шезлонги</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon1 } alt="Icon" />
                            <p className="icons-text">Зонтики</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon2 } alt="Icon" />
                            <p className="icons-text">Ресторан</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon3 } alt="Icon" />
                            <p className="icons-text">Бар</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon4 } alt="Icon" />
                            <p className="icons-text">Бассейн</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon5 } alt="Icon" />
                            <p className="icons-text">Cпасатели</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon6 } alt="Icon" />
                            <p className="icons-text">Буйки</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon8 } alt="Icon" />
                            <p className="icons-text">Wi-Fi</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon9 } alt="Icon" />
                            <p className="icons-text">Душ</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon7 } alt="Icon" />
                            <p className="icons-text">Детская <br/>площадка</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon10 } alt="Icon" />
                            <p className="icons-text">Доступность</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon11 } alt="Icon" />
                            <p className="icons-text">Туалет</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon12 } alt="Icon" />
                            <p className="icons-text">СПА</p>
                        </div>
                        <div className="item-icon block-center">
                            <img src={ infrastructureIcon13 } alt="Icon" />
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
            <Slider/>
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
            <section className="important-information content">
                <div className="important-information__title">
                    <h3 className="sub-headling">Важная информация:</h3>
                </div>
                <div className="important-information__block-info">
                    <div className="hotel-rules paragraph">
                        <h4 className="paragraph-title">Правила отеля:</h4>
                        <p>Громкая музыка, шум, нецензурная брань влияют на комфорт других пользователей отеля и запрещены.</p>
                        <br/>
                        <p>Курение запрещено.</p>
                        <br/>
                        <p>Мытье с мылом и шампунем в душевых запрещено.</p>
                    </div>
                    <div className="additional-info">
                        <h4 className="paragraph-title">Дополнительная информация</h4>
                        <div className="paragraph">
                            Рекомендации о соблюдении пляжного этикета. 
                            Напоминания о правилах безопасности нахождения в воде. 
                            Информация об используемой системе 
                            флагов указывающих текущий статус безопасности.
                            Информация о морских обитателях(медузы).
                        </div>
                    </div>
                    <div className="covid-info">
                        <h4 className="paragraph-title">Информация о COVID-19:</h4>
                        <div className="paragraph">
                            Общие рекомендации Всемирной организации 
                            здравоохранения о соблюдении 
                            межличностного дистанцирования, 
                            национальные рекомендации и ограничения.
                        </div>
                    </div>
                </div>
                <div className="button--fav-share">
                    <p>Подробнее</p>
                    <img src={ add } alt="Plus" height='24' width='24' />
                </div>
            </section>
            <section className="maps-block content">
                <div className="maps-block__title">
                    <h3 className="sub-headling">Местоположение:</h3>
                </div>
                <div className="maps-block__info paragraph">
                    Описание ка добраться до пляжа sectetur adipiscing elit. Porttitor ultricies non, sem aliquam, 
                    pharetra, urna. Feugiat diam cras lorem sodales risus risus, enim. Tempor rhoncus at massa tempor 
                    egestas tristique etiam amet. 
                </div>
            </section>
        </main>
    );
};

export default Home;
