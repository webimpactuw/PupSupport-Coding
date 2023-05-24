import React, { useState } from 'react';
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
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsDropdownOpen(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsDropdownOpen(false);
    // };


    return(
        <div id="header">
            {/* <img id='header-img' src={header}></img> */}
            <section id='nav'>

                <Link to='/about'>About Us</Link>

                {/* <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button className="btn btn-secondary dropdown-toggle" type="button">
                        Dropdown button
                    </button>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    )}
                </div> */}

                <Link to='/resources'>Resources</Link>
                <section id='home-button-2'></section>
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