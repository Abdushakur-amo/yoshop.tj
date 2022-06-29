import * as React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Katalog.scss';

export default function Katalog() {
    return (
        <section className="one-katalog">
            <div className="container">
                <h4 className='h4'>Популярные категории</h4>
                <hr />
                <div className="d-flex">
                    <div className="box-k-p">
                        <Link to="/category/3">
                            <img src="/assets/images/category/smartfone.jpg" />
                            <span>Смартфоны</span>
                        </Link>
                    </div>
                    <div className="box-k-p">
                        <Link to="/category/62">
                            <img src="/assets/images/category/bitovaja.jpg" />
                            <span>Бытовая техника</span>
                        </Link>
                    </div>
                    <div className="box-k-p">
                        <Link to="/category/27">
                            <img src="/assets/images/category/komputer.jpg" />
                            <span>Компьютеры</span>
                        </Link>
                    </div>
                    <div className="box-k-p">
                        <Link to="/category/199">
                            <img src="/assets/images/category/kons-tovar.jpg" />
                            <span>Канцелярские товары</span>
                        </Link>
                    </div>
                    <div className="box-k-p">
                        <Link to="/category/197">
                            <img src="/assets/images/category/srtoimaterial.jpg" />
                            <span>Строительные материалы</span>
                        </Link>
                    </div>
                    <div className="box-k-p">
                        <Link to="/category/210">
                            <img src="/assets/images/category/avto-zapchast.jpg" />
                            <span>Автозапчастей</span>
                        </Link>
                    </div>
                    <div className="box-k-p">
                        <Link to="/category/205">
                            <img src="/assets/images/category/pitanie.jpg" />
                            <span>Продукты и питание</span>
                        </Link>
                    </div>
                    <div className="box-k-p">
                        <Link to="/category/206">
                            <img src="/assets/images/category/apteka.jpg" />
                            <span>Аптека</span>
                        </Link>
                    </div>
                    <div className="box-k-p">
                        <Link to="/category/201">
                            <img src="/assets/images/category/odejda-i-obuv.jpg" />
                            <span>Одежда и обувь</span>
                        </Link>
                    </div>
                    {/* <div className="box-k-p">
                        <Link to="/categories">
                            <img src="/assets/images/category/d.jpg" />
                            <span>Другие категории</span>
                        </Link>
                    </div> */}
                </div>
            </div>
        </section >

    );
}
