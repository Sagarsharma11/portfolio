"use client"
import React, { useRef, useState } from 'react';
import styles from "./Portfolio.module.css"
import Card from './components/Card'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Portfolio = () => {
  const data = [
    {
      link:"https://test.alphaworldtech.com/",
      path:"/image/portfolio/p (17).png"
    },
    {
      link:"https://reticulumeducon.com/",
      path:"/image/portfolio/p (18).png"
    },
    {
      link:"https://careerguidanceguru.com/",
      path:"/image/portfolio/p (19).png"
    },
    {
      link:"https://careerguidanceguru.com/",
      path:"/image/portfolio/p (20).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (21).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (1).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (2).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (3).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (4).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (5).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (6).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (7).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (8).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (9).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (10).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (11).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (12).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (13).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (14).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (15).png"
    },
    {
      link:"#",
      path:"/image/portfolio/p (16).png"
    },


  ]
  return (
    <div className={styles["Portfolio--container"]}>
      <h2 className={styles["title"]}>Portfolio</h2>
      <div className={styles["cards--container"]}>
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="portfolioSwiper"
            breakpoints={{
              375: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {
          
              data.map((ele, key) => (
                  <SwiperSlide key={key}>                  
                    <Card ele={ele} />
                  </SwiperSlide>
                ))
            }
          </Swiper>
        </>
      </div>
    </div>
  )
}

export default Portfolio