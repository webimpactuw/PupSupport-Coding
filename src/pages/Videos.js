import { Link } from 'react-router-dom';
import '../css/videos.css';
import img1 from '../assets/youtube/video.png';
import arrow from '../assets/arrow.png';

/**
 * Pupsupport resources page for youtube videos
 */
function Videos() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <div>
            <main>
			<section className="top-color">
			<a href="back" className='back'><Link to='/Resources'><img src={arrow} alt="arrow" />Back</Link></a>
			<section className='top-separate'>
			<section className='topsec'>
					<h1 className='title'>PupSupport Youtube</h1>
					<a className='title' href="https://www.youtube.com/@pupsupport6799" title='youtube link' target={"_blank"}><button className='buttonvid'>Subscribe to Pup's Channel</button></a>
				</section>
				<img src={img1} className="symbolImg" alt="material-symbols_tv-outline-rounded" />
			</section>
			</section>
			<section>
				<section className='botsec'>
					<h1>Educational Videos</h1>
					<p>Most recent</p>
				</section>
				<section className='bott'>
					<div className="grid-container-element">
						<div className="grid-child-element">
							<iframe width="420" height="315" title="video1" src="https://www.youtube.com/embed/cl_3AW-CIUM"></iframe>
							<p>
								Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam numquam ex laboriosam dolorum id! Iste cumque hic at autem voluptate, placeat non quasi ipsum
								adipisci veniam. Aliquid architecto consectetur fugit maiores cumque dolore veniam perspiciatis eius, quibusdam commodi unde omnis dolorum? Obcaecati eos nisi repellendus
								quas commodi minus ad fugit!
							</p>
						</div>
						<div className="grid-child-element">
							<iframe width="420" height="315" title="video2" src="https://www.youtube.com/embed/VrGQIefMo_0"></iframe>
							<p>
								Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam numquam ex laboriosam dolorum id! Iste cumque hic at autem voluptate, placeat non quasi ipsum
								adipisci veniam. Aliquid architecto consectetur fugit maiores cumque dolore veniam perspiciatis eius, quibusdam commodi unde omnis dolorum? Obcaecati eos nisi repellendus
								quas commodi minus ad fugit!
							</p>
						</div>
						<div className="grid-child-element">
							<iframe width="420" height="315" title="video3" src="https://www.youtube.com/embed/prs4f1b0LLs"></iframe>
							<p>
								Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam numquam ex laboriosam dolorum id! Iste cumque hic at autem voluptate, placeat non quasi ipsum
								adipisci veniam. Aliquid architecto consectetur fugit maiores cumque dolore veniam perspiciatis eius, quibusdam commodi unde omnis dolorum? Obcaecati eos nisi repellendus
								quas commodi minus ad fugit!
							</p>
						</div>
					</div>
				</section>
			</section>
		</main>
        </div>
    );
}

export default Videos;