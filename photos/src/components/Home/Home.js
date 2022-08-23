import React from 'react';

import Nav from '../Nav/Nav';
import './home.scss';

import Typical from 'react-typical'

import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5';

const Home = () => {
    return (
        <div className='hometop'>
            <div className='centerHome'>
                <div className='centerText'>
                    <h1>Eyzoh</h1>
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
    );
};

export default Home;