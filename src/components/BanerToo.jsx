import React from 'react';
import { Link } from 'react-router-dom';
import './../scss/Corzin.scss';
import './../scss/style.scss';
export default function BanerToo() {
    return (
        <section className="Info_baner_icons">
            <div className="container">
                <div className="d-flex">
                    <div className="box">
                        <i className="ti-truck"></i>
                        <h4>Бесплатная доставка</h4>
                        <p>С помощью почты или транспортной компании</p>
                    </div>
                    <div className="box">
                        <i className="ti-bag"></i>
                        <h4>Гарантия </h4>
                        <p>Мы гарантируем качество товара </p>
                    </div>
                    <div className="box">
                        <i className="ti-headphone"></i>
                        <h4>Техподдержка</h4>
                        <p>Наши операторы ответят на любой ваш вопрос</p>
                    </div>
                    <div className="box">
                        <i className="ti-credit-card"></i>
                        <h4>Безопасная оплата</h4>
                        <p>Вы платите деньги при получении товара</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
