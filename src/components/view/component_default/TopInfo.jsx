import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Close, Phone } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../../../scss/header.scss';
function TopInfo() {
    const [price, setPrice] = React.useState(3);
    const [leng, setLeng] = React.useState(3);
    const [loca, setLoca] = React.useState(2);
    const handleChange_1 = (event) => {
        setPrice(event.target.value);
    };
    const handleChange_2 = (event) => {
        setLoca(event.target.value);
    };
    const handleChange_3 = (event) => {
        setLeng(event.target.value);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="temp_top_info">
            <div className="container">
                <div className="d-flex">
                    <div className="_l_">
                        <ul>
                            <li>
                                <FormControl fullWidth>
                                    {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={price}
                                        label="Age"
                                        onChange={handleChange_1}
                                    >
                                        {/* <MenuItem value={1}>Рубль RUS</MenuItem>
                                    <MenuItem value={2}>Долар $</MenuItem> */}
                                        <MenuItem value={3}>Валюта: <img src="/assets/images/icons/flag_tj.svg" /> TJS </MenuItem>
                                    </Select>
                                </FormControl>
                            </li>
                            <li className='linia'></li>
                            <li>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={loca}
                                        label="Age"
                                        onChange={handleChange_2}
                                    >
                                        <MenuItem value={1}><img src="/assets/images/icons/location.svg" /> Душанбе</MenuItem>
                                        <MenuItem value={2}><img src="/assets/images/icons/location.svg" /> Яван</MenuItem>
                                        <MenuItem value={3}><img src="/assets/images/icons/location.svg" /> А. Ҷоми</MenuItem>
                                        <MenuItem value={4}><img src="/assets/images/icons/location.svg" /> Бохтар</MenuItem>
                                        <MenuItem value={5}><img src="/assets/images/icons/location.svg" /> Г. Норак</MenuItem>
                                        <MenuItem value={6}><img src="/assets/images/icons/location.svg" /> Г. Ваҳдат</MenuItem>
                                    </Select>
                                </FormControl>
                            </li>
                            <li className='linia'></li>
                            <li>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={leng}
                                        label="Age"
                                        onChange={handleChange_3}
                                    >
                                        <MenuItem value={3}><img src="/assets/images/icons/leng.svg" /> RU</MenuItem>
                                        {/* <MenuItem value={2}><img src="/assets/images/icons/leng.svg" /> Таджикистан</MenuItem> */}
                                        {/* <MenuItem value={3}><img src="/assets/images/icons/leng.svg" /> Англиски</MenuItem> */}
                                    </Select>
                                </FormControl>
                            </li>
                        </ul>
                    </div>
                    <div className="_r_">
                        <ul>
                            <li onClick={handleClickOpen} style={{ cursor: 'pointer', margin: '5px 0' }}>
                                <img src="/assets/images/icons/phone.svg" />
                                <span> Заказать звонок <br /> +(992) 111 77 11 22 </span>
                            </li>
                            <li>
                                <img src="/assets/images/icons/email.svg" />
                                <span> Электронная почта<br />info@yoshop.tj </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Оставьте свой номер и мы вам перезвоним"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <label> ФИО </label>
                                <input type="text" className='form-control' />
                                <label> Телефон </label>
                                <input type="number" className='form-control' />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="outlined" startIcon={<Close />} color="error">
                                Отменить
                            </Button>
                            <Button onClick={handleClose} variant="contained" endIcon={<Phone />} color="success">
                                Перезвоните
                            </Button>
                        </DialogActions>
                    </Dialog>

                </div>
            </div>
        </div >
    );
}

export default TopInfo;