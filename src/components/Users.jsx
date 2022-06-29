import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import '../scss/style.scss';
export default function Users() {

    return (
        <div className='users-login'>
            <div className="container">
                <br />
                <div className="row justify-content-center">
                    <div className='col-md-6 col-md-offset-3'>
                        <h3 style={{ textAlign: 'center' }}>Выход</h3>
                        <br />
                        <form className="login" method="post" action='/api/home'>
                            <input className="in" type="login" placeholder="Имя ползователь" />
                            <input className="in" type="password" placeholder="Пароль" />
                            <div className="d-flex" style={{ justifyContent: 'space-between', padding: '25px 0' }}>
                                <div className="form-grup">
                                    <input type="checkbox" name="save" id="save" />
                                    <label htmlFor="save">Запомни мен</label>
                                </div>
                                <div className="form-grup">
                                    <Link to="/"> Забыла Пароль? </Link>
                                </div>
                            </div>
                            <Button
                                color='warning'
                                variant="contained"
                                size="large"
                            >Выход</Button>
                        </form>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}
