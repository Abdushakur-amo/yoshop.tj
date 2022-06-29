import React from 'react';
import { Link } from 'react-router-dom';
import Catalog from './Catalog';
import Menu from './Menu';
import jQuery from 'jquery';
import '../../../scss/header.scss';
function PositionHead() {
    const [activeMenuCats, setaActiveMenuCats] = React.useState(false);
    const [BurgerMenuRef, setBurgerMenuRef] = React.useState(false);
    const clickMe = () => {
        document.querySelector('.temp_main_header ._c_').classList.toggle('center_mobile_nav_active');
    }
    const RefACT = React.useRef();
    return (
        <>
            <Menu BurgerMenuRef={RefACT} abc={true} />
            <div className="temp_main_header">
                <div className="container" style={{ paddingLeft: '0' }}>
                    <div className="d-flex">
                        <div className="_l_">
                            <a ref={RefACT} className='text-dark btn-lg category-btn '> ВСЕ КАТЕГОРИИ <i className='ti-arrow-right'></i> </a>
                        </div>
                        <div className="_c_">
                            <ul className='ul-text'>
                                <li><a href="#">О нас</a></li>
                                <li><a href="#">Акции</a></li>
                                <li><a href="#">Доставка</a>
                                    <ul className='parent-menu-l'>
                                        <li><Link to="/">Службы Ддоставки YOSHOP</Link></li>
                                        <li><Link to="/">Курьером</Link></li>
                                        <li><Link to="/">Транспортные средством</Link></li>
                                        <li><Link to="/">Почтаи Аср</Link></li>
                                        <li><Link to="/">Рахш доставка</Link></li>
                                        <li><Link to="/">Зудбиёр</Link></li>
                                    </ul>
                                </li>
                                <li><a href="#">Оплата</a>
                                    <ul className='parent-menu-l'>
                                        <li><Link to="/">Корти милли </Link></li>
                                        <li><Link to="/">Humo</Link></li>
                                        <li><Link to="/">Imon international</Link></li>
                                        <li><Link to="/">YO-CARD</Link></li>
                                        <li><Link to="/">Рассрочку</Link></li>
                                    </ul>
                                </li>
                                <li><a href="#">Рассрочка</a>
                                    <ul className='parent-menu-l'>
                                        <li><Link to="/">Оформить рассрочку</Link></li>
                                        <li><Link to="/">Идентификационая карта YOSHOP</Link></li>
                                        <li><Link to="/">Оформление</Link></li>
                                        <li><Link to="/">Документы</Link></li>
                                        <li><Link to="/">Активные траншы</Link></li>
                                        <li><Link to="/">Узнать id-код</Link></li>
                                        <li><Link to="/">Способ оплата</Link></li>

                                    </ul>
                                </li>
                                <li><a href="#">Yo-Карта </a>
                                    <ul className='parent-menu-l'>
                                        <li><Link to="/">Заблокировать карту</Link></li>
                                        <li><Link to="/">Разблокировать карту</Link></li>
                                        <li><Link to="/">Пополнить карту</Link></li>
                                        <li><Link to="/">Оплата по карту</Link></li>
                                        <li><Link to="/">Проверка лимить</Link></li>
                                        <li><Link to="/">Заказать карту</Link></li>
                                    </ul>
                                </li>
                                <li><a href="#">Офис</a>
                                    <ul className='parent-menu-l'>
                                        <li><Link to="/">г.Яван</Link></li>
                                        <li><Link to="/">А.Джоми</Link></li>
                                        <li><Link to="/">г.Бохтар</Link></li>
                                        <li><Link to="/">г.Вахдат</Link></li>
                                        <li><Link to="/">г.Нурек</Link></li>
                                    </ul>
                                </li>
                                <li><a href="#">Магазины</a>
                                    <ul className='parent-menu-l'>
                                        <li><Link to="/">Бытовая техника</Link></li>
                                        <li><Link to="/">Телефон и акессуары</Link></li>
                                        <li><Link to="/">Компютеры</Link></li>
                                        <li><Link to="/">Мебель</Link></li>
                                        <li><Link to="/">Одежда и обувь</Link></li>
                                        <li><Link to="/">Продукть и питание</Link></li>
                                        <li><Link to="/">Аптека</Link></li>
                                        <li><Link to="/">Строителный товары</Link></li>
                                    </ul>
                                </li>
                                <li><a href="#">Сервис</a>
                                    <ul className='parent-menu-l'>
                                        <li><Link to="/">Ремонт и обслуживание</Link></li>
                                        <li><Link to="/">Гарантия и возврата</Link></li>
                                        <li><Link to="/">Сервисное услуги</Link></li>
                                        <li><Link to="/">Заявку на гарантийное обслуживание</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="_r_">
                            <div className='icons-m'>
                                <ul>
                                    <li className='menu-shop' onClick={() => clickMe()}> <i className='ti-menu-alt'></i> <span>Меню</span> </li>
                                    <li> <Link to="/search"><i className='ti-search'></i> </Link> </li>
                                    <li> <Link to="/carzin"> <i className='ti-shopping-cart'></i></Link> </li>
                                    <li> <Link to="/users"><i className='ti-user'></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <Catalog /> */}
                </div>

                {/* <marquee behavior="" direction=""> Мы скоро откроемся! Бесплатная доставка! Техническая подержка 24/7. </marquee> */}

            </div >
        </>
    );
}

export default PositionHead;