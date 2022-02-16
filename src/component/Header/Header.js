import React from 'react';
import logo from './../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='nav'>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Order</a>
            </div>
        </div>
    );
};

export default Header;