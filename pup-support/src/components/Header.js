import React from 'react';
import puphome from '../assets/puphome.png'; 
import { Link } from 'react-router-dom';
import '../css/header.css'

/**
 * Header navigation bar found on every page containing links to: 
 * About.js, Resources.js, Home.js, Store.js, Donation.js
 */
function Header() {
    return(
        <div>
            <section id='nav'>
                <Link className="nav-item" to='/about'>About</Link>
                <Link className="nav-item" to='/resources'>Resources</Link>
                <Link to='/'><img src={puphome} alt="Pup home icon"></img></Link>
                <Link to='/merch'>Merch</Link>
                <Link to='/donation'>Donation</Link>
            </section>
        </div>
    );
}

export default Header;