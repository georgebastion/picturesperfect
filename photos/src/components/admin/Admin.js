import React, { useState} from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import FileBase from 'react-file-base64'
import { createImage } from '../../actions/images';
import './admin.scss'
import { updateImage } from '../../actions/images';
import { useEffect } from 'react';

const Admin = ( {currentid, setCurrentid}) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();
    const [files, setFiles] = useState({
        category:'', selectedFile:''
    })

    const post = useSelector((state)=>currentid ? state.images.find((p)=>p._id === currentid) : null);

    useEffect(()=>{
        if(post) setFiles(post);
    }, [post]);


    const handleSubmit=((e)=>{
        e.preventDefault();
            if(currentid){
                dispatch(updateImage(currentid, files))
            }else{
                if (files.category && files.selectedFile){
                    dispatch(createImage(files)) 
                } else{
                    alert('select category and file')
                }
            }
        clear();
    });

    const clear=(()=>{
        setCurrentid(null);
        setFiles({ category:'', selectedFile:'' });
    })
    return (
        <>
        {
            user ? (
                <div className='adminn'>
                    <h1>ADMIN</h1>
                    <form onSubmit={handleSubmit}>
                        <h4>{post? 'Update' : 'Upload'} Images</h4>
                        <FileBase multiple={false} type='file' onDone={({base64})=>setFiles({...files, selectedFile:base64})} />
                        <select className='' onChange={(e)=>setFiles({...files, category:e.target.value})}>
                            <option value=''>Select Category</option>
                            <option value='wedding'>Wedding</option>
                            <option value='branding'>branding</option>
                            <option value='studio'>studio</option>
                            <option value='outdoors'>outdoors</option>
                            <option value='featured'>featured</option>
                        </select>
                        <button className='btn-gradddd' type='submit'>{post? 'Update':'Submit'}</button>
                    </form>
                    
                </div>

            ):null}
   
        </>
    );
};

export default Admin;