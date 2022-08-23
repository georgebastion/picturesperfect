import React from 'react';
import './nav.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Branding from '../Branding/Branding';


const Nav = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [toggleMenu, setToggleMenu] = useState(false);
    
    const navigate = useNavigate();
    const location = useLocation()
    const dispatch = useDispatch();
    
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])


    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})

        navigate('/')
    }

    const BookScroll=()=>{
        document.querySelector('#booking').scrollIntoView({
            behavior: 'smooth'
    });

    } 
    const BrandScroll=()=>{
        document.querySelector('#branding').scrollIntoView({
            behavior: 'smooth'
    });

    } 
    const PhotoScroll=()=>{
        document.querySelector('#photography').scrollIntoView({
            behavior: 'smooth'
        });
    } 

    return (
        <div className='navbar'>
            <div className='navlogo'>
                Eyzo Photography
            </div>
            <ul className='navmenu' >
                <span onClick={BookScroll} to='/booking' className='menuItem' >Booking</span>
                <span onClick={PhotoScroll} to='/photography' className='menuItem' >Photography</span>
                <span onClick={BrandScroll} to='/branding' className='menuItem' >Branding</span>
                <Link to='/about' className='menuItem' >About</Link>
                <Link to='/contact' className='menuItem' >Contact</Link>
                {
                    user ?
                    <span onClick={handleLogout} className='menuItem' >LOGOUT</span>
                    :
                    <Link to='/auth' className='menuItem'>LOGIN</Link>


                }
            </ul>
                {
                    user ?
                    <div className='userr' style={{color:'white'}}>
                        {user.result.name}     
                    </div>
                    :
                    null
                }
            <div className='topd'>
            {toggleMenu
                ? <RiCloseLine color="#fff" size={27} style={{animation: 'all 3s ease'}} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} style={{animation: 'all 3s ease'}} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className='topx'>
                            <span onClick={BookScroll} className='menuItem' style={{color:`${props.color}`}}>Booking</span>
                            <span onClick={PhotoScroll} className='menuItem' style={{color:`${props.color}`}}>Photography</span>
                            <span onClick={BrandScroll} className='menuItem' style={{color:`${props.color}`}}>Branding</span>
                            <Link to='/about' className='menuItem' style={{color:`${props.color}`}}>About</Link>
                            <Link to='/contact' className='menuItem' style={{color:`${props.color}`}}>Contact</Link>
                            {
                                user ?
                                <span onClick={handleLogout} className='menuItem' >LOGOUT</span>
                                :
                                <Link to='/auth' className='menuItem'>LOGIN</Link>
                            }
                        </div>
        
                    )
            }
            </div>
        </div>
    );
};

export default Nav;