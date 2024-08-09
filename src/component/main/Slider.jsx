import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

function Slider() {
    return (
        <>
            <Swiper
                className='mySwiper mr-[0] py-2 w-[98vw] sm:w-[95vw]  md:w-[80vw] lg:w-[60vw]'
                navigation={true}
                pagination={true}
                effect={"fade"}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
            >
                <SwiperSlide className='w-[100%]'>
                    <a href=''>
                        <img
                            className='object-contain h-full w-full'
                            src='/public/banner1.webp'
                            alt='banner1'
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide className='w-[100%]'>
                    <a href=''>
                        <img
                            className='object-contain h-full w-full'
                            src='./src/assets/banner2.webp'
                            alt='banner2'
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide className='w-[100%]'>
                    <a href=''>
                        <img
                            className='object-contain h-full w-full'
                            src='./src/assets/banner3.webp'
                            alt='banner3'
                        />
                    </a>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
