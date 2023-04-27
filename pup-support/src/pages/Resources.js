import pup1 from '../assets/resources_images/intro_textbox.png'
import { Link } from 'react-router-dom';

import "../css/resources.css";
/**
 * Pupsupport home resource page 
 */
function Resources() {
    // Related functions here

    // HTML/React components here to render page
    return (

        <div>
            <section className="left-main">
                
                <div className='title-container'>
                    <img className = "textBox" src = {pup1} alt='a Background Text Box'/>
                    <h2 className='title'>Resources</h2>
                </div>
                

                <div className="disclaimer">
                    <p>Diclaimer: We are not licensed or trained professionals. All of the information we share and create
                    is collected from existing resources, academic papers, and resources provided by professionals.</p>
                </div>
            </section>

            {/* links to other resource pages */}
            <section className="resources-links">
                
                <button className='button-m'><Link to='/mental-health-resource'>Resources Websites</Link></button>
                <button className='button-m'><Link to='/videos'>PupSupport YouTube</Link></button>
                <button className='button-m'><Link to='/podcast'>PupSupport Podcast</Link></button>

            </section>
        </div>
    );
}

export default Resources;