import React from 'react';

import add from '../assets/svg/add.svg';

const ImportantInformation = () => {
    
    return (
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
    );
};

export default ImportantInformation;
