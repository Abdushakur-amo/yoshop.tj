import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/footer.scss';
class Footer extends Component {
    render() {
        return (
            <>
                <footer className="foooter">
                    <div className="container">
                        <div className="d-flex">
                            <div className="chld-d-f-flex box1">
                                <h4>Контакты</h4>
                                <ul>
                                    <li> Телефон: +(992) 111-77-11-22</li>
                                    <li> Почта: info@yoshop.tj </li>
                                    <li> Режим работы: с 08:00 до 17:00 </li>
                                    <li> Адрес: Ёвон, к.Р.Раджабов ч.1 </li>
                                    <li className='set'> <p>Мы в социальных сетях:</p>
                                        <div className='d-flex'>
                                            <Link to="/"><span><img src="/assets/images/icons/i-t-1.svg" /></span></Link>
                                            <Link to="/"><span><img src="/assets/images/icons/i-i-2.svg" /></span></Link>
                                            <Link to="/"><span><img src="/assets/images/icons/i-w-3.svg" /></span></Link>
                                            <Link to="/"><span><img src="/assets/images/icons/i-f-4.svg" /></span></Link>
                                            <Link to="/"><span><img src="/assets/images/icons/i-y-5.svg" /></span></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="chld-d-f-flex box2">
                                <h4>Каталог товаров</h4>
                                <span>Наш популярный каталог!</span>
                                <ul>
                                    <li><Link to="/category/62"> Бытовая техника </Link></li>
                                    <li><Link to="/category/76">Строительные материалы</Link></li>
                                    <li><Link to="/category/27">Компьютеры</Link></li>
                                    <li><Link to="/category/210">Автозапчастей</Link></li>
                                    <li><Link to="/category/3">Смартфоны</Link></li>
                                    <li><Link to="/category/198">Косметики и парфюмерии</Link></li>
                                </ul>
                            </div>
                            <div className="chld-d-f-flex box3">
                                <h4>Нижние меню</h4>
                                <span>Купи Онлайн Легко в Рассрочку!</span>
                                <ul>
                                    <li><Link to="/">О нас</Link></li>
                                    <li><Link to="/">Акции</Link></li>
                                    <li><Link to="/">Кешбеки</Link></li>
                                    <li><Link to="/">Рассрочка</Link></li>
                                    <li><Link to="/">Офис</Link></li>
                                    <li><Link to="/">Тех.Сервис</Link></li>
                                </ul>
                            </div>
                            <div className="chld-d-f-flex box4">
                                <h4 style={{ textTransform: 'uppercase' }}>Подпишитесь на новости нашего магазина</h4>
                                <div className='div-input'>
                                    <div className="send-input">
                                        <input type="text" placeholder='Пример:  test@mail.com' />
                                        <button><i className='ti-arrow-right'></i></button>
                                    </div>
                                </div>
                                <div className="img-logo">
                                    <p>Мы рады, что Вы воспользовались нашим сервисом, и надеемся, что он придется Вам по вкусу.</p>
                                    <img src="/assets/images/logo/logo2.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_button">
                        <p>© 2020-2022 YoShop.TJ Все прав зашишено.</p>
                    </div>
                </footer>
            </>
        )
    }
}
export default Footer;