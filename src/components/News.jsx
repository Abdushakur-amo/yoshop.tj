import React from 'react';
import { Link } from 'react-router-dom';
import './../scss/style.scss';
export default function News() {
    return (
        <section className="news-content">
            <div className="container">
                <h4 className='h4'>Последние новости</h4>
                <hr />
                <div className="d-flex">
                    <div className="box">
                        <img src="https://www.artelgroup.org/upload/articles/px_1-111.jpg" />
                        <h4>Бесплатная доставка</h4>
                        <p>С помощью почты или транспортной компании почты или транспортной компании почты или транспортной компании</p>
                    </div>
                    <div className="box">
                        <img src="https://www.artelgroup.org/upload/articles/px_1-111.jpg" />
                        <h4>Гарантия </h4>
                        <p>Мы гарантируем качество товара </p>
                    </div>
                    <div className="box">
                        <img src="https://www.artelgroup.org/upload/articles/px_1-111.jpg" />
                        <h4>Техподдержка</h4>
                        <p>Наши операторы ответят на любой ваш вопрос</p>
                    </div>
                    <div className="box">
                        <img src="https://www.artelgroup.org/upload/articles/px_1-111.jpg" />
                        <h4>Безопасная оплата</h4>
                        <p>Вы платите деньги при получении товара</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
