import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

import './contact.scss'
import Nav from '../Nav/Nav';

const Contact = () => {
    const form = useRef();
    const [done, setDone]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mud1jbg', 'template_7uval9u', form.current, 'pjPenMLRWAHv3ZFRB')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
      
  };
    return (
        <div className='contactform'>
            <Nav color='white'/>
            <div className='thecontact'>  
                <div className='leftside'>
                    <h1 className='headerr'>CONTACT</h1>
                    <p className='headertext'>For all pricing and booking inquiries , please fill out the form below. Please include as much relevant information as possible, for example, the location of the project, amount of images needed, intended usage of the images, and timeframe for project completion. I look forward to hearing from you.</p> 
                </div>
                <form ref={form} onSubmit={sendEmail}>  
                    <input className='inputs' type="text" name='name' placeholder='Your full Name' required contenteditable/>
                    <input className='inputs ' type="email" name='email' placeholder='Your Email' required contenteditable/>
                    <textarea className='inputs' name="message" rows="4" cols='25' placeholder='Your Message' required contenteditable></textarea>
                    <button type='submit' className='buttonSubmit ' contenteditable>Send Message </button>
                    <span>{done && "Thanks for contacting me!"}</span>
                </form>
            </div>
        </div>
    );
};

export default  Contact;
