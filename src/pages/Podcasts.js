import { Link } from 'react-router-dom';
import '../css/podcasts.css';
import dancing from '../assets/podcasts/pup-dancing.png';
import singing from '../assets/podcasts/pup-singing.png';
import overwhelmed from '../assets/podcasts/pup-overwhelmed.png';
import arrow from '../assets/arrow.png';

/**
 * Pupsupport resources page for podcasts
 */
function Podcasts() {

    return (
        <div>
            <main>
			<a href="back" className='back'><Link to='/Resources'><img src={arrow} alt="arrow" />Back</Link></a>
			<section className='head'>
				<section className='topsec'>
					<h2 classname='top-title'>Podcast</h2>
					<p className='top-text'>Real-talk on mental Health: Tune in for expert tips and personal experience on improving well-being and self-care.</p>
				</section>
				<img src={dancing} class="dancing" alt="Dancing pup" />
			</section>
			<section className='recent'>
				<section className='mid'>
					<section className='pic'>
						<h2>Recent Releases</h2>
						<img src={singing} class="singing" alt="Singing pup" />
					</section>
					<section className='name'>
						<h3>Podcast Name</h3>
						<p className='name-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nihil iste maxime a sed molestias deleniti beatae rerum dolores dolorem?</p>
						<iframe className='podcastmain' src="https://open.spotify.com/embed/track/3T03rPwlL8NVk1yIaxeD8U?utm_source=generator"></iframe>
					</section>
				</section>
			</section>
			<section className='bottom'>
				<section className='popular'>
					<h2 className='text2'>Popular Episodes</h2>
				</section>
				<section className='bottom_border'>
					<img src={overwhelmed} className="overwhelmed" alt="Overwhelemed pup" />
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

export default Podcasts;