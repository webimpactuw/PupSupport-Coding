import pupsupportValues from '../assets/about_us_images/aboutUsValues.png';
import pupsupportDog from '../assets/about_us_images/aboutUsDog.png';
import pupsupportScratches from '../assets/about_us_images/aboutUsScratches.png';
import line from '../assets/about_us_images/line.png';
import arrow from '../assets/about_us_images/valueArrow.png';
import dropdown_btn from '../assets/about_us_images/dropdown_btn.png';
import { Link } from 'react-router-dom';
import '../css/aboutUs.css';
import { useState } from 'react';

/**
 * Pupsupport About Us Page
 */
function AboutUs() {
    // Related functions here
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);

    const handleImageClick = (e) => {
        const { target } = e;
        if (target.id == "dropdown-1") {
            setIsFlipped1(!isFlipped1);
        } else if (target.id == "dropdown-2") {
            setIsFlipped2(!isFlipped2);
        }
    };
    // HTML/React components here to render page
    return (
        <div className='bg'>
            {/* Section 1 */}
            <section className="abt_intro">
                <div className="d-flex flex-row mb-3 cols abt-header">
                    <div className='col-6 convo p-default'>
                        <h1 className="pt-5 headers">Starting the Conversation</h1>
                        <p className='pt-5 pb-4'>Taking care of your mental health isn't an afterthought, it's essential.</p>
                        <p>By using art and graphic designs, we hope to capture the essence of college life with the purpose to build community awareness on mental health for students.</p>
                    </div>
                    <div className='col-6 introImgs'>
                        <img className="pupIntroImg" src={pupsupportDog} />
                        <img className="scratchIntroImg" src={pupsupportScratches} />
                    </div>
                </div>
            </section>
            
            {/* Section 2 */}
            <section className='offers'>
                <div className='convo pr-5 p-default subheaders'>
                    <h1 className='headers pb-4 pl-3'>What We Offer</h1>
                    <div className='d-flex flex-row py-3'>
                        <h2 className='col-3 offer'>Resources & <br /> Workshops</h2>
                        <p className='col-8'>In alignment with our mission, we provide resources and workshops that benefit student's personal well-being with a focus on mental health.</p>
                    </div>
                    <img src={line} className='line-offer' />
                    <div className='d-flex flex-row py-3'>
                        <h2 className='col-3 offer'>Digital Art & Collaboration Opportunities</h2>
                        <p className='col-8'>We provide digital art and design in order to connect with our community members. We also have collaboration opportunities in order to work together with and better serve our community.</p>
                    </div>
                    <img src={line} className='line-offer' />
                    <div className='d-flex flex-row py-3'>
                        <h2 className='col-3 offer'>Community Story Sharing</h2>
                        <p className='col-8'>We're fighting the stigma around mental health by reaching out to our community and sharing their stories in order to help students feel seen and understood.</p>
                    </div>        
                </div>
            </section>

            {/* Section 3 */}
            <section>
                <h1 className="text-center pb-5 headers">Who We Are</h1>
                <div className="d-flex flex-row section4-format p-default subheaders">
                    <div className='who'>
                        <h2 className='pb-4'>Who</h2>
                        <p>Pup Support is a student-led organization, at the University of Washington based in Seattle, with a focus on providing mental health resources to college students creatively.</p>
                    </div>
                    <div className='what'>
                        <h2 className='pb-4'>What</h2>
                        <p>By using art and graphic designs, we hope to capture the essence of college life with a purpose to build community awareness on mental health for students.</p>
                    </div>
                    <div className='why'>
                        <h2 className='pb-4'>Why</h2>
                        <p>As college students, we understand how difficult college life can be. We are here to listen and to share some tips and resources to help guide our audience through their own struggles. We hope to help create a world where all those impacted by mental illness know they are not alone and are empowered to live a fulfilling life.</p>
                    </div>
                </div>
                <p className='text-center'>Learn more about our team <Link to='/our-team'>here</Link></p>
            </section>

            {/* Section 4 */}
            <section className="green-bg mt-5">  
                <div className="section5-format p-default">
                    <h1 className="text-center pb-4 headers">Our Mission</h1>
                    <p>We aim to break the barriers that college students face with their mental health and ultimately help our community sustain and develop healthy mental health skills. Our goal is to address the unmet mental health needs within our community through support, referral, education, and outreach.</p>
                    <p><br />Pup Support's ultimate goal is to break the barriers that college students face with their mental health and help our community sustain and develop healthy coping skills. We use art and graphic designs to capture the essence of college life with a purpose to build community awareness on mental health and support for students. We strive to create content that is personable, informative, and engaging. </p>
                    <p><br />At the current moment, we aim to support college students based at the University of Washington. However, we hope to resonate with students around the world and provide assistance for anyone who needs it regardless of their location. Ultimately, we hope to support all individuals, no matter their religion, beliefs, race, culture, sexuality, gender identity, politics, etc. We are and will continuously grow, learn, and correct biases while maintaining accountability for our actions.</p>
                </div>
            </section>

            {/* Section 5 */}
            <section className="valuesImage">
                <img src={pupsupportValues} alt='PupSupport text and dog listenting to music' className='values-img' />
            </section>

            {/* Section 6 */}
            <section>
                <div className='d-flex flex-row dropdown-format align-items-center pt-5 pb-5'>
                    <div className='col-2'>
                        <img
                            id="dropdown-1"
                            src={dropdown_btn}
                            className={`${!isFlipped1 ? 'dropdown' : ''} ${isFlipped1 ? 'flip-vertical' : ''}`}
                            style={{ width: '5rem', height: '3rem' }}
                            onClick={handleImageClick}
                        />
                    </div>
                    <h1 className="text-center headers col-8 align-items-center">Values</h1>
                    <div className='col-2'></div>
                </div>
                <div className='p-default section6-format' style={{ display: !isFlipped1 ? 'none' : 'block' }}>
                    <div className='values-card d-flex flex-row mt-3'>
                        <img src={arrow} className='arrowImg' />
                        <div className='values-list'>
                            <p className='values-sub'>Empathy</p>
                            <img src={line} className='line-values' />
                            <ul>
                                <li>We listen first.</li>
                                <li>We do not value anyone's experience or pain as greater or lesser than our own.</li>
                                <li>We assume the best intentions of others and give people the benefit of the doubt.</li>
                                <li>We operate from a place of curiosity instead of judgment.</li>
                                <li>We understand that people make mistakes and we are all human.</li>
                                <li>We practice self-compassion.</li>
                                <li>We recognize that each person has a life outside of the organization.</li>
                                <li>We support the mental health of our staff and volunteers by prioritizing self-care.</li>
                                <li>We express appreciation often, and we intentionally make space to celebrate accomplishments.</li>
                            </ul>
                        </div>
                    </div>  
                    <div className='values-card d-flex flex-row'>
                        <img src={arrow} className='arrowImg' />
                        <div className='values-list'>
                            <p className='values-sub'>Inclusivity</p>
                            <img src={line} className='line-values' />
                            <ul>
                                <li>We create a welcoming space for everyone. We strive to build an environment where people of any race, ethnicity, class, religion, sexual orientation, gender identity, ability, or country of origin feel welcome and seen.</li>
                                <li>We acknowledge each other's presence.</li>
                                <li>We create opportunities for meaningful connections among people.</li>
                                <li>We take time to get to know each other as individuals.</li>
                                <li>We find fun in our work and have a sense of humor.</li>
                                <li>We are present with one another in group settings (e.g., not checking phones, laptops, etc. during meetings), and communicate clearly if we need to be less present.</li>
                                <li>We connect with people of all backgrounds and recognize that mental health affects all of us in different ways.</li>
                                <li>We create environments that encourage quieter voices to speak up.</li>
                            </ul>  
                        </div>
                    </div>
                    <div className='values-card d-flex flex-row'>
                        <img src={arrow} className='arrowImg' />
                        <div className='values-list'>
                            <p className='values-sub'>Integrity</p>
                            <img src={line} className='line-values' />
                            <ul>
                                <li>We listen first.</li>
                                <li>We do not value anyone's experience or pain as greater or lesser than our own.</li>
                                <li>We assume the best intentions of others and give people the benefit of the doubt.</li>
                                <li>We operate from a place of curiosity instead of judgment.</li>
                                <li>We understand that people make mistakes and we are all human.</li>
                                <li>We practice self-compassion.</li>
                                <li>We recognize that each person has a life outside of the organization.</li>
                                <li>We support the mental health of our staff and volunteers by prioritizing self-care.</li>
                                <li>We express appreciation often, and we intentionally make space to celebrate accomplishments.</li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 7 */}
            <section className='green-bg mb-5'>
                <div className='d-flex flex-row dropdown-format align-items-center pt-5 pb-5'>
                    <div className='col-2'>
                        <img
                            id="dropdown-2"
                            src={dropdown_btn}
                            className={`dropdown align-items-center ${isFlipped2 ? 'flip-vertical' : ''}`}
                            style={{ width: '5rem', height: '3rem' }}
                            onClick={handleImageClick}
                        />
                    </div>
                    <h1 className='headers text-center col-8 align-items-center'>Diversity, Equity & Inclusion</h1>
                    <div className='col-2'></div>
                </div>
                <div className='p-default section7-format subheaders' style={{ display: !isFlipped2 ? 'none' : 'block' }}>
                    <h2 className='pb-3'>RACIAL EQUITY & IMPLICIT BIAS</h2>
                    <p>Pup Support recognizes, like many other systems in the United States, the mental health system is deeply impacted by institutional racism for people of color. Mental health stigma, culture, and systems impact people differently based on ethnicity, race, income, etc. Many individuals experience bias, discrimination, misdiagnosis, and also struggle finding support or therapy for their group. Pup Support believes all people have the right to mental health support. We hope to be a part of the process of advocating for safe, appropriate, respectful, accessible, and consistent mental health support. <br /><br /> We understand that racism and bias can be very subtle and even inflicted by those with good intentions. We will continue to work towards growing, learning, and checking our implicit bias. We understand the importance of continuously working towards addressing and eliminating racial inequalities within our organization, community, and more. Pup Support will hold our members accountable with respect, kindness, understanding, guidance, and forgiveness. We understand that every individual grew up in a different environment and we will strive to not invalidate or try to explain away someone’s personal experience. We hope to curate a learning community where mistakes are acknowledged and used as ways to grow and evolve.</p>
                    <h2 className='pb-3'><br />THE CONVERSATION GOES ON</h2>
                    <p>We acknowledge that these conversations don't stop here. As a team, we will continue to grow, shape, and rethink what mental health means for our organization and community. As a team, we will continue to have these conversations to ensure that Pup Support's work aligns with the goals of providing our community a safe and inclusive space to develop their understanding of their own mental health and the mental health of others.</p>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;