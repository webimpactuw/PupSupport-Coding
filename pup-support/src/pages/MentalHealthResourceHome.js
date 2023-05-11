import Header from '../components/Header';
import Footer from '../components/Footer';
// import dbsa from "https://www.dbsalliance.org";
// import crisis from "https://www.crisistextline.org";
// import adaa from "https://adaa.org" ;

import "../css/mentalHealth_home.css";
/**
 * Pupsupport mental health resource home page 
 */
function MentalHealthResourceHome() {
    // Related functions here
    return (

        <div className="mental-health-resource-card-links">

            <div className='mental-health-resource-top-container'>
                <div className='mental-health-resource-title'>
                    <div className='card-title'>Depression</div>
                    <div className='card-description'>Lorem ipsum dolor sit amet consectetur. Urna morbi fringilla mauris sed. Curabitur fringilla neque dictum ultrices blandit turpis eget.</div>
                    
                </div>
                <div className='card-box'></div>
            </div>


            <div className='mental-health-resource-bottom-container'>
                <Card 
                    href="https://www.dbsalliance.org"
                    thumbnailURL="https://placehold.co/310x175" 
                    title="DBSA: Depression and Bipolar Support Alliance" 
                    tags={["wellness workshops", "peer support groups", "24/7 chat support"]}
                />
                <Card 
                    href="https://www.dbsalliance.org"
                    thumbnailURL="https://placehold.co/310x175" 
                    title="DBSA: Depression and Bipolar Support Alliance" 
                    tags={["wellness workshops", "peer support groups", "24/7 chat support"]}
                />
                <Card 
                    href="https://www.dbsalliance.org"
                    thumbnailURL="https://placehold.co/310x175" 
                    title="DBSA: Depression and Bipolar Support Alliance" 
                    tags={["wellness workshops", "peer support groups", "24/7 chat support"]}
                />
            </div>

        </div>
        
    )
    
}

function Card(props) {
    const { href, thumbnailURL, title, tags } = props;

    return (
        <a className="resource-link-card" href={href} target="_blank" rel="noreferrer ">
            <img src={thumbnailURL} alt={title} className="resource-link-card-thumbnail" />
            <div className="resource-link-card-caption">
                <div className="resource-link-card-caption-title">
                    {title}
                </div>
                <div className="resource-link-card-caption-tags">
                    {tags.map(function (tag) {
                        return (
                            <div key={tag} className="resource-link-card-caption-tag">
                                {tag}
                            </div>
                        );
                    })}
                </div>
            </div>
        </a>
    )
}

export default MentalHealthResourceHome;