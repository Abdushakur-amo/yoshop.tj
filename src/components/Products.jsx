import React from 'react';
import { Link } from 'react-router-dom';
import jQuery from 'jquery';
import { http } from '../ajax';
import { BlockPro } from '../components';
import './../scss/Products.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Products() {
    const [Error, setError] = React.useState(null);
    const [Load, setLoad] = React.useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [Products, setProducts] = React.useState([]);
    const [modalWindow, setModalWindow] = React.useState(false);
    const activeModal = React.useRef();
    const ModalWindow = (e) => {
        document.querySelector('.modal-view').innerHTML = ' ';
        let boxLi = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        let Copy = boxLi.querySelector('.modal_product');
        let addElement = document.querySelector('.modal-view');
        var p_prime = Copy.cloneNode(true);
        addElement.append(p_prime);
        let ActionModal = document.querySelector('.modal-window');
        ActionModal.classList.add('active-modal');
        document.querySelector('body').style.overflowY = 'hidden';
    }
    const ClickBodyCloseModal = (dom_modal) => {
        let a_modal = dom_modal.path[0].classList.contains('close__modal__window');
        let b_modal = dom_modal.path[0].classList.contains('modal-close');
        let c_modal = dom_modal.path[0].classList.contains('modal-window');
        if (a_modal || b_modal || c_modal) {
            document.querySelector('body').style.overflowY = 'scroll';
            document.querySelector('.modal-window').classList.remove('active-modal');
        }
    }
    const ajax = () => {
        jQuery.ajax({
            url: `${http()}/api/rubrica`,
            method: 'POST',
            data: { 'name': 'populyar' },
            dataType: "html",
            beforeSend: function () {
                setLoad([]);
            },
            success: function (data) {
                // console.log(data);
                let json = jQuery.parseJSON(data);
                setProducts(json);
            }
        });
    };
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
        ajax();
        document.addEventListener('click', ClickBodyCloseModal);
        return () => {
            document.removeEventListener('click', ClickBodyCloseModal);
        }
    }, []);

    return (
        <section id='products'>
            <div className="container">
                <h4 className='h4'>Популярные товары</h4>
                <hr />
                <div className="view__products">
                    {Error ? <ul><div className='Error'>Ошибка загрузка продукть из Api </div></ul> :
                        <ul className='tovars'>
                            {Load.length != 0 ? 'Загрузка. . .'
                                : Products.map((itme, in_count) => {
                                    return <li key={`${itme}_${in_count}`}><BlockPro pay={itme.info.price_four} title={itme.info.title} id={itme.info.id} img={itme.img} shop={itme.info.prodavets} /></li>
                                })}
                        </ul>
                    }
                </div>
            </div>
        </section >
    );
}
