import React from 'react';
import pipc from '../../assets/images/tshirtd.jpg';

import './branding.scss';
import piccc from '../../assets/images/tshirtt.png'
import picccc from '../../assets/images/13692775_Black_Hoodie_Mockup.jpg'
import Nav from '../Nav/Nav';


const Branding = () => {
    return (
        <div className='brandingg' id='branding' >
            <Nav />
            <h1>BRANDING</h1>
            <p> I print amazing design on your cloths.</p>
            <ul>
                <li>Hoodies</li>
                <li>T-shirts</li>
                <li>Trousers</li>
                <li>caps</li>
                <li>e.t.c</li>
            </ul>
            <div className='cardsall'>
                <div className='cardsbb'>
                    <div className='imgbx'>
                        <img className='' src={picccc} alt='branded shirt' />
                    </div>
                    <div className='detailsimg'>
                        <h3>Texts    
                        <span>Simple writing</span>
                        </h3>
                    </div>
                </div>
                <div className='cardsbb'>
                    <div className='imgbx'>
                        <img className='' src={piccc} alt='branded shirt' />
                    </div>
                    <div className='detailsimg'>
                        <h3>Texts    
                        <span>Simple writing</span>
                        </h3>
                    </div>
                </div>
                <div className='cardsbb'>
                    <div className='imgbx'>
                        <img className='' src={piccc} alt='branded shirt' />
                    </div>
                    <div className='detailsimg'>
                        <h3>Texts    
                        <span>Simple writing</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div className='bbbkk'>
                <button className='btn-graddd'>
                    Make an order
                </button>
            </div>
            <div className='pipcc'>
                <img src={pipc} alt='tshirt design' />
            </div>
        </div>
    );
};

export default Branding;