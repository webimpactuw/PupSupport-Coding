import React from 'react';
import puphome from '../assets/puphome.png'; 
import { Link } from 'react-router-dom';
import '../css/App.css'

/**
 * Header navigation bar found on every page containing links to: 
 * About.js, Resources.js, Home.js, Store.js, Donation.js
 */
function Header() {
    return(
        <div>
            <section id='nav'>
                <Link to='/about'>About</Link>
                <Link to='/resources'>Resources</Link>
                <section id='home-button'>
                    <Link to='/'><img src={puphome} alt="Pup home icon"></img></Link>
                </section>
                <Link to='/merch'>Merch</Link>
                <Link to='/donation'>Donation</Link>
            </section>
        </div>
    );
}

export default Header;