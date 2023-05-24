import anxiety from '../assets/resources_menu_images/RM_anxiety.png';
import cardBackgroundDown1 from '../assets/resources_menu_images/RM_cardbackground__1_down_g.png';
import cardBackgroundUp1 from '../assets/resources_menu_images/RM_cardbackground__1_up_g.png';
import cardBackgroundDown2 from '../assets/resources_menu_images/RM_cardbackground_2_down.png';
import cardBackgroundUp2 from '../assets/resources_menu_images/RM_cardbackground_2_up.png';
import depression from '../assets/resources_menu_images/RM_depression.png';
import diversity from '../assets/resources_menu_images/RM_diversity.png';
import headerBackground from '../assets/resources_menu_images/RM_header_background.png';
import header from '../assets/resources_menu_images/RM_header.png';
import loneliness from '../assets/resources_menu_images/RM_loneliness.PNG';
import presentations from '../assets/resources_menu_images/RM_presentations.png';
import selfCare from '../assets/resources_menu_images/RM_selfcare.png';
import suicide from '../assets/resources_menu_images/RM_suicide.png';
import therapy from '../assets/resources_menu_images/RM_therapy.png';
import thirdParty from '../assets/resources_menu_images/RM_thirdparty.png';
import UWResources from '../assets/resources_menu_images/RM_uwresources.png';
import workshops from '../assets/resources_menu_images/RM_workshops.png';
import { Link } from 'react-router-dom';

import "../css/ResourcesMenu.css";
/**
 * Pupsupport home page
 */
function ResourcesMenu() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <div>
            <body>
                <header>
                <section id="header_RM">
                    <div id="headerContainer_RM">
                    <div>
                        <a className="back" href="https://google.com"> Back </a>
                        <h1 id="MHRheader">Mental Health Resource Links</h1>
                        <p id="headerDescription">
                        Lorem ipsum dolor sit amet consectetur. Urna morbi fringilla
                        mauris sed. Curabitur fringilla neque dictum ultrices blandit
                        turpis eget.
                        </p>
                    </div>
                    <div id="headerIMGcontainer">
                        <img id="headerIMG" src={header} alt="Dubs" />
                    </div>

                    </div>
                </section>
                </header>
                <main>
                <section id="MHR">
                    <h2>Mental Health Resources</h2>
                    <div className="flexContainer">
                    <div className="align">
                        <div className="cardContainer1">
                        <Link to='/mental-health-resource-depression'>
                            <div className="hoverContainer">
                            <p className="cardTitle">Depression</p>
                            <img
                                className="firstLayer"
                                id="RM_depression_1"
                                src={depression}
                                alt="Dubs"
                            />
                            <img
                                className="secondLayer"
                                id="RM_depression_2"
                                src={cardBackgroundUp1}
                                alt="background"
                            />
                            <div className="thirdContainer">
                                <img
                                className="thirdLayer"
                                id="RM_depression_3"
                                src={cardBackgroundUp2}
                                alt="background"
                                />
                            </div>
                            </div>
                        </Link>
                        </div>
                        <div className="cardContainer2">
                        <a className="cardLink" href="https://google.com">
                            <div className="hoverContainerDown">
                            <p className="cardTitleDown">Suicide & Self Harm</p>
                            <img
                                className="firstLayer"
                                id="RM_suicide_1"
                                src={suicide}
                                alt="Dubs"
                            />
                            <img
                                className="secondLayer"
                                id="RM_suicide_2"
                                src={cardBackgroundDown1}
                                alt="background"
                            />
                            <div className="thirdContainer">
                                <img
                                className="thirdLayer"
                                id="RM_suicide_3"
                                src={cardBackgroundDown2}
                                alt="background"
                                />
                            </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="align">
                        <div className="cardContainer3">
                        <Link to='/mental-health-resource-loneliness'>
                            <div className="hoverContainer">
                            <p className="cardTitle">Loneliness</p>
                            <img
                                className="firstLayer"
                                id="RM_loneliness_1"
                                src={loneliness}
                                alt="Dubs"
                            />
                            <img
                                className="secondLayer"
                                id="RM_loneliness_2"
                                src={cardBackgroundUp1}
                                alt="background"
                            />
                            <div className="thirdContainer">
                                <img
                                className="thirdLayer"
                                id="RM_loneliness_3"
                                src={cardBackgroundUp2}
                                alt="background"
                                />
                            </div>
                            </div>
                        </Link>
                        </div>
                        <div className="cardContainer4">
                        <Link to='/mental-health-resource-therapy'>
                            <div className="hoverContainerDown">
                            <p className="cardTitleDown">Therapy</p>
                            <img
                                className="firstLayer"
                                id="RM_therapy_1"
                                src={therapy}
                                alt="Dubs"
                            />
                            <img
                                className="secondLayer"
                                id="RM_therapy_2"
                                src={cardBackgroundDown1}
                                alt="background"
                            />
                            <div className="thirdContainer">
                                <img
                                className="thirdLayer"
                                id="RM_therapy_3"
                                src={cardBackgroundDown2}
                                alt="background"
                                />
                            </div>
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="align">
                        <div className="cardContainer5">
                        <a className="cardLink" href="https://google.com">
                            <div className="hoverContainer">
                            <p className="cardTitle">Anxiety</p>
                            <img
                                className="firstLayer"
                                id="RM_anxiety_1"
                                src={anxiety}
                                alt="Dubs"
                            />
                            <img
                                className="secondLayer"
                                id="RM_anxiety_2"
                                src={cardBackgroundUp1}
                                alt="background"
                            />
                            <div className="thirdContainer">
                                <img
                                className="thirdLayer"
                                id="RM_anxiety_3"
                                src={cardBackgroundUp2}
                                alt="background"
                                />
                            </div>
                            </div>
                        </a>
                        </div>
                        <div className="cardContainer6">
                        <a className="cardLink" href="https://google.com">
                            <div className="hoverContainerDown">
                            <p className="cardTitleDown">Self-Care</p>
                            <img
                                className="firstLayer"
                                id="RM_selfcare_1"
                                src={selfCare}
                                alt="Dubs"
                            />
                            <img
                                className="secondLayer"
                                id="RM_selfcare_2"
                                src={cardBackgroundDown1}
                                alt="background"
                            />
                            <div className="thirdContainer">
                                <img
                                className="thirdLayer"
                                id="RM_selfcare_3"
                                src={cardBackgroundDown2}
                                alt="background"
                                />
                            </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    </div>
                </section>
                <section id="AR">
                    <h2>Additional Resources</h2>
                    <div className="flexContainer">
                    <div className="align">
                        <div className="cardContainer1">
                        <a className="cardLink" href="https://google.com">
                            <div className="hoverContainer">
                            <p className="cardTitle">Diversity</p>
                            <img
                                className="firstLayer"
                                id="RM_diversity_1"
                                src={diversity}
                                alt="Dubs"
                            />
                            <img
                                className="secondLayer"
                                id="RM_diversity_2"
                                src={cardBackgroundUp1}
                                alt="background"
                            />
                            <div className="thirdContainer">
                                <img
                                className="thirdLayer"
                                id="RM_diversity_3"
                                src={cardBackgroundUp2}
                                alt="background"
                                />
                            </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="align">
                        <div className="cardContainer2">
                        <a className="cardLink" href="https://google.com">
                            <div className="hoverContainer">
                            <p className="cardTitle">UW Resources</p>
                            <img
                                className="firstLayer"
                                id="RM_uwresources_1"
                                src={UWResources}
                                alt="Dubs"
                            />
                            <img
                                className="secondLayer"
                                id="RM_uwresources_2"
                                src={cardBackgroundUp1}
                                alt="background"
                            />
                            <div className="thirdContainer">
                                <img
                                className="thirdLayer"
                                id="RM_uwresources_3"
                                src={cardBackgroundUp2}
                                alt="background"
                                />
                            </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="align">
                        <div className="cardContainer3">
                        <a className="cardLink" href="https://google.com">
                            <div className="hoverContainer">
                            <p className="cardTitle">Third Party</p>
                            <img
                                className="firstLayer"
                                id="RM_thirdparty_1"
                                src={thirdParty}
                                alt="Dubs"
                            />
                            <img
                                className="secondLayer"
                                id="RM_thirdparty_2"
                                src={cardBackgroundUp1}
                                alt="background"
                            />
                            <div className="thirdContainer">
                                <img
                                className="thirdLayer"
                                id="RM_thirdparty_3"
                                src={cardBackgroundUp2}
                                alt="background"
                                />
                            </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    </div>
                </section>
                <section id="OR">
                    <h2>Our Resources</h2>
                    <div className="flexContainer">
                    <div className="align">
                        <div className="cardContainer1">
                        <a className="cardLink" href="https://google.com">
                            <div className="hoverContainer">
                            <p className="cardTitle">Workshops & Events</p>
                            <img
                                className="firstLayer"
                                id="RM_workshops_1"
                                src={workshops}
                                alt="Dubs"
                            />
                            <img
                                className="secondLayer"
                                id="RM_workshops_2"
                                src={cardBackgroundUp1}
                                alt="background"
                            />
                            <div className="thirdContainer">
                                <img
                                className="thirdLayer"
                                id="RM_workshops_3"
                                src={cardBackgroundUp2}
                                alt="background"
                                />
                            </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="align">
                        <div className="cardContainer2">
                        <a className="cardLink" href="https://google.com">
                            <div className="hoverContainer">
                            <p className="cardTitle">Presentations</p>
                            <img
                                className="firstLayer"
                                id="RM_presentations_1"
                                src={presentations}
                                alt="Dubs"
                            />
                            <img
                                className="secondLayer"
                                id="RM_presentations_2"
                                src={cardBackgroundUp1}
                                alt="background"
                            />
                            <div className="thirdContainer">
                                <img
                                className="thirdLayer"
                                id="RM_presentations_3"
                                src={cardBackgroundUp2}
                                alt="background"
                                />
                            </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    </div>
                </section>
                </main>
            </body>`
        </div>
    );
}

export default ResourcesMenu;
