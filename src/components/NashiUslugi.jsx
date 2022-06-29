import React from 'react';
import { Link } from 'react-router-dom';
import './../scss/Corzin.scss';
export default function NashiUslugi() {
    return (
        <section className="block_cats_uslug">
            <div className="container">
                <h4 className='h4'>Нашие услуги</h4>
                <hr />
                <div className="d-flex">
                    <div className="box">
                        <Link to="/dostavka">
                            <img src="assets/images/category/cat/1.jpg" />
                            <p>Служба доставки</p>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/taxi">
                            <img src="assets/images/category/cat/2.jpg" />
                            <p>Заказать такси</p>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/auto">
                            <img src="assets/images/category/cat/3.jpg" />
                            <p>Транспортные услуги </p>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/prodazha">
                            <img src="assets/images/category/cat/4.jpg" />
                            <p>Покупка и продажа</p>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/ocherad">
                            <img src="assets/images/category/cat/5.jpg" />
                            <p>Электроная очередь</p>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/eda">
                            <img src="assets/images/category/cat/6.jpg" />
                            <p>Заказать еду</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
