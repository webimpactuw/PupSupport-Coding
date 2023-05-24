import Header from '../components/Header';
import Footer from '../components/Footer';

 import first from '../assets/mental_health_websites/Mental_Health_America.png';
 import second from '../assets/mental_health_websites/Healthline_Services_for_All_Budgets.png';
 import third from '../assets/mental_health_websites/National_Alliance_on_Mental_Ilness.png';

import "../css/mentalHealth_resources.css";
/**
 * Pupsupport mental health resource home page 
 */
function MentalHealthResourceTherapy() {
    // Related functions here
    return (

        <div className="mental-health-resource-card-links">

            <div className='mental-health-resource-top-container'>
                <div className='mental-health-resource-title'>
                    <div className='card-title'>Therapy</div>
                    <div className='card-description'>Lorem ipsum dolor sit amet consectetur. Urna morbi fringilla mauris sed. Curabitur fringilla neque dictum ultrices blandit turpis eget.</div>
                    
                </div>
                <div className='card-box'></div>
            </div>


            <div className='mental-health-resource-bottom-container'>
                <Card 
                    href="https://www.mhanational.org/finding-therapy"
                    thumbnailURL={first}
                    title="Mental Health America" 
                    tags={["abc", "def", "ghi"]}
                />
                <Card 
                    href="https://8d269cf6-5339-4378-a18e-fe6c3b257865.filesusr.com/ugd/bd5fdd_4255ed750bc1415aacf133216dcad268.pdf"
                    thumbnailURL={second}
                    title="Healthline: Services for All Budgets!" 
                    tags={["abc", "def", "ghi"]}
                />

                <Card 
                    href="https://www.nami.org/Home"
                    thumbnailURL={third}
                    title="National Alliance on Mental Illness" 
                    tags={["abc", "def", "ghi"]}
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

export default MentalHealthResourceTherapy;