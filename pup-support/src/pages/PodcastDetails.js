// import pupsupportStressed from '...png';
import { Link } from 'react-router-dom';

import "../css/podcast_detail.css";

/**
 * Pupsupport home resource page 
 */
function PodcastDetails() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <div>
            {/* Section 1 */}
            <section className="top">
                <div className="container">
                    <h2>Podcast Name</h2>
                    <p>With A & B</p>

                    {/* attach a playable audio file, idk how for now */}

                    {/* <img src={pupsupportStressed} /> */}
                </div>
            </section>
            
            {/* Section 2 */}
            <section className='details'>
                <div className="container">
                    <h3>Description</h3>
                    <p>Lorem ....</p>

                    <h3>Script</h3>
                    <p>Lorem...</p>
                </div>
            </section>
        </div>
    );
}

export default PodcastDetails;