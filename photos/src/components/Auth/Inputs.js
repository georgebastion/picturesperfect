import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';

import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'


const Inputs = (props) => {
    return (
        <Grid xs={12} sm={12} style={{padding:'10px'}}>
            <TextField 
            name={props.name}
            onChange={props.handleChange}
            required
            label={props.label}
            fullWidth
            style={{background:'white'}}
            autoFocus={props.autoFocus}
            type={props.type}
            InputProps={props.name==='password' ?
            {
                endAdornment:(
                    <InputAdornment position='end'>
                        <IconButton onClick={props.handleShowPassword}>
                            {props.type ==='password'? <MdOutlineVisibility /> :<MdOutlineVisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )
            }:null
        
        }
            />
        </Grid>
    );
};

export default Inputs;