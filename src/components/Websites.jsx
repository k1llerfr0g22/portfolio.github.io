import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { VscArrowBoth } from "react-icons/vsc"
import "swiper/css"
import website1 from "../images/website1.png"
import website2 from "../images/website2.png"
import website3 from "../images/website3.png"
import website4 from "../images/website4.png"
import website5 from "../images/website5.png"
import website6 from "../images/website6.png"
import website7 from "../images/website7.png"
import loginWebsite from "../images/login_website.png"
import "../css/Websites.css"

export const Websites = () => {
  return (
    <div className="projects" id="Websites">
      <div className="w-text-con">
        <p className="w-text1">websites</p>
        <p className="w-text2">portfolio</p>
        <div className="p-info">
          <p className="p-text3">( Hold & Drag the projects to see more! </p>
          <div className="p-animated-arrow">
            <VscArrowBoth /> 
          </div> 
          <p className="p-closing-braces">)</p>
        </div>
      </div>

      <Swiper
      // install Swiper modules
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="swiper-con">
          <a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/k1llerfr0g22/old-websites/main/website1/home.html"  target="blank" className="swiper-link"><img src={website1} alt="" /></a>
          <p className="swiper-text">website1</p>
        </div>  
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-con">
          <a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/k1llerfr0g22/old-websites/main/website2/website1_home.html" target="blank" className="swiper-link"><img src={website2} alt="" /></a>
          <p className="swiper-text">website2</p>
        </div>  
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-con">
          <a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/k1llerfr0g22/old-websites/main/website3/website1_home.html" target="blank" className="swiper-link"><img src={website3} alt="" /></a>
          <p className="swiper-text">website3</p>
        </div>  
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-con">
          <a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/k1llerfr0g22/old-websites/main/website4/home.html" target="blank" className="swiper-link"><img src={website4} alt="" /></a>
          <p className="swiper-text">website4</p>
        </div>  
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-con">
          <a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/k1llerfr0g22/old-websites/main/website5/home.html" target="blank" className="swiper-link"><img src={website5} alt="" /></a>
          <p className="swiper-text">website5</p>
        </div>  
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-con">
          <a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/k1llerfr0g22/old-websites/main/website6/home.html" target="blank" className="swiper-link"><img src={website6} alt="" /></a>
          <p className="swiper-text">website6</p>
        </div>  
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-con">
          <a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/k1llerfr0g22/old-websites/main/website7/home.html" target="blank" className="swiper-link"><img src={website7} alt="" /></a>
          <p className="swiper-text">website7</p>
        </div>  
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-con">
          <a href="https://github.com/k1llerfr0g22/old-websites/blob/main/login-page/index.html" target="blank" className="swiper-link"><img src={loginWebsite} alt="" /></a>
          <p className="swiper-text">login-page</p>
        </div>  
      </SwiperSlide>
    </Swiper>
    </div> 
  );
}

