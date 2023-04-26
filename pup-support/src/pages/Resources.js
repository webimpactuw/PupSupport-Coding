import pup1 from '../assets/pup_tilting.png'
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
            <p>This is the resources page</p>

            <section className="left-main">
                <img src = {pup1} alt = "Pup Tilting Pic"/>
                <h2>Resources</h2>

                <div className="disclaimer">
                    <p>Diclaimer: We are not licensed or trained professionals. All of the information we share and create
                    is collected from existing resources, academic papers, and resources provided by professionals.</p>
                </div>
            </section>

            {/* links to other resource pages */}
            <section className="resources-links">
                <ul>
                    <li><Link to='/mental-health-resource'>Resources Websites</Link></li>
                    <li><Link to='/videos'>PupSupport YouTube</Link></li>
                    <li><Link to='/podcast'>PupSupport Podcast</Link></li>
                </ul>
            </section>
        </div>
    );
}

export default Resources;