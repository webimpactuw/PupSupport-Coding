import first from '../assets/mentalHealthResources/do-something.png';
import second from '../assets/mentalHealthResources/generations-united.png';


import "../css/mental-health-resources.css";
/**
 * Pupsupport mental health resource home page 
 */
function MentalHealthResourceLoneliness() {
    // Related functions here
    return (

        <div className="mental-health-resource-card-links">

            <div className='mental-health-resource-top-container'>
                <div className='mental-health-resource-title'>
                    <div className='card-title'>Loneliness</div>
                    <div className='card-description'>Lorem ipsum dolor sit amet consectetur. Urna morbi fringilla mauris sed. Curabitur fringilla neque dictum ultrices blandit turpis eget.</div>
                    
                </div>
                <div className='card-box'></div>
            </div>


            <div className='mental-health-resource-bottom-container'>
                <Card 
                    href="https://www.dosomething.org/us"
                    thumbnailURL={first}
                    title="Do Something" 
                    tags={["abc", "def", "ghi"]}
                />
                <Card 
                    href="https://www.gu.org/"
                    thumbnailURL={second}
                    title="Generations United" 
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

export default MentalHealthResourceLoneliness;