import React from 'react';
import './loader.scss'
const Loader = () => {
    return (
        <div className='bloader'>
            <div className='ploader'>
                <div className='lds-roller'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;