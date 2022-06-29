import React from 'react'
import './../scss/Corzin.scss';
import Button from '@mui/material/Button';
export default function BanerOne() {
    return (
        <section className="htc__new__product bg__white">
            <br />

            <img style={{ width: '100%' }} src="/assets/images/category/reclamma.jpg" alt="new product" />

            <br />
            <div className="icons_block">
                <div className="container">
                    <div className="d-flex">
                        <div className="box">
                            <Button color="warning" variant="outlined" size="large">Акции</Button>
                        </div>
                        <div className="box">
                            <Button color="warning" variant="outlined" size="large">Новинки</Button>
                        </div>
                        <div className="box">
                            <Button color="warning" variant="outlined" size="large">Хиты</Button>
                        </div>
                        <div className="box">
                            <Button color="warning" variant="outlined" size="large">Распродажа</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
