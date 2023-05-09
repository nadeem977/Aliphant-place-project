import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography} from "@mui/material";
import { cards } from '../../assets/data'
import "swiper/css";
import "swiper/css/pagination";

import './card.css'



import { Pagination } from "swiper";

const Card = () => {

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
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1450: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{paddingBottom:'2rem'}}
      >
      {cards.map((item)=>(


        <SwiperSlide key={item.key} style={{display:'felx',flexDirection:'column',padding:'1rem',borderRadius:'10px',background:'#fff'}}>
          <Box variant='div' style={{display:'flex',margin:'1rem auto',gap:'10px'}}>
          <img src={item.img} alt="" style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
          <Typography variant="span">
          <Typography variant="h6" style={{width:'150px',color:'#005494',fontSize:'20px',fontWeight:'700'}}> 
            {item.name}
          </Typography>
          <Typography variant="small" color="#949494" style={{fontSize:'14px'}}> ,
            {item.sml}
          </Typography>
          </Typography>
          </Box>
        
          <Box variant='div' >
          <Typography variant="p" color="#949494" style={{fontSize:'14px'}}>
          {item.desc}
          </Typography>
          </Box>
        </SwiperSlide>
          ))}

      </Swiper>
    </>
  );
}

export default Card