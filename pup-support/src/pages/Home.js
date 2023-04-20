
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

/**
 * Pupsupport home page
 */
function Home() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <div>
            <section>
                <div>
                    <div>
                        <h1>I am here to help</h1>
                        <p>Student-led organization with a focus on providing mental health resources to colleges students creatively through Instagram</p>
                        <button>About us</button>
                    </div>
                    <div>
                        <img src={welcomeImg1} alt="Hi! I'm pup"/>
                    </div>
                    <a href="#" alt='Twitter'>Twitter img</a>
                    <a href="#" alt='Facebook'>Facebook img</a>
                    <a href="#" alt='Instagram'>Instagram img</a>
                    <div>
                        <p>Disclaimer: We are not licensed professionals. All of the information we share and create is collected from existing resources, academic papers, and resources provided by professionals.</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2>PupSupport Story</h2>
                    <p>Pup is a non-binary husky pup who is here to share their stories with college students and bring awareness to the types of struggles we all face.</p>
                </div>
                <div>
                    <h2>Mental Health</h2>
                    <p>PupSupport strives to normalize and bring awareness to the mental health issues college students face as well as support students as they go through their journey and struggles as a college student.</p>
                    <img src={overviewImg1} alt="Mental health pup"/>
                </div>
                <div>
                    <h2>College Living</h2>
                    <p>In order to best serve our community, we are focused on sharing the experiences of life as a college student and provide additional resources that may benefit students specifically.</p>
                    <img src={overviewImg2} alt="College living pup"/>
                </div>
                <div>
                    <h2>Education & Resources</h2>
                    <p>In addition to our social media presence, we provide a variety of resources and opportunities to further their education on mental health.</p>
                    <img src={overviewImg3} alt="Education & resources pup"/>
                </div>
                <div>
                    <h2>Creativity</h2>
                    <p>Pup Support utilizes art and social media in order to creatively advocate for and share student experiences.</p>
                    <img src={overviewImg4} alt="Creativity pup"/>
                </div>
            </section>
            <section>
                <div>
                    <h1>Resources</h1>
                    <p>Find support and resources to improve your mental health and well-being.</p>
                    <button>Check Out</button>
                </div>
                <div>
                    <img src={resourceImg} alt="Heart mirror pup"/>
                </div>
            </section>
            <section>
                <h2>Community</h2>
                <div>
                    <img src={textBubble1} alt="Quote bubble"/>
                    <p>Pup always brings brightness to my Instagram feed and reminds me to take care of myself and value my well-being.</p>
                    <img src={chatPup1} alt="Quote pup"/>
                </div>
                <div>
                    <img src={textBubble2} alt="Quote bubble"/>
                    <p>I appreciate the super cute posts and encouraging affirmations! They are helpful , especially right now, please keep it up!</p>
                    <img src={""} alt="Quote pup"/>
                </div>
                <div>
                    <img src={textBubble3} alt="Quote bubble"/>
                    <p>I really love your Instagram page! Whoever is illustrating it is super talented, and the posts always make me happy, reminding me that I’m not alone in this!</p>
                    <img src={""} alt="Quote pup"/>
                </div>
            </section>
        </div>
    );
}

export default Home;