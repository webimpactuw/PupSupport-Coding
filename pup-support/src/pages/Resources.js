import pup1 from '../assets/resources_images/resourcesPage_logo.png'
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
                </div>
                

                <div className="disclaimer">
                    <p>Diclaimer: We are not licensed or trained professionals. All of the information we share and create
                    is collected from existing resources, academic papers, and resources provided by professionals.</p>
                </div>
            </section>

            {/* links to other resource pages */}
            <section className="resources-links">
                
                <Link to='/mental-health-resource'><button className='button-m'>Resources Websites</button></Link>
                <Link to='/videos'><button className='button-m'>PupSupport YouTube</button></Link>
                <Link to='/podcast'><button className='button-m'>PupSupport Podcast</button></Link>

            </section>
        </div>
    );
}

export default Resources;