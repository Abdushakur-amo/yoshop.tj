import React from 'react';
import './../scss/style.scss';
export default function Taxi() {
    return (
        <section className="wrapper_taxi">
            <div className="container">
                <div className="wrapp_top">
                    <h2>Заказать такси</h2>
                    <div>Город: Яван</div>
                </div>
                <div className="wrapp_icons">
                    <div className="card">
                        <div className="card-body">
                            <ul>
                                <li> <img src="/assets/images/uslugi/032.jpg" /> <p>Свободно</p> <span>12</span></li>
                                <li> <img src="/assets/images/uslugi/031.jpg" /> <p>На заказ</p> <span>22</span></li>
                                <li> <img src="/assets/images/uslugi/030.jpg" /> <p>Остановки</p> <span>22</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
                <div className="wrapp_filter">
                    <div className="card">
                        <div className="card-body">
                            <div className="buttons">
                                <button className='btn btn-warning'>Эконом</button>
                                <button className='btn btn-warning'>Комфорт</button>
                                <button className='btn btn-warning'>Обичный</button>
                                <button className='btn btn-warning'>С кондинцианером</button>
                            </div>
                            <hr />
                            <h4 className='element-center'>От куда</h4>
                            <div className='form-imput'>
                                <div className="form-groupe">
                                    <label>Улица</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-groupe">
                                    <label>Дом/пост</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-groupe">
                                    <label>кв/под.</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <hr />
                            <h4 className='element-center'>До куда</h4>
                            <div className='form-imput'>
                                <div className="form-groupe">
                                    <label>Улица</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-groupe">
                                    <label>Дом/пост</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-groupe">
                                    <label>кв/под.</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="wrapp_content">
                    <div className="card">
                        <div className="card-body">
                            <div className="img_and_info">
                                <img src="/assets/images/uslugi/013.jpg" />
                                <div className="information_c_w">
                                    <p>Заказ №______________________________</p>
                                    <p>Тел: (+992) 93 699 98 81</p>
                                    <p>Место пребывание: 50-солаги</p>
                                    <p>Конечная остановка: Абдурахмон Джоми</p>
                                </div>
                            </div>
                            <div className="btn-block">
                                <button className='btn btn-warning'>Заказать</button>
                                <button className='btn btn-warning'>Отменить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
