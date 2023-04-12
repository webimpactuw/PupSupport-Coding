import '../css/styleVideo.css';
import materialsymbolstvoutlinerounded from "../assets/material-symbols_tv-outline-rounded.png";
/**
 * Pupsupport resources page for youtube videos
 */

function Videos() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <div>
            {/* Arvin, replace this with your videos code */}
            <main>
			<section class="top-color">
				<a href="back">Back</a>
				<p>PupSupport Youtube</p>
				<a href="https://www.youtube.com/@pupsupport6799" title='youtube link'><button>Subscribe to Pup's Channel</button></a>
				<img src="materialsymbolstvoutlinerounded" class="symbolImg" alt="material-symbols_tv-outline-rounded" />
			</section>
			<section>
				<h1>Educational Videos</h1>
				<p>Most recent</p>
				<div class="grid-container-element">
					<div class="grid-child-element">
						<iframe width="420" height="315" title="video1" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"></iframe>
						<p>
							Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam numquam ex laboriosam dolorum id! Iste cumque hic at autem voluptate, placeat non quasi ipsum
							adipisci veniam. Aliquid architecto consectetur fugit maiores cumque dolore veniam perspiciatis eius, quibusdam commodi unde omnis dolorum? Obcaecati eos nisi repellendus
							quas commodi minus ad fugit!
						</p>
					</div>
					<div class="grid-child-element">
						<iframe width="420" height="315" title="video2" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"></iframe>
						<p>
							Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam numquam ex laboriosam dolorum id! Iste cumque hic at autem voluptate, placeat non quasi ipsum
							adipisci veniam. Aliquid architecto consectetur fugit maiores cumque dolore veniam perspiciatis eius, quibusdam commodi unde omnis dolorum? Obcaecati eos nisi repellendus
							quas commodi minus ad fugit!
						</p>
					</div>
					<div class="grid-child-element">
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