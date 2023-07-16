import '../css/merch.css';
import pup from '../assets/merch/merch-pup.png';
import stickers from '../assets/merch/merch-stickers.png';

function Merch() {
    return (
        <div className='bg'>
            <section className='merch_intro'>
                <div className='d-flex flex-row flex-start merch-header'>
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
            <section className='pt-5 merch-stickers'>
                <div className='d-flex flex-row stickers-bg'>
                    <div className='col-3 stickers-img'>
                        <img src={stickers} />
                    </div>
                    <div className='col-6 subheaders stickers-text p-default'>
                        <h2>iMessage Stickers</h2>
                        <p className='mt-4'>Pupsupport 1st Sticker Pack</p>
                    </div>
                    <div className='col-3 stickers-btn'>
                        <button className='download-btn'>Download</button>
                    </div>
                </div>
            </section>
            <section className='merch-link'>
                <a href='https://google.com' target="_blank"><button className='merch-btn'>Check Out Our Merch!</button></a>
            </section>
            <section className='merch-form pt-5'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf4PtFqcpl4cIWTtGlsX4NhD-wwW7ebuGY2RZkWUw79_Pv-fg/viewform?embedded=true" width="100%" height="100%" frameborder="0">Loading…</iframe>
            </section>
        </div>
    );
}

export default Merch;