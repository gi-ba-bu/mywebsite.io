import React from 'react';
import { NavLink } from 'react-router-dom';

//import { BackButton } from '../../components';
import './style.css'

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/" className="navlink" activeClassName="current">About</NavLink>
            {/* <NavLink to="/about" activeClassName="current">About</NavLink> */}
            <NavLink to="/projects" className="navlink" activeClassName="current">Projects +</NavLink>
            {/* <BackButton /> */}
        </nav>
    );
}

export default Header;
