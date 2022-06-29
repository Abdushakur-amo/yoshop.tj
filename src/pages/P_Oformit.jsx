import React from 'react';
import { Link } from 'react-router-dom';
import { AjaxAll } from '../ajax';
import { useParams } from 'react-router-dom';
import { Checkbox, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel, } from '@mui/material';
import '../scss/page_style/oformit.scss';

export default function Oformit() {
    const [oformit, setOformit] = React.useState([]);
    const id = useParams().id;

    const DostavShow = (e) => {
        if (e.target.checked)
            document.querySelector('.dos-block-show').classList.add('dos-action');
        else document.querySelector('.dos-block-show').classList.remove('dos-action');
    }
    return (
        <section className="htc__new__product bg__white">
            <div className="container">
                <h3 className="element-center">Оформлени заказ</h3>
                <p className="element-center">Оставите свой данные мы скоро вам звоним</p>
                <hr />
                <div className='box_oformlen'>
                    <div className="element-center">
                        <div className="box_of">
                            <form id='form_zayafka' url='/api/shop_zayafka' method='post'>
                                <input type="hidden" name='id_pro' value={id} />
                                <input type="hidden" name='type' value={'nalichi_yoshop'} />
                                <p style={{ textAlign: 'center' }}><b>Личные данные</b></p>
                                <label>ФИО</label>
                                <input name='name' className='form-control' type="text" placeholder="Фамилия, Имя, Очество" required /><br />
                                <label>Телефон</label>
                                <input name="phone" className='phone-oformit form-control' placeholder='(+992) _ _ _ __ __ __' type="number" required /><br />
                                <label>Комментарий</label>
                                <textarea name="text" className='textarea-zayafka form-control' placeholder='Необязательно' ></textarea>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28, color: '#212529' } }}
                                    color="success"
                                    label="С доставкой"
                                    name='dostavka'
                                    onClick={(e) => DostavShow(e)}
                                /><i className="ti-truck"></i>
                                <div className='dos-block-show'>
                                    <b>Выберите город</b>
                                    <div className="form-groupe">
                                        <FormControl>
                                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="syti" >
                                                <FormControlLabel value="Душанбе" control={<Radio />} label="Душанбе" />
                                                <FormControlLabel value="Яван" control={<Radio />} label="Яван" />
                                                <FormControlLabel value="Бохтар" control={<Radio />} label="Бохтар" />
                                                <FormControlLabel value="А.Джоми (Куйбышев)" control={<Radio />} label="А.Джоми (Куйбышев)" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    {/* <input name="syti" type="text" className='form-control' placeholder='на какому город в сейчас жвёте?' /> */}
                                    <label>Адрес</label>
                                    <textarea name="text_dos" className='form-control' placeholder='Улица, Дом, Квартира,' ></textarea>
                                </div>
                                <br />
                                <button
                                    className='btn btn-warning'
                                    onClick={(e) => AjaxAll(e, "#form_zayafka")}
                                >Заказать</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
