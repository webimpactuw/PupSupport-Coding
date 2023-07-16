import { Link } from 'react-router-dom';
import "../css/resources.css";
import logo from '../assets/resources/resources-page-logo.png'
import arrow from '../assets/resources/forward_arrow.png'

/**
 * Pupsupport home resource page 
 */
function Resources() {
    return (
        <div className="resources-wrapper">
            <section className="left-main">
                <img className = "textBox" src={logo} alt='a Background Text Box'/>
                <div className="disclaimer">
                    Disclaimer: We are not licensed or trained professionals. All of the information we share and create
                    is collected from existing resources, academic papers, and resources provided by professionals.
                </div>
            </section>

            {/* links to other resource pages */}
            <section className="resources-links">
                
                <Link to='/ResourcesMenu'><button className='button-m'>Resources Websites <img className="forward" src={arrow} alt='forward'/></button></Link>
                <Link to='/videos'><button className='button-m'>PupSupport YouTube <img className="forward" src={arrow} alt='forward'/></button></Link>
                <Link to='/podcast'><button className='button-m'>PupSupport Podcast <img className="forward" src={arrow} alt='forward'/></button></Link>

            </section>
        </div>
    );
}

export default Resources;