import React from 'react';
import jQuery from 'jquery';
import { Commentary } from '../components';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { http } from '../ajax';
import { useParams, Link } from 'react-router-dom'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import '../scss/single_tovar.scss';

function OneProduct() {
    const id = useParams();
    const [singlInfo, setSingleInfo] = React.useState([]);
    const [nasya, setNasya] = React.useState([]);
    const [infoSrok, setInfoSrok] = React.useState(12);
    const [selectedValue, setSelectedValue] = React.useState('yoshop');
    const [selectedValue2, setSelectedValue2] = React.useState('yavan');
    const [activeLI, setActiveLI] = React.useState('active');
    const [mainImg, setMainImg] = React.useState('0');
    const ajax = () => {
        jQuery.ajax({
            url: `${http()}/api/products/${id.id}`,
            method: 'POST',
            data: { 'data': 'one' },
            dataType: "html",
            beforeSend: function () {
            },
            success: function (data) {
                let json = jQuery.parseJSON(data);
                setSingleInfo(json)
            }
        });
    };
    const controllImg = (i) => {
        setMainImg(i);
    }
    const ClickMeSP2 = (e) => {
        document.querySelector('.btn-toggls__p').classList.toggle('active-credit-btn');
        let a = document.querySelector('.credit-show');
        let b = document.querySelector('.oformit-btn');
        a.classList.toggle('active-credit');
        b.classList.toggle('active-credit');
    }
    const ajax_nasya = (name) => {
        jQuery.ajax({
            url: `${http()}/api/home`,
            method: 'POST',
            data: {
                name: name,
                id_product: id
            },
            dataType: "html",
            beforeSend: function () {
            },
            success: function (data) {
                // console.log(data);
                let json = jQuery.parseJSON(data);
                if (json.name == "info_kredit") alert('Ok');
                setNasya(json);
            }
        });
    }
    const click_qarz = (event, qarz) => {
        let allBTN = document.querySelectorAll('.btn-vbor-srok button');
        allBTN.forEach(element => {
            element.classList.remove('btn-action');
        });
        event.target.classList.add('btn-action');
        setInfoSrok(qarz);
    }
    const click_img = (event, name) => {
        let imgAll = document.querySelectorAll('.box_img_uslug img');
        imgAll.forEach(element => {
            element.classList.remove('active-img');
        });
        event.target.classList.add('active-img');
    }
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputprops: { 'aria-label': item },
    });
    const handleChange2 = (event) => {
        setSelectedValue2(event.target.value);
    };
    const controlProps2 = (item) => ({
        checked: selectedValue2 === item,
        onChange: handleChange2,
        value: item,
        name: 'color-radio-button-demo',
        inputprops: { 'aria-label': item },
    });
    React.useEffect(() => {
        ajax_nasya('sel_nasya');
        ajax();
        return true;
    }, [id]);
    return (
        <>
            <div className="view-content">
                <div className="container">
                    {singlInfo.length == 0 ? <p>Not found</p> :
                        <>
                            <div className="one_box">
                                <div className="__box__ img">
                                    <div className="viewing_img">
                                        <img src={!singlInfo[0].images_lg[mainImg] ? '/assets/images/pro.jpg' : singlInfo[0].images_lg[mainImg]} alt={singlInfo[0].title} />
                                    </div>
                                    <div className="box_images">
                                        <ul>
                                            {singlInfo[0].images_sm.map((i_img, index) => {
                                                return (<li key={index} onClick={() => controllImg(index)}><img src={i_img} /></li>)
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="__box__ information">
                                    <h3>{singlInfo[0].title}</h3>
                                    <h4 className='summa'>Цена: {singlInfo[0].public_pay} <sup>tjs</sup> </h4>
                                    <hr />
                                    <div className='credit-show'>
                                        <b className='pt-2 pb-2'>Выберите срок рассрочки:</b>
                                        <div className='btn-vbor-srok'>
                                            <button onClick={(e) => click_qarz(e, 3)} className=" btn btn-outline-warning">3 мес</button>
                                            <button onClick={(e) => click_qarz(e, 6)} className=" btn btn-outline-warning">6 мес</button>
                                            <button onClick={(e) => click_qarz(e, 9)} className=" btn btn-outline-warning">9 мес</button>
                                            <button onClick={(e) => click_qarz(e, 12)} className=" btn btn-outline-warning btn-action">12 мес</button>
                                            <button onClick={(e) => click_qarz(e, 18)} className=" btn btn-outline-warning">18 мес</button>
                                            <button onClick={(e) => click_qarz(e, 24)} className=" btn btn-outline-warning">24 мес</button>
                                        </div>
                                        <br />
                                        <ul>
                                            <li>В рассрочку: {nasya.length !== 0 ? nasya[infoSrok].Pogosheni : ''} <sup>tjs</sup> в месяц </li>
                                            <li>Комиссия: {nasya.length !== 0 ? nasya[infoSrok].Stavka : ''} %</li>
                                            <li><b>Итого: {nasya.length !== 0 ? nasya[infoSrok].KomANDSumma : ''} <sup>tjs</sup></b></li>
                                        </ul>
                                        <br />
                                    </div>
                                    <b>Информация о товара:</b>
                                    <ul>
                                        <li>Код товара ID: {singlInfo[0].id}</li>
                                        <li>Доставка: <i className='ti-truck'></i>  Догрворная</li>
                                    </ul>
                                    <p className='characteristics'>Все характеристики</p>
                                    <Link to={`/oformit/${singlInfo[0].id}`}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            color="warning"
                                            style={{ marginRight: '10px' }}
                                        >
                                            Купить наличными
                                        </Button>
                                    </Link>
                                    <Link to={`/rasrochka/${selectedValue}/${singlInfo[0].id}`}>
                                        <Button
                                            variant="outlined"
                                            color="warning"
                                            onClick={(e) => ClickMeSP2(e)}
                                            size="large"
                                        >Оформить рассрочку</Button>
                                    </Link>
                                </div>
                            </div>
                            <br />
                            <div className="full_info_pro">
                                <h4>Способ рассрочки:</h4>
                                <hr />
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4>Названия товара</h4>
                                                <ul>
                                                    <li><b>Код товара ID:</b> 36</li>
                                                    <li><b>Магазин:</b> Ёвоншоп</li>
                                                    <li><b>Цена:</b> 10700 tjs</li>
                                                    <li><b>Срок рассрочки:</b> 12 мес</li>
                                                    <li><b>Комиссия:</b> 20.55 %</li>
                                                    <li><b>Итого:</b> 12898.85 tjs</li>
                                                    <li><b>Доставка:</b> Душанбе</li>
                                                    <li><b>Статус заявка:</b> Новый</li>
                                                    <li><b>Способ заявку:</b> Онлайн</li>
                                                    <li><b>Способ оплата:</b> Рассрочку</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4>Ваш город</h4>
                                                <FormControlLabel value="Душанбе" label="Душанбе " control={<Radio />} onClick={(e) => setSelectedValue2(e)} sx={{ '& .MuiSvgIcon-root': { color: '#212529' } }}{...controlProps2('dushanbe')} /><br />
                                                <FormControlLabel value="Ваҳдат" label="Ваҳдат " control={<Radio />} onClick={(e) => setSelectedValue2(e)} sx={{ '& .MuiSvgIcon-root': { color: '#212529' } }}{...controlProps2('vahdat')} /><br />
                                                <FormControlLabel value="Яван" label="Яван " control={<Radio />} onClick={(e) => setSelectedValue2(e)} sx={{ '& .MuiSvgIcon-root': { color: '#212529' } }}{...controlProps2('yavan')} /><br />
                                                <FormControlLabel value="Нурек" label="Нурек " control={<Radio />} onClick={(e) => setSelectedValue2(e)} sx={{ '& .MuiSvgIcon-root': { color: '#212529' } }}{...controlProps2('nurek')} /><br />
                                                <FormControlLabel value="А.Ҷоми" label="А.Ҷоми " control={<Radio />} onClick={(e) => setSelectedValue2(e)} sx={{ '& .MuiSvgIcon-root': { color: '#212529' } }}{...controlProps2('jomi')} /><br />
                                                <FormControlLabel value="Бохтар" label="Бохтар " control={<Radio />} onClick={(e) => setSelectedValue2(e)} sx={{ '& .MuiSvgIcon-root': { color: '#212529' } }}{...controlProps2('bokhtar')} /><br />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4>Оплата по карту</h4>
                                                <div className="box_img_uslug">
                                                    <Link to={`/rasrochka/yoshop/${singlInfo[0].id}`}>
                                                        <img onClick={(e) => click_img(e, 'yopay')} src="/assets/images/cart/yoshop-cart.jpg" alt="" />
                                                    </Link>
                                                    <Link to={`/rasrochka/alif/${singlInfo[0].id}`}>
                                                        <img onClick={(e) => click_img(e, 'salom')} src="/assets/images/cart/alif-cart.jpg" alt="" />
                                                    </Link>
                                                    <Link to={`/rasrochka/humo/${singlInfo[0].id}`}>
                                                        <img onClick={(e) => click_img(e, 'humo')} src="/assets/images/cart/humo-cart.jpg" alt="" />
                                                    </Link>
                                                    {/* <Link to={`/rasrochka/imon/${singlInfo[0].id}`}>
                                                        <img onClick={(e) => click_img(e, 'imon')} src="/assets/images/cart/imon-cart.jpg" alt="" />
                                                    </Link> */}
                                                </div>
                                                {/* <div className="checkbox">
                                                    <FormControlLabel
                                                        value="yoshop"
                                                        control={<Radio />}
                                                        onClick={(e) => setSelectedValue2(e)}
                                                        sx={{ '& .MuiSvgIcon-root': { color: '#212529' } }}
                                                        {...controlProps('yoshop')}
                                                        label="YoShop.TJ"
                                                    /><br />
                                                    <FormControlLabel
                                                        value="alif"
                                                        control={<Radio />}
                                                        onClick={(e) => setSelectedValue2(e)}
                                                        sx={{ '& .MuiSvgIcon-root': { color: '#212529' }, }}
                                                        // color="secondary"
                                                        {...controlProps('alif')}
                                                        label="Алиф салом"
                                                    /><br />
                                                    <FormControlLabel
                                                        value="humo"
                                                        control={<Radio />}
                                                        onClick={(e) => setSelectedValue2(e)}
                                                        sx={{ '& .MuiSvgIcon-root': { color: '#212529' }, }}
                                                        // color="secondary"
                                                        {...controlProps('humo')}
                                                        label="Банк Хумо"
                                                    /><br />
                                                </div> */}
                                                <br />
                                                <div className='element-center'>
                                                    <Link to={`/rasrochka/${selectedValue}/${singlInfo[0].id}`}>
                                                        <Button
                                                            variant="outlined"
                                                            color="warning"
                                                            onClick={(e) => ClickMeSP2(e)}
                                                            size="large"
                                                        >Оплату по карту</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <br />
                            <h4> Дополнительная информация: <i className='ti-pin-alt'></i> </h4>
                            <hr />
                            <div className="all_characteristics">
                                <Tabs defaultActiveKey="One" id="uncontrolled-tab-example" className="mb-3">
                                    <Tab eventKey="One" title="Магазины">
                                        <div className="shop_tovar_all">
                                            <h4>Магазина</h4>
                                            <hr />
                                            <div className="d-grid">
                                                <div className="itme-tab">
                                                    <img src={!singlInfo[0].images_lg[mainImg] ? '/assets/images/pro.jpg' : singlInfo[0].images_lg[mainImg]} alt={singlInfo[0].title} />
                                                    <div className="div">
                                                        <b>{singlInfo[0].title}</b>
                                                        <p>Магазин: Tekhnologia</p>
                                                        <b>1200 tjs</b>
                                                        <div><Button variant="outlined" color="warning">купить</Button></div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="itme-tab">
                                                    <img src={!singlInfo[0].images_lg[mainImg] ? '/assets/images/pro.jpg' : singlInfo[0].images_lg[mainImg]} alt={singlInfo[0].title} />
                                                    <div className="div">
                                                        <b>{singlInfo[0].title}</b>
                                                        <p>Магазин: YOVONSHOP</p>
                                                        <b>1300 tjs</b>
                                                        <div><Button variant="outlined" color="warning">купить</Button></div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="itme-tab">
                                                    <img src={!singlInfo[0].images_lg[mainImg] ? '/assets/images/pro.jpg' : singlInfo[0].images_lg[mainImg]} alt={singlInfo[0].title} />
                                                    <div className="div">
                                                        <b>{singlInfo[0].title}</b>
                                                        <p>Магазин: DIyor</p>
                                                        <b>1100 tjs</b>
                                                        <div><Button variant="outlined" color="warning">купить</Button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Two" title="Характеристики">
                                        <h4>Характеристики</h4>
                                        <hr />
                                        <p><b>Номер товар: </b>{singlInfo[0].all.id}</p>
                                        <p><b>Поставшик: </b>{singlInfo[0].all.postavshik}</p>
                                        <p><b>Продавец: </b>{singlInfo[0].all.prodavets}</p>
                                        <p><b>Видео обзор: </b> <a href={singlInfo[0].all.link_yotube}>{singlInfo[0].all.link_yotube}</a></p>
                                        <p><b>Описания: </b>{singlInfo[0].all.content}</p>

                                    </Tab>
                                    <Tab eventKey="comment" title="Коментария">
                                        <Commentary />
                                    </Tab>
                                </Tabs>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default OneProduct;