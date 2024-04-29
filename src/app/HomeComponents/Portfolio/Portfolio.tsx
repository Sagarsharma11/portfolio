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
              Array.from({ length: 3 }, (_, i) => i + 1)
                .map((_, key) => (
                  <SwiperSlide key={key}>                  
                    <Card />
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