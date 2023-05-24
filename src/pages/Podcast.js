import { Link } from 'react-router-dom';

import '../css/podcastStyle.css';
import dancing from '../assets/podcast_images/PupDancing.png';
import singing from '../assets/podcast_images/Vector 2.png';
import rect from '../assets/podcast_images/Rectangle.png';
import duration from '../assets/podcast_images/duration.png';
import arrow from '../assets/arrow.png';

/**
 * Pupsupport resources page for youtube videos
 */
function Podcast() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <div>
            <main>
			<a href="back" className='back'><Link to='/Resources'><img src={arrow} alt="arrow" />Back</Link></a>
			<section className='head'>
				<section className='topsec'>
					<h2>Podcast</h2>
					<p className='text'>Real-talk on mental Health: Tune in for expert tips and personal experience on improving well-being and self-care.</p>
				</section>
				<img src={dancing} class="dancing" alt="pupdancing" />
			</section>
			<section className='recent'>
				<section className='mid'>
					<section className='pic'>
						<h2>Recent Releases</h2>
						<img src={singing} class="singing" alt="Singingpup" />
					</section>
					<section className='name'>
						<h3>Podcast Name</h3>
						<p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nihil iste maxime a sed molestias deleniti beatae rerum dolores dolorem?</p>
						<iframe className='podcastmain' src="https://open.spotify.com/embed/track/3T03rPwlL8NVk1yIaxeD8U?utm_source=generator"></iframe>
					</section>
				</section>
			</section>
			<section className='bottom'>
				<section className='popular'>
					<h2 className='text2'>Popular Episodes</h2>
				</section>
				<section className='bottom_border'>
					<img src={rect} className="rect" alt="rect" />
					<section className='last'>
						<p>date</p>
						<h3 className='pop_eps'>Podcast Name</h3>
						<p className='pop_eps'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsam!</p>
						<Link to='/PodcastDetails'><button className='buttonpod'>Details</button></Link>
					</section>
				</section>
			</section>
		</main>
        </div>
    );
}

export default Podcast;