import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
function Slider() {
    return (
        <>
            <Swiper
                className="mySwiper h-[55vh] py-4 w-[60vw]"
                navigation={true}
                pagination={true}
                effect={'fade'}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
            >
                <SwiperSlide>
                    <a href=""><img className='object-contain h-full w-full' src="https://neptun.az/image/cache/webp/catalog/06.12.2024/esasbanner-1130x413.webp?v=9" alt="banner1" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href=""><img className='object-contain h-full w-full' src="https://neptun.az/image/cache/webp/catalog/2.2024/esas-1130x413.webp?v=9" alt="banner2" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href=""><img className='object-contain h-full w-full' src="https://neptun.az/image/cache/webp/catalog/2.2024/heftesonu-banner-cover2-1130x413.webp?v=9" alt="banner3" /></a>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider