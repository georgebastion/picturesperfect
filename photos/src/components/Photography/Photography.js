import React, { useRef, useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ReactImageAppear from 'react-image-appear';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./photography.scss";

import { FreeMode, Pagination } from "swiper";

import { photos } from './photos';
import { GiPhotoCamera, GiDoorHandle } from 'react-icons/gi';
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { BiPhotoAlbum } from 'react-icons/bi';
import {GrDocumentUpdate} from 'react-icons/gr';
import { AiOutlineDelete } from 'react-icons/ai';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { deleteImage } from "../../actions/images";

import Loader from '../loader/Loader'
import Nav from "../Nav/Nav";

const Photography = ({ setCurrentid }) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();
    const [updatedd, setUpdatedd] = useState(false);

    const images = useSelector((state)=> state.images)

    console.log(images)

    return (
        <div className="photographyy" id='photography' >
            <Nav />
                <h1>Photography</h1>
            
            <div className="packages">
                <div>
                    <h3>packages</h3>
                    <BiPhotoAlbum className="ppiconn" />
                </div>
                <div className="cardsp">
                    <h4>Studio</h4>
                    <GiPhotoCamera className="pkicon" />
                    <h6>Single photo: 100Ksh</h6>
                    <h6>Six photos: 500 Ksh</h6>
                    <button className="btn-gradd">Book</button>
                </div>
                <div className="cardsp">
                    <h4>Outdoor</h4>
                    <GiDoorHandle className="pkicon" />
                    <h6>Single photo: 100Ksh</h6>
                    <h6>Six photos: 500 Ksh</h6>
                    <button className="btn-gradd">Book</button>
                </div>
                <div className="cardsp">
                    <h4>Whole day</h4>
                    <BsFillCalendarDayFill className="pkicon" />
                    <h6>Four hours: 100Ksh</h6>
                    <h6>Eight hours: 500 Ksh</h6>
                    <button className="btn-gradd">Book</button>
                </div>
              
            </div>
            <div className="studioo">
                <h2 className="studioheader">Studio Photos</h2>
                {
                    images.length ? 
                        <Swiper
                            breakpoints={{
                                1000:{
                                    slidesPerView:4
                                },
                                500:{
                                    slidesPerView:2
                                },
                                200:{
                                    slidesPerView:1
                                }
                            }}
                            slidesPerView={5}
                            spaceBetween={5}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                            >
                                {
                                    images.map((pp)=>
                                    (
                                            pp.category === 'studio' ? 
                                            
                                                <SwiperSlide key={pp._id}>
                                                    <div className="studiopics">
                                                        {
                                                            user ?(
                                                                <div className="admIcons">
                                                                    <GrDocumentUpdate className="updateIcon" onClick={()=>setCurrentid(pp._id)} />
                                                                    <AiOutlineDelete className="updateIcon" onClick={()=>dispatch(deleteImage(pp._id))} />
                                                                </div>          
                                                            ):
                                                            null
                                                        }
                                                        <div className="piccs">
                                                                    <ReactImageAppear className="picc" src={pp.selectedFile} animation='zoomIn' Loader={<Loader />} alt='Studio Photos' />
                                                        </div>                              
                                                    </div>
                                                </SwiperSlide>
                                            : null
                                    )
                                    )
                                }
                        </Swiper>
                        : 
                    <Loader />
                }
                
            </div>

            <div className="studioo">
                <h2 className="studioheader">Wedding Photos</h2>
                {
                    images.length ? 
                        <Swiper
                            breakpoints={{
                                1000:{
                                    slidesPerView:4
                                },
                                500:{
                                    slidesPerView:2
                                },
                                200:{
                                    slidesPerView:1
                                }
                            }}
                            slidesPerView={5}
                            spaceBetween={5}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                            >
                                {
                                    images.map((pp)=>
                                    (
                                            pp.category === 'wedding' ? 
                                            
                                                <SwiperSlide key={pp._id}>
                                                    <div className="studiopics">
                                                        {
                                                            user ?(
                                                                <div className="admIcons">
                                                                    <GrDocumentUpdate className="updateIcon" onClick={()=>setCurrentid(pp._id)} />
                                                                    <AiOutlineDelete className="updateIcon" onClick={()=>dispatch(deleteImage(pp._id))} />
                                                                </div>          
                                                            ):
                                                            null
                                                        }
                                                        <div className="piccs">
                                                                    <ReactImageAppear className="picc" src={pp.selectedFile} animation='zoomIn' Loader={<Loader />} alt='Studio Photos' />
                                                        </div>                              
                                                    </div>
                                                </SwiperSlide>
                                            : null
                                    )
                                    )
                                }
                        </Swiper>
                        : 
                    <Loader />
                }
                
            </div>

            <div className="studioo">
                <h2 className="studioheader">Outdoor Photos</h2>
                {
                    images.length ? 
                        <Swiper
                            breakpoints={{
                                1000:{
                                    slidesPerView:4
                                },
                                500:{
                                    slidesPerView:2
                                },
                                200:{
                                    slidesPerView:1
                                }
                            }}
                            slidesPerView={5}
                            spaceBetween={5}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                            >
                                {
                                    images.map((pp)=>
                                    (
                                            pp.category === 'outdoors' ? 
                                            
                                                <SwiperSlide key={pp._id}>
                                                    <div className="studiopics">
                                                        {
                                                            user ?(
                                                                <div className="admIcons">
                                                                    <GrDocumentUpdate className="updateIcon" onClick={()=>setCurrentid(pp._id)} />
                                                                    <AiOutlineDelete className="updateIcon" onClick={()=>dispatch(deleteImage(pp._id))} />
                                                                </div>          
                                                            ):
                                                            null
                                                        }
                                                        <div className="piccs">
                                                                    <ReactImageAppear className="picc" src={pp.selectedFile} animation='zoomIn' Loader={<Loader />} alt='Studio Photos' />
                                                        </div>                              
                                                    </div>
                                                </SwiperSlide>
                                            : null
                                    )
                                    )
                                }
                        </Swiper>
                        : 
                    <Loader />
                }
                
            </div>
            
        </div>
    );
};

export default Photography;