import React from 'react';

import Inputs from './Inputs';
import './auth.scss';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../../actions/auth';

const initialState= {firstName:'', lastName:'', email:'', password:''}

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [showpp, setShowpp] = useState(false);

    const [ formData, setFormData ] = useState(initialState);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    
    const handleSign =()=> setIsSignup((prevState)=>!prevState);
    const handleShowPassword = (()=> !setShowpp((showw)=>!showw) )
    
    const handleChange=(e)=>{
        setFormData({...formData, [e.currentTarget.name]:e.currentTarget.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(isSignup){
            dispatch(signUp(formData, navigate));
        }else{
            dispatch(signIn(formData, navigate));

        }
        

    }
    return (
        <div className='logss'>
            <form onSubmit={handleSubmit} className='formm'>
                <h2 >{isSignup ? 'Sign Up' : 'Login'}</h2>
                {
                    isSignup && (
                        <>
                        <Inputs name='firstName' label='First Name' handleChange={handleChange}  />
                        <Inputs name='lastName' label='Last Name' handleChange={handleChange}  />
                        </>
                    )
                }
                <Inputs name='email' type='email' label='Email' handleChange={handleChange} />
                <Inputs name='password' type={ showpp ? 'text' : 'password'} label='Password' handleChange={handleChange} handleShowPassword={handleShowPassword} />
                <div className='lognn'>
                    <button type='submit' className='btn-graddss'>{isSignup ? 'Sign Up' : 'Login'}</button>
                    <p onClick={handleSign}>Admin only!</p>

                </div>
            </form >
        </div>
    );
};

export default Auth;