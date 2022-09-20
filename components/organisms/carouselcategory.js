import React from "react";
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
      <h1 className="pt-3 mb-0">Category</h1>
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
          <div className={`${StyleHome.bgMaroon} card`}>
            <Image
              src="/image/hiclipart15.png"
              alt="Logo"
              width={200}
              height={200}
              className={StyleHome.imgCategory}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-5">T-Shirt</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${StyleHome.bgBlue} card`}>
            <Image
              src="/image/hiclipart21.png"
              alt="Logo"
              width={200}
              height={200}
              className={StyleHome.imgCategory}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-5">Shorts</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${StyleHome.bgOrange} card`}>
            <Image
              src="/image/hiclipart22.png"
              alt="Logo"
              width={200}
              height={200}
              className={StyleHome.imgCategory}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-5">Jacket</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${StyleHome.bgPink} card`}>
            <Image
              src="/image/hiclipart26.png"
              alt="Logo"
              width={200}
              height={200}
              className={StyleHome.imgCategory}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-5">Pants</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${StyleHome.bgCyan} card`}>
            <Image
              src="/image/hiclipart34.png"
              alt="Logo"
              width={200}
              height={200}
              className={StyleHome.imgCategory}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-5">Shoes</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${StyleHome.bgMaroon} card`}>
            <Image
              src="/image/hiclipart15.png"
              alt="Logo"
              width={200}
              height={200}
              className={StyleHome.imgCategory}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-5">T-Shirt</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${StyleHome.bgBlue} card`}>
            <Image
              src="/image/hiclipart21.png"
              alt="Logo"
              width={200}
              height={200}
              className={StyleHome.imgCategory}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-5">Shorts</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${StyleHome.bgOrange} card`}>
            <Image
              src="/image/hiclipart22.png"
              alt="Logo"
              width={200}
              height={200}
              className={StyleHome.imgCategory}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-5">Jacket</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${StyleHome.bgPink} card`}>
            <Image
              src="/image/hiclipart26.png"
              alt="Logo"
              width={200}
              height={200}
              className={StyleHome.imgCategory}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-5">Pants</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${StyleHome.bgCyan} card`}>
            <Image
              src="/image/hiclipart34.png"
              alt="Logo"
              width={200}
              height={200}
              className={StyleHome.imgCategory}
            />
            <div className="card-img-overlay">
              <h5 className="card-title text-white pt-5">Shoes</h5>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default Carouselcategory;
