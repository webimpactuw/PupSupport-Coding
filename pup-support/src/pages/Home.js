
import welcomeImg1 from '../assets/home_page_images/welcome_img.png'
import overviewImg1 from '../assets/home_page_images/overview_img_1.png'
import overviewImg2 from '../assets/home_page_images/overview_img_2.png'
import overviewImg3 from '../assets/home_page_images/overview_img_3.png'
import overviewImg4 from '../assets/home_page_images/overview_img_4.png'
import resourceImg from '../assets/home_page_images/resources_img.png'
import textBubble1 from '../assets/home_page_images/text_bubble_1.png'
import textBubble2 from '../assets/home_page_images/text_bubble_2.png'
import textBubble3 from '../assets/home_page_images/text_bubble_3.png'
import chatPup1 from '../assets/home_page_images/chat_pup_1.png'
import chatPup2 from '../assets/home_page_images/chat_pup_2.png'
import chatPup3 from '../assets/home_page_images/chat_pup_3.png'
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
                        <p>Student-led organization with a focus on providing mental health resources to colleges students creatively through Instagram</p>
                        <button className="home-button">About us</button>
                    </div>
                    <div className="img-links">
                        <img src={welcomeImg1} alt="Hi! I'm pup"/>
                        <a href="#" alt='Twitter'>Twitter img</a>
                        <a href="#" alt='Facebook'>Facebook img</a>
                        <a href="#" alt='Instagram'>Instagram img</a>
                    </div>
                </div>
                <div className="disclaimer">
                    <p>Disclaimer: We are not licensed professionals. All of the information we share and create is collected from existing resources, academic papers, and resources provided by professionals.</p>
                </div>
            </section>
            <section>
                <div className="pup-story">
                    <h2>PupSupport Story</h2>
                    <p>Pup is a non-binary husky pup who is here to share their stories with college students and bring awareness to the types of struggles we all face.</p>
                </div>
            </section>
            <section id="overview-section">
                <div className="overview-container">
                    <div className="overview-item">
                        <img className="view-img-1" src={overviewImg1} alt="Mental health pup"/>
                        <div className="sub-item">
                            <h2 className="over-head">Mental Health</h2>
                            <p>PupSupport strives to normalize and bring awareness to the mental health issues college students face as well as support students as they go through their journey and struggles as a college student.</p>
                        </div>
                    </div>
                    <div className="overview-item">
                        <div className="sub-item">
                            <h2 className="over-head">College Living</h2>
                            <p>In order to best serve our community, we are focused on sharing the experiences of life as a college student and provide additional resources that may benefit students specifically.</p>
                        </div>
                        <img className="view-img-2" src={overviewImg2} alt="College living pup"/>
                    </div>
                    <div className="overview-item">
                        <img className="view-img-1" src={overviewImg3} alt="Education & resources pup"/>
                        <div className="sub-item">
                            <h2 className="over-head">Education & Resources</h2>
                            <p>In addition to our social media presence, we provide a variety of resources and opportunities to further their education on mental health.</p>
                        </div>
                    </div>
                    <div className="overview-item">
                        <div className="sub-item">
                            <h2 className="over-head">Creativity</h2>
                            <p>Pup Support utilizes art and social media in order to creatively advocate for and share student experiences.</p>
                        </div>
                        <img className="view-img-2" src={overviewImg4} alt="Creativity pup"/>
                    </div>
                </div>
            </section>
            <section className="resources">
                <div className="resource-contents">
                    <h2>Resources</h2>
                    <p>Find support and resources to improve your mental health and well-being.</p>
                    <button className="home-button">Check Out</button>
                </div>
                <div>
                    <img src={resourceImg} alt="Heart mirror pup"/>
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
                        <div className="community-sub-div">
                            <p>Pup always brings brightness to my Instagram feed and reminds me to take care of myself and value my well-being.</p>
                            <img src={textBubble1} alt="Quote bubble"/>
                        </div>
                    </div>
                    <div className="community-container">
                        <div className="community-sub-div">
                            <p>I appreciate the super cute posts and encouraging affirmations! They are helpful , especially right now, please keep it up!</p>
                            <img src={textBubble2} alt="Quote bubble"/>
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
                        <div className="community-sub-div">
                        <p>I really love your Instagram page! Whoever is illustrating it is super talented, and the posts always make me happy, reminding me that I’m not alone in this!</p>
                            <img src={textBubble3} alt="Quote bubble"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;