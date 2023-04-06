import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Pupsupport Our Team Page
 */
function OurTeam() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <div>
            <Header></Header>
            <div>
              <h1>Our Team</h1>
              <p>Meet the faces behind Pup Support. Our team is made up of innovators, designers, and compassionate members who value the importance of inclusive mental health access.</p>
              <p>Lorem ipsum dolor sit amet consectetur. Urna morbi fringilla mauris sed. Curabitur fringilla neque dictum ultrices blandit turpis eget.</p>
            </div>
            <section>
              <h2>Executive Team</h2>
                <div>
                  <div>
                    <img src="" alt="Member Name"/>
                    <p>Name</p>
                    <p>Position</p>
                  </div>
                </div>
            </section>
            <section>
              <h2>Resource & Education Team</h2>
                <div>
                  <div>
                    <img src="" alt="Member Name"/>
                    <p>Name</p>
                    <p>Position</p>
                  </div>
                </div>
            </section>
            <section>
              <h2>External Team</h2>
                <div>
                  <div>
                    <img src="" alt="Member Name"/>
                    <p>Name</p>
                    <p>Position</p>
                  </div>
                </div>
            </section>
            <section>
              <h2>Creative Team</h2>
                <div>
                  <div>
                    <img src="" alt="Member Name"/>
                    <p>Name</p>
                    <p>Position</p>
                  </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default OurTeam;