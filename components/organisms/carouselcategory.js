import React from 'react'
import Image from "next/image";
import StyleHome from "../../styles/Home.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode } from "swiper";
import { Navigation, Mousewheel, Keyboard } from "swiper";



function Carouselcategory() {
  return (
    <>
    <h1 className='pt-3 mb-0'>Category</h1>
    <small>What are you currently looking for</small>
    <Swiper
        slidesPerView={5}
        spaceBetween={20}
        freeMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, FreeMode, Mousewheel, Keyboard]}
        className="mySwiper pt-3"
      >
        <SwiperSlide>
        <Image src="/image/gambar1.png" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/image/gambar2.jpg" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/image/gambar3.jpg" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/image/gambar1.png" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/image/gambar2.jpg" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/image/gambar3.jpg" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/image/gambar1.png" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/image/gambar2.jpg" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/image/gambar3.jpg" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/image/gambar1.png" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/image/gambar2.jpg" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/image/gambar3.jpg" alt="Logo" width={200} height={200} className={StyleHome.imgCarousel}/>
        </SwiperSlide>
        
        
      </Swiper>
    </>
  )
}

export default Carouselcategory