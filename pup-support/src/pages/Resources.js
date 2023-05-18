import pup1 from '../assets/resources_images/resourcesPage_logo.png'
import forward from '../assets/resources_images/Forward.png'
import { Link } from 'react-router-dom';

import "../css/resources.css";
/**
 * Pupsupport home resource page 
 */
function Resources() {
    // Related functions here

    // HTML/React components here to render page
    return (

        <div className="resources-wrapper">
            <section className="left-main">
                <img className = "textBox" src = {pup1} alt='a Background Text Box'/>
                <div className="disclaimer">
                    Diclaimer: We are not licensed or trained professionals. All of the information we share and create
                    is collected from existing resources, academic papers, and resources provided by professionals.
                </div>
            </section>

            {/* links to other resource pages */}
            <section className="resources-links">
                
                <Link to='/mental-health-resource-depression'><button className='button-m'>Resources Websites <img className = "forward" src = {forward} alt='forward'/></button></Link>
                <Link to='/videos'><button className='button-m'>PupSupport YouTube <img className = "forward" src = {forward} alt='forward'/></button></Link>
                <Link to='/podcast'><button className='button-m'>PupSupport Podcast <img className = "forward" src = {forward} alt='forward'/></button></Link>

            </section>
        </div>
    );
}

export default Resources;