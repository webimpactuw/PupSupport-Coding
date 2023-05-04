import React from 'react';
import { Link } from 'react-router-dom';
import pup_home from '../assets/pup_home.png'; 
import pup_home2 from '../assets/pup_home.png'; 
import header from '../assets/header.png';
import '../css/App.css';
import '../css/HeaderFooter.css';

/**
 * Header navigation bar found on every page containing links to: 
 * About.js, Resources.js, Home.js, Store.js, Donation.js
 */
function Header() {
    return(
        <div id="header">
            {/* <img id='header-img' src={header}></img> */}
            <section id='nav'>
                <Link to='/about'>About</Link>
                <Link to='/resources'>Resources</Link>
                <section id='home-button'>
                    <Link to='/'><img src={pup_home2} alt="Pup home icon"></img></Link>
                </section>
                <Link to='/merch'>Merch</Link>
                <Link to='/donation'>Donation</Link>
            </section>
        </div>
    );
}

export default Header;