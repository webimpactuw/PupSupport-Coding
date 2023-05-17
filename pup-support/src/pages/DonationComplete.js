import '../css/DonationComplete.css';
import goosePup from '../assets/donation_images/goose_pup.png';

function DonationConfirm() {
    return (
        <div>
            <section className='dono-confirm-bg d-flex flex-row align-items-center text-align-center'>
                <div className='col-5 '>
                    <h1 className='text-align-center'>Thank You!</h1>
                </div>
                <div className='col-6'>
                    <img src={goosePup} className='goosepup-dono' />
                </div>
            </section>
        </div>
    )
}

export default DonationConfirm;