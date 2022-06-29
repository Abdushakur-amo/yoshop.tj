import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import { BlockPro } from '../components';
import jQuery from 'jquery';
import { http } from '../ajax';
import '../scss/list_product.scss';
import './../scss/Products.scss';
import AOS from "aos";
import "aos/dist/aos.css";
function ListProducts() {
    const id = useParams().id;
    const [arrayTovar, setArrayTovar] = React.useState([]);
    const [cat, setCat] = React.useState([]);
    const [Load, setLoad] = React.useState([]);
    const [sortObjStyle, setSortObjStyle] = React.useState({});
    const [itmeRiadBlock, setItmeRiadBlock] = React.useState(null);
    const [valueSlider, setValue] = React.useState([1500, 10900]);
    const SliderFunk = (event, newValue) => {
        setValue(newValue);
    };
    const sortObjFoonk = (x = 120, y = 1, t = false) => {
        let zize, sm;
        if (t == 'itme_riad_block') {
            t = 'itme_riad_block';
            zize = x + '%';
            setItmeRiadBlock('itme_riad_block');
        }
        else setItmeRiadBlock(null);
        if (t == 'sm') {
            if (window.innerWidth > 575) zize = 240 + 'px';
            else zize = x + 'px';
        }
        if (t == 'lg') {
            if (window.innerWidth > 575) zize = 200 + 'px';
            else zize = x + 'px';
        }

        let obj = {
            gridTemplateColumns: `repeat(auto-fill, minmax(${zize}, 1fr))`,
            rowGap: `${y}em`,
            columnGap: `${y}em`,
        }
        setSortObjStyle(obj);
    };
    const ajax = () => {
        jQuery.ajax({
            url: `${http()}/api/go_cats/${id}`,
            method: 'POST',
            data: { 'date': 123 },
            dataType: "html",
            beforeSend: function () {
            },
            success: function (data) {
                console.log(data);
                let json = jQuery.parseJSON(data);
                setArrayTovar(json.tovar);
                setCat(json.cat);
            }
        });
    };
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
        ajax();
    }, [id]);
    let CatEnd = cat.length - 1;
    function valuetext(value) {
        return `${valueSlider} TJS`;
    }
    console.log(arrayTovar);
    return (
        <>
            {
                (arrayTovar.length !== 0) ?
                    <div className="top_header_info">
                        <div className="container">
                            <h3 className="h3">{cat.length ? cat[CatEnd].title : null}</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    {
                                        cat.map((cats, index) => {
                                            return (
                                                <li key={index + cats.id} className="breadcrumb-item">
                                                    {cat[cat.length - 1].title === cats.title ? <span>{cats.title}</span> :
                                                        <Link to={`/category/${cats.id}`} >{cats.title}</Link>}
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            </nav>
                        </div>
                    </div> : <div className='container'><ul><li className="breadcrumb-item"><Link to={`/`} > <i className="ti-back-left"></i> Главни странитца</Link></li></ul></div>
            }
            <div className="view__products">
                <hr />
                <div className='container'>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                            <div className="htc__shop__left__sidebar">
                                {/* Start Range */}
                                <div className="htc-grid-range">
                                    <h4 className="section-title-4">Филтр товаров</h4>
                                    <div className="content-shopby">
                                        <div className="price_filter s-filter clear">
                                            <form action="#" method="GET">
                                                <Box sx={{ width: '100%' }}>
                                                    <Slider
                                                        getAriaLabel={() => 'Tempera ture range'}
                                                        value={valueSlider}
                                                        onChange={SliderFunk}
                                                        valueLabelDisplay="auto"
                                                        getAriaValueText={valuetext}
                                                        max={15000}
                                                        color="secondary"
                                                    />
                                                </Box>
                                                <div className='d-flex' style={{ justifyContent: 'flex-end' }}>
                                                    <Button color="secondary" >ПОИСК</Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* End Range */}
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12 smt-30">
                            <div className="row pb-3">
                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div className="producy__view__container">
                                        {/* Start Short Form */}
                                        <div className="product__list__option">
                                            <div className="order-single-btn">
                                                <select className="select-color selectpicker">
                                                    <option>Новинки</option>
                                                    <option>Сначала дешови</option>
                                                    <option>Сначала дорогие</option>
                                                    <option>Популярние</option>
                                                </select>
                                            </div>
                                            <div className="shp__pro__show">
                                                <span>Мы сделали новогодное скидка до 30% </span>
                                            </div>
                                        </div>
                                        {/* End Short Form */}
                                        {/* Start List And Grid View */}
                                        <ul className="view__mode" role="tablist">
                                            <li onClick={() => sortObjFoonk(100, 0, 'itme_riad_block')} role="presentation" className="grid-view active">
                                                <a>
                                                    <i className="ti-layout-list-thumb" />
                                                </a>
                                            </li>
                                            <li onClick={() => sortObjFoonk(150, 0, 'sm')} role="presentation" className="list-view">
                                                <a>
                                                    <i className="ti-layout-grid2" />
                                                </a>
                                            </li>
                                            <li onClick={() => sortObjFoonk(110, 0, 'lg')} role="presentation" className="list-view">
                                                <a>
                                                    <i className="ti-layout-grid3" />
                                                </a>
                                            </li>
                                        </ul>
                                        {/* End List And Grid View */}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <ul className='tovars' style={sortObjStyle}>
                                    {Load.length != 0 ?
                                        Load.map((loadItme, index) => {
                                            return (
                                                <li className='box-loader' key={index}>
                                                    <div className="__block__">
                                                        <div className="view_img">
                                                            <div className="lds-ripple">
                                                                <div></div>
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                        <h2><a href="#">Загрузка...</a></h2>
                                                    </div>
                                                </li>
                                            )
                                        })
                                        : arrayTovar.map((itme) => {
                                            return <li key={itme.id}> <BlockPro itmeRiadBlock={itmeRiadBlock} pay={itme.all.price_four} title={itme.title} id={itme.id} img={itme.img} shop={itme.prodavets} /></li>
                                        })}
                                </ul>
                                {!arrayTovar.length ?
                                    <div className="null_box" style={{ height: '90vh' }}>
                                        <div className="element-center" style={{ flexDirection: 'column', height: '70%' }}>
                                            <h1 style={{ fontSize: '4em' }}><i className="ti-dropbox"></i></h1>
                                            <h4>В этой категории товар не найден</h4>
                                        </div>
                                    </div> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}
export default ListProducts;