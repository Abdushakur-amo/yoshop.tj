import React from 'react';
import '../../../scss/menu_button.scss';
import { MobileMenu } from '../../../components';
import User from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Menu_button() {
    let zayafka = {
        'type': 'Zayafka',
        0: 'Создать заявку',
        1: 'Заявка на кредит',
        2: 'Заявку на оплату',
        3: 'Перевод заявку',
        4: 'Подтверждение заявки',
        5: 'Отмененные заявки'
    };
    const handleClick = (event, i = false) => {
        if (!i) {
            let myInfo = event.target.parentNode.nextSibling.children[0].innerHTML;
            const text = (event.target.nodeName === 'IMG') ? event.target.nextSibling.innerText : event.target.innerText;
            document.querySelector('.content-menu-active-mobile').innerHTML = myInfo;
            document.querySelector('.view_menu_mobile h3').innerHTML = text;
        }
        document.querySelector('.view_menu_mobile').classList.toggle('active');

    };
    return (
        <>
            <div className='view_menu_mobile'>
                <div className="border-mobi" ><span onMouseOver={(e) => handleClick(e, true)}></span></div>
                <h3>Меню</h3>
                <ul className="content-menu-active-mobile">
                    <MobileMenu />
                </ul>
            </div>

            <div className="menu_button">
                <ul>
                    <li onClick={(e) => handleClick(e)}>
                        <a>
                            <img src="https://img.icons8.com/material-outlined/24/000000/documents--v2.png" />
                            <small>Заявки</small>
                        </a>
                        <div className="content-mobile-menu">
                            <ul>
                                <li><Link to="#"> Создать заявку  </Link></li>
                                <li><Link to="#"> Заявка на кредит </Link></li>
                                <li><Link to="#"> Заявку на оплату </Link></li>
                                <li><Link to="#"> Перевод заявку </Link></li>
                                <li><Link to="#"> Подтверждение заявки </Link></li>
                                <li><Link to="#"> Отмененные заявки </Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a onClick={(e) => handleClick(e)}>
                            <img src="https://img.icons8.com/android/24/000000/bank-card-back-side.png" />
                            <small>Yo-card</small>
                        </a>
                        <div className="content-mobile-menu">
                            <ul>
                                <li><Link to="#"> Заказат карту </Link></li>
                                <li><Link to="#"> Заблокировать карту </Link></li>
                                <li><Link to="#"> Лимит карты </Link></li>
                                <li><Link to="#"> Задолженность по карту </Link></li>
                                <li><Link to="#"> Накопленные бонусы </Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a onClick={(e) => handleClick(e)}>
                            <img src="https://img.icons8.com/material-outlined/24/000000/paycheque.png" />
                            <small>Оплатить</small>
                        </a>
                        <div className="content-mobile-menu">
                            <ul>
                                <li><a>Оплата товаров</a></li>
                                <li><a>Оплата услуг </a></li>
                                <li><a>Оплата заявку и заказов</a></li>
                                <li><a>Оплата чеков</a></li>
                                <li><a>Подтверждение оплата</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a onClick={(e) => handleClick(e)}>
                            <img src="https://img.icons8.com/android/24/000000/shop.png" />
                            <small>Мой покупки</small>
                        </a>
                        <div className="content-mobile-menu">
                            <ul>
                                <li><Link to="#"> Заказать товар </Link></li>
                                <li><Link to="#"> Истории покупки </Link></li>
                                <li><Link to="#"> Активные кредиты </Link></li>
                                <li><Link to="#"> Кредитные истории </Link></li>
                                <li><Link to="#"> Проверка товарного чека </Link></li>
                                <li><Link to="#"> Поиск товара по серийному номеру </Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a onClick={(e) => handleClick(e)}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAU0lEQVRIiWNgGOqAEYk9gYGBwQCHugsMDAwFaGJEqWdBEjRgYGCwJ8FxRKlnIsFAssCoBQNvAXIquoBHHTY5UtWPggECo2URQTBqwcBbMFoWEQQABh4QY1apKAcAAAAASUVORK5CYII=" />
                            <small>Меню  </small>
                        </a>
                        <div className="content-mobile-menu">
                            <ul>
                                <li><Link to="/dostavka"> Служба доставки </Link></li>
                                <li><Link to="#"> Покупка и продажа товаров </Link></li>
                                <li><Link to="#"> Сервис и ремонтное обслуживание </Link></li>
                                <li><Link to="#"> Гарантийный срок и срок службы </Link></li>
                                <li><Link to="#"> Карта YOSHOP</Link></li>
                                <li><Link to="#"> Рассрочки </Link></li>
                                <li><Link to="#"> Каталог товаров </Link></li>
                                <li><Link to="#"> Акции</Link></li>
                                <li><Link to="#"> Кешбек</Link></li>
                                <li><Link to="#"> Новости магазина</Link></li>
                                <li><Link to="#"> Регистрация</Link></li>
                                <li><Link to="#"> Войти</Link></li>
                                <li><Link to="#"> </Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    );
}
export default Menu_button;