import React from 'react';
import footer from '../assets/footer-rectangle.png'

/**
 * Footer found on every page containing:
 * email list subscription, useful links, contact info
 */
function Footer() {
    return(
        <div id='footer'>

            <img src={footer} alt="Footer background"></img>
        </div>
    );
}


export default Footer;
