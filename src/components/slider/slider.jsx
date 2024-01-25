import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';
import PersonalCard from '../personalCard/personalCard';

// import required modules
import { Pagination } from 'swiper/modules';

import LeaderContext from '../../context/leader';
import { useContext } from 'react';


export default function Slider() {
  const leaderContext=useContext(LeaderContext)
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          leaderContext.leader.map((leader, index)=>{
            return(<SwiperSlide>
              <PersonalCard key={index} risk={leader.risk} name={leader.name} img={leader.avatar} roi={leader.ROI} copiers={leader.copiers} id={leader.id}/>
              </SwiperSlide> )
          })
        }
     
      </Swiper>
    </>
  );
}
