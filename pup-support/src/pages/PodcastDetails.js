// import pupsupportStressed from '...png';
import { Link } from 'react-router-dom';
import thumbnail from '../assets/podcast_images/Rectangle.png';

import "../css/podcast_detail.css";

/**
 * Pupsupport home resource page 
 */
function PodcastDetails() {
    // Related functions here
    
    <Link to='/podcast'>Back</Link>
    // HTML/React components here to render page
    return (
        <div>
            {/* Section 1 */}
            <section className="top">
                <div className='container-top'>
                    <img className="thumbnail" src={thumbnail} alt="thumbnail" />
                    <div className="desc">
                        <h2>Podcast Name</h2> 
                        <p>With A & B</p>

                        {/* attach a playable audio file, idk how for now */}
                    </div>
                </div>

                
            </section>
            
            {/* Section 2 */}
            <section className='details'>
                <div className="container-details">
                    <div className='sub-item'>
                        <h3>Description</h3>
                        <p>Lorem ....</p>
                    </div>
                   <div className='sub-item'>
                        <h3>Script</h3>
                        <p>Lorem...</p>
                   </div>
                </div>
            </section>
        </div>
    );
}

export default PodcastDetails;