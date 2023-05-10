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
        
    )
    

    // HTML/React components here to render page
    // return (
    //     <div>
    //         <section class="title">
    //             <p>Depression</p>
    //             <p>Lorem .... </p>
    //         </section>

    //         <div class="card" style="width: 18rem;">
    //             <div class="item" onclick="this.querySelector('a').click(); return true;">
    //                 {/* <img class="card-img-top" src={dbsa} alt="card-img-top"></img> */}
    //             </div>
    //             <div class="card-body">
    //                 <h5 class="card-title">DBSA: Depression and Bipolar Support Alliance</h5>
    //             </div>
    //             <div class="buttons">
    //                 <p class="btn btn-primary">wellness workshops</p>
    //                 <p class="btn btn-primary">peer support groups</p>
    //                 <p class="btn btn-primary">24/7 chat support</p>
    //             </div>
    //             <div class="card-body">
    //                 <a href={dbsa} class="card-link">Card link</a>
    //             </div>
    //         </div>
        

    //         <div class="card" style="width: 18rem;">
    //             <div class="item" onclick="this.querySelector('a').click(); return true;">
    //                 {/* <img class="card-img-top" src={crisis} alt="card-img-top"></img> */}
    //             </div>
    //             <div class="card-body">
    //                 <h5 class="card-title">Crisis Text Line</h5>
    //             </div>
    //             <div class="buttons">
    //                 <p class="btn btn-primary">Talk to a real human anonymously</p>
    //                 <p class="btn btn-primary">Text-In with any concern</p>
    //                 <p class="btn btn-primary">Text "HOME" to 741741</p>
    //             </div>
    //             <div class="card-body">
    //                 <a href={crisis} class="card-link">Card Link</a>
    //             </div>
    //         </div>

    //         <div class="card" style="width: 18rem;">
    //             <div class="item" onclick="this.querySelector('a').click(); return true;">
    //                 {/* <img class="card-img-top" src={adaa} alt="card-img-top"></img> */}
    //             </div>
    //             <div class="card-body">
    //                 <h5 class="card-title">Anxiety and Depression Association of America</h5>
    //             </div>
    //             <div class="buttons">
    //                 <p class="btn btn-primary">Promotes prevention, treatment, and support</p>
    //                 <p class="btn btn-primary">A therapist directory</p>
    //             </div>
    //             <div class="card-body">
    //                 <a href={adaa} class="card-link">Card Link</a>
    //             </div>
    //         </div>



    //     </div>
    // );
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