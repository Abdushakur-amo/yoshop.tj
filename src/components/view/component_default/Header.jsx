import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import '../../../scss/header.scss';
import TopInfo from './TopInfo';
import TowHeader from './TowHeader';
import PositionHead from './PositionHead';

function Header() {
    const [activeBurger, burgerClickR] = React.useState(false);
    return (
        <>
            <div className="wrapper-header">
                <header id="header" className="htc-header">
                    <TopInfo />
                    <TowHeader />
                </header>
                <PositionHead />
            </div>
        </>
    );

}

export default Header;