import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Admin_template() {
    return (

        <main className="main">
            <hr />
            <h1>This is Admin pages</h1>
            <Link to="/"> Переиддти в главни странитца</Link>
            <hr />
            <Outlet />
        </main>

    );
}