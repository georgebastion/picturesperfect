import React, { useState, useEffect, useRef} from 'react';
import emailjs from '@emailjs/browser';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Moment from 'react-moment';
import './booking.scss';
import { Input } from '@mui/material';
import Nav from '../Nav/Nav';

    
const Booking = () => {
    const [date, setDate] = useState('');
    const [value, setValue] = useState('');

    const forms = useRef();
    const [done, setDone]=useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mud1jbg', 'template_7uval9u', forms.current, 'pjPenMLRWAHv3ZFRB')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
          
      };

    const handleChange=((e)=>{
        setValue(e.currentTarget.value)
    })
   
    const handleChanged=(e)=>{
        setDate(e.currentTarget.value)

    }
   
  
    return (
        <div className='calendarr' id='booking' >
            <Nav />

            <h1 className='cheader'>Book a Photo Session</h1>
            
            <div className='calendardiv'>
                    <div className='calendarshow'>
                        <h5 className='selectday' >Select day and time</h5>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={4} sx={{padding:'1rem'}} id='centerrr' >
                            <form id='mimis' ref={forms} onSubmit={sendEmail}>
                                <TextField name='name' type='name' id='namemm' label='Your name' style={{color:'black', width:'16.5rem'}}/>
                                <TextField name='number' id='namemm' type='number' label='Phone Number' style={{color:'black', marginTop:0, width:'16.5rem'}} />
                                <TextField name='reason' type='multiline' label='Say something' style={{color:'black', width:'16.5rem'}} />
                                <TextField name='date' type='date'  style={{color:'black', width:'16.5rem'}} value={date}  onChange={handleChanged}  />
                                <TextField name='time' type='time'  style={{color:'black', width:'16.5rem'}} value={value}  onChange={handleChange}  />

                                <select name='category' type='category' className='' style={{marginTop:'1rem', padding:'10px', width:'14.5rem' }} >
                                    <option value=''>Select Category</option>
                                    <option value='wedding'>Wedding</option>
                                    <option value='branding'>branding</option>
                                    <option value='studio'>studio</option>
                                    <option value='outdoors'>outdoors</option>
                                </select>
                            <button className='btn-grad' type='submit'>Book</button>
                            </form>               
                                <span style={{color:'green'}}>{done && "Email sent. Regards"}</span>
                            </Stack>
                        </LocalizationProvider>
                    </div>
    
         
                            {/*<p>Selected time: <h2 className='ssday'><Moment format='HH:mm'>{value.toString()}</Moment></h2> </p>  */}
            
                  
            </div>
        </div>
    );
};

export default Booking;