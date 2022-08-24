import React, { useEffect, useState } from 'react';
import Booking from '../Booking.js/Booking';
import Branding from '../Branding/Branding';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Photography from '../Photography/Photography';

import { useDispatch } from 'react-redux';
import { getImages,getWedding, getStudio, getBrand } from '../../actions/images'
import Admin from '../admin/Admin';


import Headroom from 'react-headroom';
import Contact from '../Contact/Contact';
import About from '../About/About';

const Main = () => {
    const dispatch = useDispatch();
    const [currentid, setCurrentid] = useState(null);

    useEffect(()=>{
        dispatch(getImages());
        dispatch(getStudio());
        dispatch(getWedding());
        dispatch(getBrand());
    }, [ currentid, dispatch])

    return (
        <div className='mainn'>
    
            <Nav color='white' />
            <Home />
            <Admin currentid={currentid} setCurrentid={setCurrentid} />
            <Photography setCurrentid={ setCurrentid }/>
            <Booking /> 
            <Branding setCurrentid={ setCurrentid } />
            <Contact />
            <About />
        </div>
    );
};

export default Main;