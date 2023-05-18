import { Link } from 'react-router-dom';
import thumbnail from '../assets/podcast_images/Rectangle.png';

import "../css/podcast_detail.css";
import arrow from '../assets/arrow.png';

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
            <a href="back" className='back'><Link to='/Resources'><img src={arrow} alt="arrow" />Back</Link></a>
                <div className='container-top'>
                    <img className="thumbnail" src={thumbnail} alt="thumbnail" />
                    <div className="desc">
                        <h2 className='podcast-details-podcast-title'>Podcast Name</h2> 
                        <p>With A & B</p>
                        <iframe className='podcast' src="https://open.spotify.com/embed/track/3T03rPwlL8NVk1yIaxeD8U?utm_source=generator"></iframe>

                        {/* attach a playable audio file, idk how for now */}
                    </div>
                </div>

                
            </section>
            
            {/* Section 2 */}
            <section className='details'>
                <div className="container-details">
                    <div className='sub-item'>
                        <h3 className='podcast-details-title'>Description</h3>
                        <p className='podcast-details-p'>Lorem ipsum dolor sit amet consectetur. Sagittis dictum mauris nec euismod. 
                            Nisi pharetra nulla ipsum enim vel. Dictum nunc tempor odio fames nunc. </p>
                    </div>
                   <div className='sub-item'>
                        <h3 className='podcast-details-title'>Script</h3>
                        <p className='podcast-details-p'>Lorem ipsum dolor sit amet consectetur. Sagittis dictum mauris nec euismod. 
                            Nisi pharetra nulla ipsum enim vel. Dictum nunc tempor odio fames nunc. 
                            Vel aliquam etiam molestie vel at diam. 
                            Et viverra gravida aenean tincidunt morbi posuere pharetra morbi nisi. 
                            Justo eu sed nec mi duis. Vel sed blandit lectus turpis arcu. 
                            Morbi scelerisque egestas sed eu. Proin tempor tempor sapien facilisis. 
                            Sapien feugiat nunc elementum vel egestas porttitor elit integer. 
                            Est gravida neque diam nibh interdum scelerisque. Quisque nulla rhoncus odio ultrices habitant sapien a sem et.</p>
                        <p className='podcast-details-next-p'>Aliquam vulputate mollis in nisi. Odio aliquam in vehicula urna magna malesuada. 
                            Malesuada convallis ipsum diam odio quam vulputate. Proin ac quisque nisl quis sapien ullamcorper pharetra. 
                            Magna praesent eu cursus varius vitae morbi sit nulla habitant. Nisi nunc leo id lacus iaculis. 
                            Egestas nec magnis elit sed sed. Sodales tempus turpis orci quam urna nulla vestibulum diam tincidunt. 
                            Nisl urna pharetra varius integer eu diam iaculis. Tincidunt nullam quis gravida iaculis metus morbi proin id. 
                            Consectetur purus viverra tristique amet.</p>
                   </div>
                </div>
            </section>
        </div>
    );
}

export default PodcastDetails;