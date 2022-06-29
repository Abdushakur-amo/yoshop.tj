import React from 'react';
import { Link } from 'react-router-dom';
const style = {
    display: 'flex',
    position: 'fixed',
    background: '#fff',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column'
};
const icon = {
    width: '100%',
    fontSize: '50px',
    textAlign: 'center',
};
export default function ErrorCode404() {
    return (
        <div style={style}>
            <div style={icon} ><i className='ti-face-sad'></i></div>
            <h2 style={{ textAlign: 'center' }}>Not found 404</h2>
            <p style={{ textAlign: 'center' }}><Link to={"/"}> <i className='ti-arrow-left'></i>  Переидти в главни странитца</Link></p>

        </div>
    );
}
