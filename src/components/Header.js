import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pup_home from '../assets/pup-home.png'; 
import '../css/app.css';
import '../css/header-footer.css';

/**
 * Header navigation bar found on every page containing links to: 
 * About.js, Resources.js, Home.js, Store.js, Donation.js
 */
function Header() { 
    const [isAbtShown, setIsAbtShown] = useState(false);
    const [isResourcesShown, setIsResourcesShown] = useState(false);
    return(
        <div id="header">
            <section id='nav'>

                <div onMouseEnter={() => setIsAbtShown(true)}
                    onMouseLeave={() => setIsAbtShown(false)}>
                    <Link to='/about'>
                            About Us
                    </Link>
                    {isAbtShown && (
                        <div className='about-dropdown'>
                            <Link to='/our-team'>Our Team</Link>
                        </div>
                    )}
                </div>
                
                <div onMouseEnter={() => setIsResourcesShown(true)}
                    onMouseLeave={() => setIsResourcesShown(false)}>
                    <div>
                        <Link to='/resources'>Resources</Link>
                    </div>
                    <div>
                        {isResourcesShown && (
                            <div className='resources-dropdown'>
                                <Link to='/ResourcesMenu'>Resource Website</Link>
                                <Link to='/podcast'>Podcasts</Link>
                                <Link to='/videos'>YouTube Videos</Link>
                            </div>
                        )}
                    </div>
                    
                </div>
                <section id='home-button-2'></section>
                <section id='home-button'>
                    <Link to='/'><img src={pup_home} alt="Pup home icon"></img></Link>
                </section>
                <Link to='/merch'>Merch</Link>
                <Link to='/donation'>Donation</Link>
            </section>
        </div>
    );
}

export default Header;