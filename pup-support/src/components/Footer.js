import React from 'react';
import footer_rectangle from '../assets/footer_rectangle.png';
import pup_home from '../assets/pup_home.png';
import copywrite from '../assets/copywrite.png'
import { Link } from 'react-router-dom';

/**
 * Footer found on every page containing:
 * email list subscription, useful links, contact info
 */
function Footer() {
    return(
        <div id='footer'>
            <img src={footer_rectangle} alt="Footer background"></img>

            <div>
                <div id="footer-l">
                    <img src={pup_home} id="footer-pup" alt="Footer pup image"></img>
                    <form>
                        <p>Email:</p>
                        <input type="text" name="email" id="email-input"></input>
                        {/* <input type="submit" id="email-sub-button">Subscribe Now</input> */}
                    </form> 
                </div>
                
                <div id="footer-r">
                    <div>
                        <p>Useful Links</p>
                        <p><Link to='/about'>About Us</Link></p>
                        <p><Link to='/resources'>Resources</Link></p>
                    </div>
                    
                    <div>
                        <p>Contact</p>
                        <p>spup.uw@gmail.com</p>
                        <p>pupsupport@uw.edu</p>
                        <a href="https://linktr.ee/pupsupport">https://linktr.ee/pupsupport</a>
                    </div>
                </div>

                <p id="disclaimer">If you are experiencing a crisis or have an emergency that needs immediate help, call 911.</p>
            </div>

            <section id="credits">
                <img src={copywrite} alt="copywrite icon"></img>
                <p>2023 PupSupport</p>
                <p>Made with <a href="https://dubvelopersuw.org">Dubvelopers</a></p>
            </section>
            
        </div>
    );
}


export default Footer;
