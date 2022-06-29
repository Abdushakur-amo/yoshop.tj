import React from 'react';
import { Link } from 'react-router-dom';
import './../scss/style.scss';
import './../scss/block_pro.scss';
import { Button } from '@mui/material';
import { MinText } from '../function';
export default function BlockPro({ id, title, img, shop, pay, itmeRiadBlock }) {
    let img_r = (!img) ? '/assets/images/pro.jpg' : img;
    React.useEffect(() => {
    }, []);
    return (
        <>
            <div className='itme_tovar' id={itmeRiadBlock} key={`${id}_${title}`} >
                <div className="__block__">
                    <div className="view_img">
                        <Link to={`/single_product/${id}`}><img src={img_r} /></Link>
                    </div>
                    <div className="information_itme">
                        <h2><Link to={`/single_product/${id}`}> <MinText text={title} max={3} /></Link></h2>
                        <p>Магазин: {shop} <i className='ti-direction-alt'></i></p>
                        <p className='summa'>{pay} TJS</p>
                        <p className='btn-kupit'><Link to={`/single_product/${id}`} className="car__btn">Купить <i className='ti-shopping-cart-full'></i></Link></p>
                        <div className='comp-logos'>
                            <img src="/assets/images/logo/logo.png" alt="YoSHOP" />
                            <img src="/assets/images/logo/logoAlif.png" alt="Alif png" />
                            <img src="/assets/images/logo/logoHumo.png" />
                        </div>
                    </div>
                </div>
                <div className='v-carzin'>
                    <ul>
                        <li><i className='ti-angle-left'></i></li>
                        <li className='input-s'><input type="text" defaultValue={'1'} /></li>
                        <li><i className='ti-angle-right'></i></li>
                        <li className='button-s '> <Link to={`/single_product/${id}`}><Button variant="outlined" color='warning'>Купить</Button></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
