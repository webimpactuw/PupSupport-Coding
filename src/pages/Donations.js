import heart_pup from '../assets/donation/pup-dono.png';
import '../css/donations.css';
import { Link } from 'react-router-dom';

/**
 * Pupsupport Donations Page
 */
function Donations() {
    return(
        <div className="bg">
            <section className='dono_intro'>
                <div className="dono_format d-flex flex-row align-items-center">
                    <div className='col-6'>
                        <div className='d-flex justify-content-between flex-column p-default'>
                            <div>
                                <h1 className='headers'>Your donation will make a <br /> difference</h1>
                            </div>
                            <div className='p-format'>
                                <p>All donation proceeds go towards [xxx] <br /><br /> in supporting our mission to provide access to mental health resources and support to those who need it most.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 donoImg'>
                        <img className='donopup' src={heart_pup} />
                    </div>
                </div>
            </section>
            <div className='donate-section'>
                <button className='donate-btn'>
                    <Link to='/donation-complete'>Click Here to Donate</Link>
                </button>
            </div>
        </div>
    );
}

export default Donations;