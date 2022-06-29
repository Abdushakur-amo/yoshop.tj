import { Outlet, Link } from 'react-router-dom';
import { Slider, Products } from '../components';
import '../scss/single_tovar.scss';
function Rasrochka() {
    return (
        <>
            <section className="htc__new__product bg__white pt-100">
                <div className="container">
                    {/* <h3 style={{ textAlign: 'center' }}>Оплата по карту</h3> */}
                    {/* <p>Оставите свой номер телефон мы скоро вам звоним</p> */}
                    <hr />
                    {/* <div className="two-box_img_uslug">
                    <div>
                        <img style={{ marginLeft: '5px' }} className="active-img" src="/assets/images/cart/yopay.jpg" alt="" />
                        <p><b>YOSHOP</b></p>
                    </div>
                    <div>
                        <img style={{ marginLeft: '5px' }} src="/assets/images/cart/salom.jpg" alt="" />
                        <p><b>Салом</b></p>
                    </div>
                    <div>
                        <img style={{ marginLeft: '5px' }} src="/assets/images/cart/humo.jpg" alt="" />
                        <p><b>Ҳумо</b></p>
                    </div>
                    <div>
                        <img style={{ marginLeft: '5px' }} src="/assets/images/cart/imon.jpg" alt="" />
                        <p>Imon</p>
                    </div> 
            </div> */}

                    <hr />
                    <div className='box_oformlen'>
                        <h2 style={{ textAlign: 'center', color: '#ff9500' }}>Оформление заказа</h2>
                        <p style={{ textAlign: 'center' }}><b>Заполните форму заявки</b></p>
                        <img style={{ width: '100px' }} src="http://admin.yoshop.loc/admin/assets/images/logo/logo.png" alt="" />
                        <br />
                        <label>ФИО</label>
                        <input className='form-control' type="text" />
                        <label>Телефон</label>
                        <input className='phone-oformit form-control' placeholder='(+992) _ _ _ __ __ __' type="number" />
                        <p style={{
                            color: '#ff9500',
                            position: 'absolute',
                            top: '90px',
                            left: '41%',
                            fontWeight: 'bold',
                        }}>№ карты YOSHOP</p>
                        <input
                            className='phone-oformit form-control'
                            placeholder='YO 1200 001 12345'
                            type="number"
                            style={{
                                position: 'absolute',
                                width: '200px',
                                top: '115px',
                                left: '35%',
                                padding: '5px 15px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ff9500',
                                textShadow: '0 0 1px #00000029',
                            }}
                        />
                        {/* <label>Комментарий</label>
                    <textarea className='textarea-zayafka form-control' placeholder='Необязателно'></textarea>
                    <br /> */}
                        <p style={{ textAlign: 'center' }}><b>Способы получения товара</b></p>
                        <label className='btn btn-outline-dark mr-5' for="som-vivo"><input type="checkbox" id="som-vivo" className='mr-5' /> Самовывоз</label>
                        <label className=' btn btn-outline-dark mr-5' for="dostavka"><input type="checkbox" id="dostavka" className='mr-5' /> С доставки</label>
                        <br />
                        <div className='box_d_right'>
                            <button className='btn btn-warning'>Оформить</button>
                        </div>
                        {/* <p><b>Адрес доставки</b></p>
                    <label>Область</label>
                    <input className='phone-oformit form-control' placeholder='Хатлонская област' type="text" />
                    <label>Город</label>
                    <input className='phone-oformit form-control' placeholder='Яван' type="text" />
                    <label>Улица</label>
                    <input className='phone-oformit form-control' placeholder='А.Джоми дом 64 кв 15' type="text" />
                    */}
                    </div>
                    <br />
                    <br />
                </div>
            </section >
        </>

    );
}
export default Rasrochka;