import { Link } from 'react-router-dom';
import '../css/styleVideo.css';
import img1 from '../assets/videoImg1.png';

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
				<sectio className='topsec'>
					<a href="back"><Link to='/Resources'>Back</Link></a>
					<p>PupSupport Youtube</p>
					<a href="https://www.youtube.com/@pupsupport6799" title='youtube link' target={"_blank"}><button>Subscribe to Pup's Channel</button></a>
				</sectio>
				<img src={img1} className="symbolImg" alt="material-symbols_tv-outline-rounded" />
			</section>
			<section>
				<h1>Educational Videos</h1>
				<p>Most recent</p>
				<div className="grid-container-element">
					<div className="grid-child-element">
						<iframe width="420" height="315" title="video1" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"></iframe>
						<p>
							Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam numquam ex laboriosam dolorum id! Iste cumque hic at autem voluptate, placeat non quasi ipsum
							adipisci veniam. Aliquid architecto consectetur fugit maiores cumque dolore veniam perspiciatis eius, quibusdam commodi unde omnis dolorum? Obcaecati eos nisi repellendus
							quas commodi minus ad fugit!
						</p>
					</div>
					<div className="grid-child-element">
						<iframe width="420" height="315" title="video2" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"></iframe>
						<p>
							Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam numquam ex laboriosam dolorum id! Iste cumque hic at autem voluptate, placeat non quasi ipsum
							adipisci veniam. Aliquid architecto consectetur fugit maiores cumque dolore veniam perspiciatis eius, quibusdam commodi unde omnis dolorum? Obcaecati eos nisi repellendus
							quas commodi minus ad fugit!
						</p>
					</div>
					<div className="grid-child-element">
						<iframe width="420" height="315" title="video3" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"></iframe>
						<p>
							Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam numquam ex laboriosam dolorum id! Iste cumque hic at autem voluptate, placeat non quasi ipsum
							adipisci veniam. Aliquid architecto consectetur fugit maiores cumque dolore veniam perspiciatis eius, quibusdam commodi unde omnis dolorum? Obcaecati eos nisi repellendus
							quas commodi minus ad fugit!
						</p>
					</div>
				</div>
			</section>
		</main>
        </div>
    );
}

export default Videos;