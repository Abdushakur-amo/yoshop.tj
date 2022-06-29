import React from 'react';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../../scss/header.scss';
function TowHeader() {
    const [age, setAge] = React.useState(9);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="tow_header">
            <div className="container">
                <div className="d-flex">
                    <div className="box-t _l_">
                        <Link to="/"><img src="/assets/images/logo/logo2.png" /></Link>
                    </div>
                    <div className="box-t _c_">
                        <div className="search_c_">
                            <div className="category-s">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Все каталог"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={9}>Все каталог</MenuItem>
                                        <MenuItem value={10}>Нотбук</MenuItem>
                                        <MenuItem value={20}>Смартфон</MenuItem>
                                        <MenuItem value={30}>Техника</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="input-s">
                                <input type="text" />
                            </div>
                            <button><i className='ti-search'></i></button>
                        </div>
                    </div>
                    <div className="box-t _r_">
                        <ul>
                            <li>  <img src="/assets/images/icons/i-t-1.svg" />   </li>
                            <li>  <img src="/assets/images/icons/i-i-2.svg" />   </li>
                            <li>  <img src="/assets/images/icons/i-w-3.svg" />   </li>
                            <li>  <img src="/assets/images/icons/i-f-4.svg" />   </li>
                            <li>  <img src="/assets/images/icons/i-y-5.svg" />   </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TowHeader;