import React from 'react';

import Nav from '../Nav/Nav'
import './about.scss'
import Eyzo from '../../assets/images/tt.jpg'

import { AiOutlineInstagram } from 'react-icons/ai';
import { FaPinterestP, FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import ReactImageAppear from 'react-image-appear';
import Loader from '../loader/Loader'
import eyzon from '../../assets/images/eyezon/eyezohh.jpg';

const About = () => {
    return (
        <div className='aboutsection'>
            <Nav />
            <div className='aboutsec'>
                <h1>About Eyezoh</h1>
                <div className='eyezz'>
                    <div className='piccc'>
                        <ReactImageAppear className="piccabt" src={eyzon} animation='zoomIn' Loader={<Loader />} alt='Studio Photos' />
                    </div>
                    <p className='abouttext'>
                        Mel Volkman is a fine artist & photographer based on the rustic coast of Maine. She is most known for her atmospheric 
                    perspective and nuanced approach to seemingly insignificant moments. Her work communicates depth and meaning beyond 
                    evident visuals, drawing the viewer inward to reflect on both the serene and unquiet emotions connected to the impermanence of life.
                    “Nostalgic”, “Haunting”, "Mysterious", and “Magical" are the words most often used to describe her work. She's humbled 
                    to be sharing her work within private and public spaces throughout the world — United States, Germany, United Kingdom, 
                    France, Italy, and Australia to name a few.When she's not creating, you can find her relishing slow life with her small family, 
                    dreaming up elaborate ideas for her dream garden, or foraging in the woods and along the misty coast of Maine in search of her 
                    next subject.
                    </p>
                </div>
                <div className='bottomsocial'>
                    <h2>Follow Me</h2>
                    <div className='iconstop'>
                        <a href='https://www.instagram.com/eyezoh_caption/' rel='noreferrer'  target='_blank' className='icons'><AiOutlineInstagram className='icon'/></a>
                        <a href='' className='icons'><FaPinterestP className='icon'/></a>
                        <a href='https://www.facebook.com/Eyezohcaption/' rel='noreferrer' target='_blank' className='icons'><FaFacebookF className='icon' /></a>
                        <a href='' className='icons'><BsTwitter className='icon'/></a>
                    </div>
                </div>
                    <div className='bottomdiv'>
                        @Eyezone photography
                    </div>

            </div>
        </div>
    );
};

export default About;