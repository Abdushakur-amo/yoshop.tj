import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Footer, Header, Menu_button } from '../component_default'
let style = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
};
export default function Shop_template() {

    return (
        <div className='template__shop' style={style}>
            <Header />
            {/* <main className="main__shop" style={{ minHeight: '60vh' }}> */}
            <main className="main__shop">
                <Outlet />
            </main>
            <Footer />
            <Menu_button />
        </div>
    );
}
