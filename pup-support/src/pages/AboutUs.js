import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import pupsupportValues from '../assets/aboutUsValues.png';

/**
 * Pupsupport About Us Page
 */
function AboutUs() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <div>
            <Header />

            {/* Section 1 */}
            <h1>Starting the Conversation</h1>
            <p>Taking care of your mental health isn't an afterthought, it's essential.</p>
            <p>By using art and graphic designs, we hope to capture the essence of college life with the purpose to build community awareness on mental health for students.</p>

            {/* Section 2 */}
            <h1>What We Offer</h1>
            <h2>Resources & Workshops</h2>
            <p>In alignment with our mission, we provide resources and workshops that benefit student's personal well-being with a focus on mental health.</p>
            <h2>Digital Art & Collaboration</h2>
            <p>We provide digital art and design in order to connect with our community members. We also have collaboration opportunities in order to work together with and better serve our community.</p>
            <h2>Community Story Sharing</h2>
            <p>We're fighting the stigma around mental health by reaching out to our community and sharing their stories in order to help students feel seen and understood.</p>

            {/* Section 3 */}
            <h1>Who We Are</h1>
            <h2>Who</h2>
            <p>Pup Support is a student-led organization, at the University of Washington based in Seattle, with a focus on providing mental health resources to college students creatively.</p>
            <h2>What</h2>
            <p>By using art and graphic designs, we hope to capture the essence of college life with a purpose to build community awareness on mental health for students.</p>
            <h2>Why</h2>
            <p>As college students, we understand how difficult college life can be. We are here to listen and to share some tips and resources to help guide our audience through their own struggles. We hope to help create a world where all those impacted by mental illness know they are not alone and are empowered to live a fulfilling life.</p>

            {/* Section 4 */}
            <h1>Our Mission</h1>
            <p>We aim to break the barriers that college students face with their mental health and ultimately help our community sustain and develop healthy mental health skills. Our goal is to address the unmet mental health needs within our community through support, referral, education, and outreach.</p>
            <p>Pup Support's ultimate goal is to break the barriers that college students face with their mental health and help our community sustain and develop healthy coping skills. We use art and graphic designs to capture the essence of college life with a purpose to build community awareness on mental health and support for students. We strive to create content that is personable, informative, and engaging.</p>
            <p>At the current moment, we aim to support college students based at the University of Washington. However, we hope to resonate with students around the world and provide assistance for anyone who needs it regardless of their location. Ultimately, we hope to support all individuals, no matter their religion, beliefs, race, culture, sexuality, gender identity, politics, etc. We are and will continuously grow, learn, and correct biases while maintaining accountability for our actions.</p>

            {/* Section 5 */}
            <img src={pupsupportValues} alt='PupSupport text and dog listenting to music' />
            <Dropdown heading={"Values"} numCards={3} />
            <Dropdown heading={"Diversity Equity & Inclusion"} numCards={1} />

            <Footer />
        </div>
    );
}

export default AboutUs;