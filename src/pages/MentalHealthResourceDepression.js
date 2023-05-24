import Header from '../components/Header';
import Footer from '../components/Footer';

 import first from '../assets/mental_health_websites/DBSA_ Depression_and_Bipolar_Support Alliance.png';
 import second from '../assets/mental_health_websites/Crisis_Text_Line.png';
 import third from '../assets/mental_health_websites/ADAA_Anxiety_And_Depression_Association_of_America.png';


import "../css/mentalHealth_resources.css";
/**
 * Pupsupport mental health resource home page 
 */
function MentalHealthResourceDepression() {
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
                    thumbnailURL={first}
                    title="DBSA: Depression and Bipolar Support Alliance" 
                    tags={["wellness workshops", "peer support groups", "24/7 chat support"]}
                />
                <Card 
                    href="https://www.dbsalliance.org"
                    thumbnailURL={second}
                    title="Crisis Text Line" 
                    tags={["Talk to a real human anonymously ", "Text-In with any concern", "Text \"HOME\" to 741741"]}
                />
                <Card 
                    href="https://www.dbsalliance.org"
                    thumbnailURL={third}
                    title="Anxiety and Depression Association of America" 
                    tags={["Promotes prevention, treatment, and support", "A therapist directory"]}
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

export default MentalHealthResourceDepression;