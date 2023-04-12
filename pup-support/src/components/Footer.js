import React from 'react';
import footer from '../assets/footer-rectangle.png'

/**
 * Footer found on every page containing:
 * email list subscription, useful links, contact info
 */
function Footer() {
    return(
        <div>
            <img src={footer} style={'width: 100%'} alt="Footer background"></img>
        </div>
    );
}


export default Footer;
