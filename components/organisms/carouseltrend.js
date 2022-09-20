import React from "react";
import Image from "next/image";
import StyleHome from "../../styles/Home.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Navigation, Mousewheel, Keyboard } from "swiper";

function Carouseltrend() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={8}
        freeMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, FreeMode, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card">
            <Image
              src="/image/gambar1.png"
              alt="Logo"
              width={350}
              height={120}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-4">Trends in 2020</h5>              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              src="/image/gambar2.jpg"
              alt="Logo"
              width={350}
              height={120}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-4">Black edition</h5>              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              src="/image/gambar3.jpg"
              alt="Logo"
              width={350}
              height={120}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-4">Trends in 2022</h5>              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              src="/image/gambar1.png"
              alt="Logo"
              width={350}
              height={120}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-4">Trends in 2020</h5>              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              src="/image/gambar2.jpg"
              alt="Logo"
              width={350}
              height={120}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-4">Black edition</h5>              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              src="/image/gambar3.jpg"
              alt="Logo"
              width={350}
              height={120}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-4">Trends in 2022</h5>              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              src="/image/gambar1.png"
              alt="Logo"
              width={350}
              height={120}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-4">Trends in 2020</h5>              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              src="/image/gambar2.jpg"
              alt="Logo"
              width={350}
              height={120}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-4">Black edition</h5>              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              src="/image/gambar3.jpg"
              alt="Logo"
              width={350}
              height={120}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-4">Trends in 2022</h5>              
            </div>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
}

export default Carouseltrend;
