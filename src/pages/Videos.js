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
						<h1 className='title-vids'>PupSupport Youtube</h1>
						<a className='subsc-title' href="https://www.youtube.com/@pupsupport6799" title='youtube link' target={"_blank"}  ><button className='buttonvid'>Subscribe to Pup's Channel</button></a>
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
							<iframe width="400" height="280" title="video1" src="https://www.youtube.com/embed/cl_3AW-CIUM"></iframe>
							<p className='desc-vids'> 
							Description: Lorem ipsum, dolor sit amet consectetur. Aliquam enim proin morbi eleifend nibh nullam. Lorem ipsum dolor sit amet consectetur
							</p>
						</div>
						<div className="grid-child-element">
							<iframe width="400" height="280" title="video2" src="https://www.youtube.com/embed/VrGQIefMo_0"></iframe>
							<p className='desc-vids'>
							Description: Lorem ipsum, dolor sit amet consectetur. Aliquam enim proin morbi eleifend nibh nullam. Lorem ipsum dolor sit amet consectetur
							</p>
						</div>
						<div className="grid-child-element">
							<iframe width="400" height="280s" title="video3" src="https://www.youtube.com/embed/prs4f1b0LLs"></iframe>
							<p className='desc-vids'>
							Description: Lorem ipsum, dolor sit amet consectetur. Aliquam enim proin morbi eleifend nibh nullam. Lorem ipsum dolor sit amet consectetur
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