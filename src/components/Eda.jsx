import React from 'react';
import $ from 'jquery';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
// import OwlCarousel from 'react-owl-carousel';
// import './../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
// import './../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import './../scss/style.scss';

const options = ['Все', 'М-кафе', 'Мохир', 'Burger King', 'Hot-Dog'];
// plugins: [
//     // other plugins,
//     new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//         'window.jQuery': 'jquery'
//     }),
// ],
export default function Eda() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <section className="htc__new__product bg__white">
            <br />
            <div className="container">
                <div className="element-eda-one">
                    <div className="d-flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <h5>Выбирайте кафе или рестораны: </h5>
                        <React.Fragment >
                            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button ">
                                <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                                <Button
                                    size="small"
                                    aria-controls={open ? 'split-button-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-label="select merge"
                                    aria-haspopup="menu"
                                    onClick={handleToggle}
                                >
                                    <ArrowDropDownIcon />
                                </Button>
                            </ButtonGroup>
                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === 'bottom' ? 'center top' : 'center bottom',
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList id="split-button-menu">
                                                    {options.map((option, index) => (
                                                        <MenuItem
                                                            key={option}
                                                            disabled={index === 2}
                                                            selected={index === selectedIndex}
                                                            onClick={(event) => handleMenuItemClick(event, index)}
                                                        >
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </React.Fragment>
                    </div>
                </div>
                <div className='element-filter-eda'>
                    <Button color="warning">Чай</Button>
                    <Button color="warning">Кофе</Button>
                    <Button color="warning">Минералыная вода</Button>
                    <Button color="warning">Газированные напитки </Button>
                    <Button color="warning">Энергетики</Button>
                </div>
                <hr />
                <div className="element-carusel">
                    <div className='d-grid'>
                        <div className="card item">
                            <div className="card-body">
                                <img src="http://admin.yoshop.loc/files/products/03-2022/76/76_0.jpg" />
                                <h4>Названия продукта</h4>
                                <p>Lorem ipsum dolor sit amet.Lorem5 loder5  </p>
                            </div>
                        </div>
                        <div className="card item">
                            <div className="card-body">
                                <img src="http://admin.yoshop.loc/files/products/03-2022/76/76_0.jpg" />
                                <h4>Названия продукта</h4>
                                <p>Lorem ipsum dolor sit amet.Lorem5 loder5  </p>
                            </div>
                        </div>
                        <div className="card item">
                            <div className="card-body">
                                <img src="http://admin.yoshop.loc/files/products/03-2022/76/76_0.jpg" />
                                <h4>Названия продукта</h4>
                                <p>Lorem ipsum dolor sit amet.Lorem5 loder5  </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="eda_all">
                    <div className="d-grid">
                        <div className="card">
                            <div className="card-body">
                                <img src="http://admin.yoshop.loc/files/products/03-2022/81/81_0.jpg" />
                                <h4>Названия продукта</h4>
                                <p>Lorem ipsum dolor sit amet.Lorem5 loder5  </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src="http://admin.yoshop.loc/files/products/03-2022/81/81_0.jpg" />
                                <h4>Названия продукта</h4>
                                <p>Lorem ipsum dolor sit amet.Lorem5 loder5  </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src="http://admin.yoshop.loc/files/products/03-2022/81/81_0.jpg" />
                                <h4>Названия продукта</h4>
                                <p>Lorem ipsum dolor sit amet.Lorem5 loder5  </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src="http://admin.yoshop.loc/files/products/03-2022/81/81_0.jpg" />
                                <h4>Названия продукта</h4>
                                <p>Lorem ipsum dolor sit amet.Lorem5 loder5  </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src="http://admin.yoshop.loc/files/products/03-2022/81/81_0.jpg" />
                                <h4>Названия продукта</h4>
                                <p>Lorem ipsum dolor sit amet.Lorem5 loder5  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </section>

    );
}
