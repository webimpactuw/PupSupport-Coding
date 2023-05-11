import '../css/merch.css';
import pup from '../assets/merch_images/merch_pup.png';

function merch() {
    return (
        <div className='bg'>
            <section className='merch_intro'>
                <div className='d-flex flex-row cols flex-start'>
                    <div className='col-6 merch-header-text p-default'>
                        <h1 className='headers'>Welcome to</h1>
                        <h1 style={{color: '#4E7A7F'}} className='headers'>Pup's Merch Store!</h1>
                        <p className='pt-3'>The Pup Support Merch Store is now open and ready for orders! Browse and shop our creatively designed projects curated by our lovely Pup Support team. Thank you for shopping!</p>
                    </div>
                    <div className='col-4 merch-header-img'>
                        <img src={pup} className='pup-img' />
                    </div>
                    <div className='col-2'>

                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default merch;