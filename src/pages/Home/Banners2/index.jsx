import React, { memo } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { BannersWrapper } from "./style";

function Banners({bannerslist}) {
    console.log(bannerslist,'oooo')
    const renderBanners = () => {
        let items = bannerslist;
        return items && items.map(item => {
            return (
                <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            >
            <SwiperSlide key={item.bid}>
                <img src={item.bpic} />
            </SwiperSlide>
        </Swiper>
        )
    })
    }
   
    return (
      <BannersWrapper>
        {renderBanners()}
      </BannersWrapper>
    );
}


export default memo(Banners)