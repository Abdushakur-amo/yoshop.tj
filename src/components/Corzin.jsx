import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './../scss/Corzin.scss';
export default function Corzin() {
    return (
        <main className="main">
            <div className="container">
                <div className='content-corzin'>
                    {/* Пустой карзин */}
                    <div className="corzin_null">
                        <div className='content-icon'>
                            <i className="ti-dropbox" />
                        </div>
                        <h4>Корзин пусть!</h4>
                    </div>
                    {/* Дисплей болшой */}
                    <div className="corzin_product">
                        <Table bordered hover>
                            <thead className='header-table-carzin'>
                                <tr>
                                    <th>Наименование товар</th>
                                    <th>Цена</th>
                                    <th>Количество</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='product-in-car'>
                                        <img src="https://img.icons8.com/fluency/48/000000/raspberry-pi-zero.png" />
                                        <h5>Материнская плата</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                                    </td>
                                    <td>2000</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td className='product-in-car'>
                                        <img src="https://img.icons8.com/fluency/48/000000/remote-desktop--v2.png" />
                                        <h5>4K Монитори размер 52</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                                    </td>
                                    <td>5000</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td className='product-in-car'>
                                        <img src="https://img.icons8.com/fluency/48/000000/usb-memory-stick.png" />
                                        <h5>USB 4.0 скоросной, 128gb</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                                    </td>
                                    <td>10</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </Table>
                        <h5>Итого: 1223 <sup>tjs</sup></h5>
                        <p>Выберите срок рассрочки:</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <p className='col-md-4'>Консультант перезвонит для уточнения деталей. Если у Вас есть вопросы, позвоните на номер  +992 111 77 11 22</p>
                        </div>
                        <div className='btn-block'>
                            {/* <Button variant="outline-dark" size="sm">3 месяц</Button> */}
                            <Button variant="outline-dark" size="sm">3 месяц</Button>
                            <Button variant="outline-dark" size="sm">6 месяц</Button>
                            <Button variant="outline-dark" size="sm">9 месяц</Button>
                            <Button variant="outline-dark" size="sm">12 месяц</Button>
                            <Button variant="outline-dark" size="sm">18 месяц</Button>
                            <Button variant="outline-dark" size="sm">24 месяц</Button>
                        </div>
                        <Button variant="warning" className='mt-2'>Заказать</Button>
                    </div>
                    {/* Мобилни карзин */}
                    <div className="carzin_mobile">
                        <div className='product-in-car'>
                            <img src="https://img.icons8.com/fluency/48/000000/raspberry-pi-zero.png" />
                            <h5>Материнская плата</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            <ul>
                                <li>Цена:  <b>433</b> <sup> tjs</sup></li>
                                <li>Количство: 2</li>
                            </ul>
                        </div>
                        <div className='product-in-car'>
                            <img src="https://img.icons8.com/fluency/48/000000/remote-desktop--v2.png" />
                            <h5>4K Монитори размер 52</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            <ul>
                                <li>Цена: <b>1000</b> <sup> tjs</sup></li>
                                <li>Количство: 2</li>
                            </ul>
                        </div>
                        <div className='product-in-car'>
                            <img src="https://img.icons8.com/fluency/48/000000/usb-memory-stick.png" />
                            <h5>USB 4.0 скоросной, 128gb</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            <ul>
                                <li>Цена: <b>1000</b> <sup> tjs</sup></li>
                                <li>Количство: 2</li>
                            </ul>
                        </div>
                        <p>Выберите срок рассрочки:</p>
                        <div className='btn-block'>
                            {/* <Button variant="outline-dark" size="sm">3 месяц</Button> */}
                            <Button variant="outline-dark" size="sm">3 месяц</Button>
                            <Button variant="outline-dark" size="sm">6 месяц</Button>
                            <Button variant="outline-dark" size="sm">9 месяц</Button>
                            <Button variant="outline-dark" size="sm">12 месяц</Button>
                            <Button variant="outline-dark" size="sm">18 месяц</Button>
                            <Button variant="outline-dark" size="sm">24 месяц</Button>
                        </div>
                        <p className='itog'> <b>Итого: 1433 <sup>tjs</sup></b> </p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <p className='col-md-4'>Консультант перезвонит для уточнения деталей. Если у Вас есть вопросы, позвоните на номер  +992 111 77 11 22</p>
                        </div>
                        <Button variant="warning" >Заказать</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
