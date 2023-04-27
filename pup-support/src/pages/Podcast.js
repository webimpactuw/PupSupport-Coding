import { Link } from 'react-router-dom';

import '../css/podcastStyle.css';
import dancing from '../assets/podcast_images/PupDancing.png';
import singing from '../assets/podcast_images/Singingpup.png';
import play from '../assets/podcast_images/play.png';
import rect from '../assets/podcast_images/Rectangle.png';

/**
 * Pupsupport resources page for youtube videos
 */
function Podcast() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <div>
            <main>
			<section>
				<a href="back" className='back'><Link to='/Resources'>Back</Link></a>
				<h2>Podcast</h2>
				<p>Real-talk on mental Health: Tune in for expert tips and personal experience on improving well-being and self-care.</p>
				<img src={dancing} class="dancing" alt="pupdancing" />
			</section>
			<section>
				<h2>Recent Releases</h2>
				<img src={singing} class="singing" alt="Singingpup" />
				<h3>Podcast Name</h3>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nihil iste maxime a sed molestias deleniti beatae rerum dolores dolorem?</p>
				<img src={play} class="play" alt="play" />
				<audio controls>
				  <source src="" type="audio/mpeg"></source>
				</audio>
				<p>More Podcasts</p>
			</section>
			<section>
                <h2>Popular Episodes</h2>
                <img src={rect} class="rect" alt="rect" />
                <h3 className='pop_eps'>Podcast Name</h3>
                <p className='pop_eps'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsam!</p>
                <button><Link to='/PodcastDetails'>Duration</Link></button>
			</section>
		</main>
        </div>
    );
}

export default Podcast;