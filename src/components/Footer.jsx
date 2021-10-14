import React from 'react';

import languageIcon from '../assets/svg/union.svg';
import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import twitter from '../assets/img/twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__navigation-links content">
                <div className="about">
                    <h4 className="title-link links-headline">О компании</h4>
                    <div className="links">
                        <a href="/#" className="link">Кто мы</a>
                        <a href="/#" className="link">Что мы делаем</a>
                        <a href="/#" className="link">Команда</a>
                    </div>
                </div>
                <div className="for-business">
                    <h4 className="title-link links-headline">Для бизнеса</h4>
                    <div className="links">
                        <a href="/#" className="link">Добавить пляжи</a>
                        <a href="/#" className="link">Добавить услуги</a>
                    </div>
                </div>
                <div className="contacts">
                    <h4 className="title-link links-headline">Контакты</h4>
                    <div className="links">
                        <a href="/#" className="link">Связаться с нами</a>
                        <a href="/#" className="link">Публичная оферта для поставщиков</a>
                    </div>
                </div>
                <div className="career">
                    <h4 className="title-link links-headline">Карьера</h4>
                    <div className="links">
                        <a href="/#" className="link">Присоединиться к команде</a>
                        <a href="/#" className="link">Список вакансий</a>
                    </div>
                </div>
                <div className="press-center">
                    <h4 className="title-link links-headline">Пресс-центр</h4>
                    <div className="links">
                        <a href="/#" className="link">Подписка на пресс-релизы</a>
                    </div>
                </div>
            </section>
            <section className="footer__copyright-block content">
                <div className="copyright paragraph">
                    © 2021 Breezzor inc. All rights reserved
                </div>
                <div className="agreements">
                    <div className="agreements-text">Политика конфиденциальности</div>
                    <div className="agreements-text">Пользовательское соглашение</div>
                </div>
                <div className="language block-center">
                    <img src={ languageIcon } alt="Icon language" />
                    <div>Русский (RU)</div>
                </div>
                <div className="social">
                    <a href="https://ru-ru.facebook.com/" rel="noreferrer"><img src={facebook} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/" rel="noreferrer"><img src={instagram} alt="Instagram" /></a>
                    <a href="https://twitter.com/" rel="noreferrer"><img src={twitter} alt="Twitter" /></a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
