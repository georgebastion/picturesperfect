import React from 'react';
import pipc from '../../assets/images/tshirtd.jpg';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './branding.scss';
import piccc from '../../assets/images/tshirtt.png'
import picccc from '../../assets/images/13692775_Black_Hoodie_Mockup.jpg'
import Nav from '../Nav/Nav';

import { deleteImage } from "../../actions/images";
import Loader from '../loader/Loader'

import {GrDocumentUpdate} from 'react-icons/gr';
import { AiOutlineDelete } from 'react-icons/ai';


const Branding = ( { setCurrentid } ) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const images = useSelector((state)=> state.images)


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
                {
                    images.length ?
                    images.map((pb)=>(
                        pb.category === 'branding' ?
                        <div className='cardadmin'>

                                {
                                user ?(
                                        <div className="admIcons">
                                        <GrDocumentUpdate className="updateIcon" onClick={()=>setCurrentid(pb._id)} />
                                        <AiOutlineDelete className="updateIcon" onClick={()=>dispatch(deleteImage(pb._id))} />
                                    </div>          
                                    ):
                                    null
                                }
                            <div className='cardsbb'>
                                <div className='imgbx'>
                                    <img className='' src={pb.selectedFile} alt='branded shirt' />
                                </div>
                                <div className='detailsimg'>
                                    <h3>Texts    
                                    <span>Simple writing</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        : 
                        null
                    ))
                :
                <div className='cardsbbss'>
                    <Loader />
                </div>

                }
            </div>
            <div className='bbbkk'>
                <button className='btn-graddd'>
                    Make an order
                </button>
            </div>
        </div>
    );
};

export default Branding;