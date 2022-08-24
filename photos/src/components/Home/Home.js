import React from 'react';

import Nav from '../Nav/Nav';
import './home.scss';

import Typical from 'react-typical'

import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { CgMail} from 'react-icons/cg';

import ReactImageAppear from 'react-image-appear';
import eyzon from '../../assets/images/eyezon/eyezohh.jpg';
import Loader from '../loader/Loader'

const Home = () => {
    return (
        <div className='hometop'>
            <div className='pictop'>

                <ReactImageAppear className="picchome" src={eyzon} animation='zoomIn' Loader={<Loader />} alt='Studio Photos' />
            </div>
            <div className='centerHome'>
                <div className='centertxt'>
                    <div className='centerText'>
                        <h1>Eyezone</h1>
                        <Typical
                                    loop={Infinity}
                                    steps={[
                                        'Photography',
                                        4000,
                                        'Designs',
                                        4000,
                                    ]}
                                />
                    </div>
                    {/*
                        <div className='iconshome'>
                        <div className='iconss lft'>
                        
                        <IoChevronBackOutline className='iconfb ' />
                        </div>
                        <div className='iconss rgt'>
                        <IoChevronForwardOutline className='iconfb'/>
                        </div>
                        </div>
                    */}
                        <div className='explorebtn  expbtn'>
                        <h3 className='exploreh'>
                            Explore More
                        </h3>
                    </div>
                </div>
            </div>
            <div className='homeicons'>
                        <a href='https://www.instagram.com/eyezoh_caption/' rel='noreferrer'  target='_blank' className='iconshh'><AiOutlineInstagram className='icon'/></a>
                        <a href='https://www.facebook.com/Eyezohcaption/' rel='noreferrer'  target='_blank' className='iconshh'><FaFacebookF className='icon' /></a>
                        <a href='' className='iconshh'><CgMail className='icon'/></a>
            </div>

        </div>
    );
};

export default Home;