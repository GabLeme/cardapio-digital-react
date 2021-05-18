import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'
import './Menu.css'

const Menu = () => {

    return (
        <div className="MenuHeader">
            <div className="customNavbar">
                <div className="logo">
                    <h2>Cardápio Digital</h2>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signin">Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Menu;