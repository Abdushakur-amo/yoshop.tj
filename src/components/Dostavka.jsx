import React from 'react';
export default function Dostavka() {
    return (
        <section className="htc__new__product bg__white">
            <div className="container">
                <div className="alert">
                    <div className="d-flex">
                        <div className="box">
                            <img src="assets/images/uslugi/010.jpg" />
                        </div>
                        <div className="box">
                            <h2>Вызвать курьера</h2>
                            <p>Курьерская служба внутри города <br /> г.Яван, г.Бохтар, г.Вахдат, А.Чоми <b>5, 10 см</b></p>
                            <p>Между городами <b>15, 30 см</b></p>
                            <button className='btn btn-warning'>Заказать</button>
                        </div>
                        <div className="box">
                            <ul>
                                <li><i className='phone'></i></li>
                                <li><i className='phone'></i></li>
                                <li><i className='phone'></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="alert">
                    <div className="d-flex">
                        <div className="box">
                            <img src="assets/images/uslugi/011.jpg" />
                        </div>
                        <div className="box">
                            <h2>Отправить посылку</h2>
                            <p>Внутри города с транспортной компанией <b>от 25 см</b></p>
                            <p>Между городом <b>от 30 см</b></p>
                            <button className='btn btn-warning'>Отправить</button>
                        </div>
                        <div className="box">
                            <ul>
                                <li><i className='phone'></i></li>
                                <li><i className='phone'></i></li>
                                <li><i className='phone'></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="alert">
                    <div className="d-flex">
                        <div className="box">
                            <img src="assets/images/uslugi/012.jpg" />
                        </div>
                        <div className="box">
                            <h2>Получить посылку</h2>
                            <p>Внутри города с транспортной компанией <b>от 15 см</b></p>
                            <p>Между городом <b>от 30 см</b></p>
                            <button className='btn btn-warning'>Получить</button>
                        </div>
                        <div className="box">
                            <ul>
                                <li><i className='phone'></i></li>
                                <li><i className='phone'></i></li>
                                <li><i className='phone'></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
