import { Link } from 'react-router-dom'
import welcomeImg1 from '../assets/home_page_images/welcome_img.png'
import overviewImg1 from '../assets/home_page_images/overview_img_1.png'
import overviewImg2 from '../assets/home_page_images/overview_img_2.png'
import overviewImg3 from '../assets/home_page_images/overview_img_3.png'
import overviewImg4 from '../assets/home_page_images/overview_img_4.png'
import resourceImg from '../assets/home_page_images/resources_img.png'
import chatPup1 from '../assets/home_page_images/chat_pup_1.png'
import chatPup2 from '../assets/home_page_images/chat_pup_2.png'
import chatPup3 from '../assets/home_page_images/chat_pup_3.png'
import instagram from '../assets/home_page_images/instagram.png'
import twitter from '../assets/home_page_images/twitter.png'
import facebook from '../assets/home_page_images/facebook.png'
import '../css/Home.css'

/**
 * Pupsupport home page
 */
function Home() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <div>
            <section>
                <div className="welcome-section">
                    <div className="welcome-content">
                        <h1>I am here to <span className="help">help</span></h1>
                        <p className="p-home">Student-led organization with a focus on providing mental health resources to colleges students creatively through Instagram</p>
                        <button className="home-button">
                            <Link to='/about'>About Us</Link>
                        </button>
                    </div>
                    <div className="img-links">
                        <img className="main-img" src={welcomeImg1} alt="Hi! I'm pup"/>
                        <div className="link-div">
                            <a href="https://twitter.com/pup_support?lang=en" target='_blank' alt='Twitter'><img className="twitter-img" src={twitter} alt="Twitter"/></a>
                            <a href="https://www.facebook.com/pupsupport/" target='_blank' alt='Facebook'><img className="facebook-img" src={facebook} alt="Twitter"/></a>
                            <a href="https://www.instagram.com/pupsupport/?hl=en" target='_blank' alt='Instagram'><img  className="instagram-img"src={instagram} alt="Twitter"/></a>
                        </div>
                    </div>
                </div>
                <div className="disclaimer-home">
                    <p >Disclaimer: We are not licensed professionals. All of the information we share and create is collected from existing resources, academic papers, and resources provided by professionals.</p>
                </div>
            </section>
            <section>
                <div className="pup-story">
                    <h2>PupSupport Story</h2>
                    <p className="p-home">Pup is a non-binary husky pup who is here to share their stories with college students and bring awareness to the types of struggles we all face.</p>
                </div>
            </section>
            <section id="overview-section">
                <div className="overview-container">
                    <div className="overview-item">
                        <img className="view-img-1" src={overviewImg1} alt="Mental health pup"/>
                        <div className="sub-item">
                            <h2 className="over-head">Mental Health</h2>
                            <p className="p-home">PupSupport strives to normalize and bring awareness to the mental health issues college students face as well as support students as they go through their journey and struggles as a college student.</p>
                        </div>
                    </div>
                    <div className="overview-item">
                        <div className="sub-item">
                            <h2 className="over-head">College Living</h2>
                            <p className="p-home">In order to best serve our community, we are focused on sharing the experiences of life as a college student and provide additional resources that may benefit students specifically.</p>
                        </div>
                        <img className="view-img-2" src={overviewImg2} alt="College living pup"/>
                    </div>
                    <div className="overview-item">
                        <img className="view-img-1" src={overviewImg3} alt="Education & resources pup"/>
                        <div className="sub-item">
                            <h2 className="over-head">Education & Resources</h2>
                            <p className="p-home">In addition to our social media presence, we provide a variety of resources and opportunities to further their education on mental health.</p>
                        </div>
                    </div>
                    <div className="overview-item">
                        <div className="sub-item">
                            <h2 className="over-head">Creativity</h2>
                            <p className="p-home">Pup Support utilizes art and social media in order to creatively advocate for and share student experiences.</p>
                        </div>
                        <img className="view-img-2" src={overviewImg4} alt="Creativity pup"/>
                    </div>
                </div>
            </section>
            <section className="resources">
                <div className="resource-contents">
                    <h2>Resources</h2>
                    <p className="p-home">Find support and resources to improve your mental health and well-being.</p>
                    <button className="home-rec-button">
                        <Link to='/resources'>Check Out</Link>
                    </button>
                </div>
                <div className="img-div">
                    <img className="resource-img" src={resourceImg} alt="Heart mirror pup"/>
                </div>
            </section>
            <section className="community">
                <div className="comm-head">
                    <h2>Community</h2>
                </div>
                <div className="community-con">
                    <div className="community-container">
                        <div className="community-sub-div">
                            <img src={chatPup1} alt="Quote pup"/>
                            <p>@Ashley Cabatic</p>
                        </div>
                        <div className="community-sub-div-centered1">
                            <div>
                                <p className="chat-p">Pup always brings brightness to my Instagram feed and reminds me to take care of myself and value my well-being.</p>
                            </div>
                        </div>
                    </div>
                    <div className="community-container">
                        <div className="community-sub-div-centered2">
                            <div>
                                <p className="chat-p">I appreciate the super cute posts and encouraging affirmations! They are helpful , especially right now, please keep it up!</p>
                            </div>
                        </div>
                        <div className="community-sub-div">
                            <img src={chatPup2} alt="Quote pup"/>
                            <p>@niastewart75</p>
                        </div>
                    </div>
                    <div className="community-container">
                        <div className="community-sub-div">
                            <img src={chatPup3} alt="Quote pup"/>
                            <p>@sh.ma_x</p>
                        </div>
                        <div className="community-sub-div-centered3">
                            <div>
                                <p className="chat-p">I really love your Instagram page! Whoever is illustrating it is super talented, and the posts always make me happy, reminding me that I’m not alone in this!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;