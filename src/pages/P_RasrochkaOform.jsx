import React from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { Slider, Products } from '../components';
import jQuery from 'jquery';
import { http, AjaxAll } from '../ajax';
import '../scss/rassrochka.scss';
function Rasrochka() {
    let type = useParams().type;
    let id = useParams().id;
    const [singlInfo, setSingleInfo] = React.useState([]);
    const ajax = () => {
        jQuery.ajax({
            url: `${http()}/api/products/${id}`,
            method: 'POST',
            data: { 'date': 123 },
            dataType: "html",
            success: function (data) {
                let json = jQuery.parseJSON(data);
                setSingleInfo(json)
            }
        });
    };
    React.useEffect(() => {
        ajax();
        return true;
    }, [id]);
    return (
        <>
            <section className="htc__new__product bg__white">
                <div className="container">
                    <div className='element-center'>
                        <img src={`/assets/images/cart/${type}.jpg`} alt={type} />
                    </div>
                    <br />
                    <div className='box_oformlen'>
                        <h2 className='element-center'>Оформление заказа</h2>
                        <p className='element-center'><b>Заполните форму заявки</b></p>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        {singlInfo.length ? <img src={singlInfo[0].images_sm[0]} style={{ width: '100px' }} /> : ''}
                                    </div>
                                    <div className="col-md-10">
                                        <ul>
                                            <li><b>Наименование товар: </b> {singlInfo.length ? <> {singlInfo[0].title} </> : ''} </li>
                                            <li><b>Цена: </b> {singlInfo.length ? <> {singlInfo[0].public_pay} <sup>tjs</sup></> : ''} </li>
                                            <li><b>Количество: </b> 1 штук</li>
                                            <li><b>Срок рассрочки: </b> 12 месяц</li>
                                            <li><b>Город: </b> Яван</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <form id='form_zayafka_kredit' url='/api/shop_zayafka' method='post'>
                            <input type="hidden" name='id_pro' value={id} />
                            <input type="hidden" name='type' value={'kredit_' + type} />
                            <div className="row">
                                <div className="col-md-7">
                                    <label>ФИО</label>
                                    <input name="name" className='form-control' type="text" placeholder="Фамилия, Имя, Очество" required />
                                    <label>Телефон</label>
                                    <input name="phone" className='phone-oformit form-control' placeholder='(+992) _ _ _ __ __ __' type="number" required />
                                    {type === 'alif' ?
                                        <>
                                            <label>№ карты Салом</label>
                                            <input name="salom" className='phone-oformit form-control' type="text" placeholder="Код договора" />
                                        </> : ''
                                    }
                                    <label>Введите номер карту или счет.</label>
                                    <input name="card" className='form-control' type="number" placeholder="_ _ _ _ _ _" required />
                                    {/* <label>Комментарий</label>
                                    <textarea name="text" className='textarea-zayafka form-control' placeholder='Необязательно'></textarea> */}
                                </div>
                                <div className="col-md-5 pt-3 pb-3 d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    {type === 'alif' ?
                                        <>
                                            <img style={{ width: '100px' }} src="/assets/images/cart/qr-alif.jpg" alt=" qr alif with yoshop" />
                                            <b className='pl-10'>Сканируйте QR-Code</b>
                                        </> : ''
                                    }
                                </div>
                            </div>
                        </form>
                        <br />
                        <div className='box_d_right'>
                            <button
                                className='btn btn-warning btn-lg'
                                onClick={(e) => AjaxAll(e, "#form_zayafka_kredit")}
                            >Оформить</button>
                        </div>
                    </div>
                    <br />
                </div>
            </section >
        </>
    );
}
export default Rasrochka;