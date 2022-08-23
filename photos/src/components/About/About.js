import React from 'react';

import Nav from '../Nav/Nav'
import './about.scss'
import Eyzo from '../../assets/images/tt.jpg'

import { AiOutlineInstagram } from 'react-icons/ai';
import { FaPinterestP, FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const About = () => {
    return (
        <div className='aboutsection'>
            <Nav color='black' />
            <div className='aboutsec'>
                <h1>About Eyezoh</h1>
                <div className='piccc'>
                    <img className='picc' src={Eyzo} alt='Pic' />
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
                <div className='bottomsocial'>
                    <h2>Follow Me</h2>
                    <div className='iconstop'>
                        <a href='' className='icons'><AiOutlineInstagram className='icon'/></a>
                        <a href='' className='icons'><FaPinterestP className='icon'/></a>
                        <a href='' className='icons'><FaFacebookF className='icon' /></a>
                        <a href='' className='icons'><BsTwitter className='icon'/></a>
                    </div>
                </div>
                    <div className='bottomdiv'>
                        @Eyezoh photography
                    </div>

            </div>
        </div>
    );
};

export default About;