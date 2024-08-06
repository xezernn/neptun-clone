import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import { GoHeart } from "react-icons/go";
import { useContext } from 'react';
import { Cntx } from '../../context/DataContext';

function CardsSlider() {
    const {data, wishList, setWishList} = useContext(Cntx)
    
    return (
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={0}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Navigation]}
                className="mySwiper my-4 lg:mx-0 mx-3"
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    }}
                }
            >
                <SwiperSlide>
                    <div className="text-center w-[180px] border rounded-md p-3 bg-white relative">
                        <GoHeart className='absolute top-3 right-3 text-[1.3em] text-[#FF8300]'/>
                        <img src="https://neptun.az/image/cache/webp/logo-120x120.webp?v=9" alt="" />
                        <h5 className="py-4 hover:text-[#FF8300] text-[1em]">Lorem ipsum dolor, sit amet  elit.</h5>
                        <p className="font-bold text-[1.3em]">2.68 ₼</p>
                        <div className="py-3">
                            <button className="font-bold text-[1.2em] text-[#FF8300]">‒</button>
                            <span className="px-2">1 ədəd</span>
                            <button className="font-bold text-[1.2em] text-[#FF8300]">＋</button>
                        </div>
                        <button className="rounded-3xl bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3">Səbətə at</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center w-[180px] border rounded-md p-3 bg-white relative">
                        <GoHeart className='absolute top-3 right-3 text-[1.3em] text-[#FF8300]'/>
                        <img src="https://neptun.az/image/cache/webp/logo-120x120.webp?v=9" alt="" />
                        <h5 className="py-4 hover:text-[#FF8300] text-[1em]">Lorem ipsum dolor, sit amet  elit.</h5>
                        <p className="font-bold text-[1.3em]">2.68 ₼</p>
                        <div className="py-3">
                            <button className="font-bold text-[1.2em] text-[#FF8300]">‒</button>
                            <span className="px-2">1 ədəd</span>
                            <button className="font-bold text-[1.2em] text-[#FF8300]">＋</button>
                        </div>
                        <button className="rounded-3xl bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3">Səbətə at</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center w-[180px] border rounded-md p-3 bg-white relative">
                        <GoHeart className='absolute top-3 right-3 text-[1.3em] text-[#FF8300]'/>
                        <img src="https://neptun.az/image/cache/webp/logo-120x120.webp?v=9" alt="" />
                        <h5 className="py-4 hover:text-[#FF8300] text-[1em]">Lorem ipsum dolor, sit amet  elit.</h5>
                        <p className="font-bold text-[1.3em]">2.68 ₼</p>
                        <div className="py-3">
                            <button className="font-bold text-[1.2em] text-[#FF8300]">‒</button>
                            <span className="px-2">1 ədəd</span>
                            <button className="font-bold text-[1.2em] text-[#FF8300]">＋</button>
                        </div>
                        <button className="rounded-3xl bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3">Səbətə at</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center w-[180px] border rounded-md p-3 bg-white relative">
                        <GoHeart className='absolute top-3 right-3 text-[1.3em] text-[#FF8300]'/>
                        <img src="https://neptun.az/image/cache/webp/logo-120x120.webp?v=9" alt="" />
                        <h5 className="py-4 hover:text-[#FF8300] text-[1em]">Lorem ipsum dolor, sit amet  elit.</h5>
                        <p className="font-bold text-[1.3em]">2.68 ₼</p>
                        <div className="py-3">
                            <button className="font-bold text-[1.2em] text-[#FF8300]">‒</button>
                            <span className="px-2">1 ədəd</span>
                            <button className="font-bold text-[1.2em] text-[#FF8300]">＋</button>
                        </div>
                        <button className="rounded-3xl bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3">Səbətə at</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center w-[180px] border rounded-md p-3 bg-white relative">
                        <GoHeart className='absolute top-3 right-3 text-[1.3em] text-[#FF8300]'/>
                        <img src="https://neptun.az/image/cache/webp/logo-120x120.webp?v=9" alt="" />
                        <h5 className="py-4 hover:text-[#FF8300] text-[1em]">Lorem ipsum dolor, sit amet  elit.</h5>
                        <p className="font-bold text-[1.3em]">2.68 ₼</p>
                        <div className="py-3">
                            <button className="font-bold text-[1.2em] text-[#FF8300]">‒</button>
                            <span className="px-2">1 ədəd</span>
                            <button className="font-bold text-[1.2em] text-[#FF8300]">＋</button>
                        </div>
                        <button className="rounded-3xl bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3">Səbətə at</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center w-[180px] border rounded-md p-3 bg-white relative">
                        <GoHeart className='absolute top-3 right-3 text-[1.3em] text-[#FF8300]'/>
                        <img src="https://neptun.az/image/cache/webp/logo-120x120.webp?v=9" alt="" />
                        <h5 className="py-4 hover:text-[#FF8300] text-[1em]">Lorem ipsum dolor, sit amet  elit.</h5>
                        <p className="font-bold text-[1.3em]">2.68 ₼</p>
                        <div className="py-3">
                            <button className="font-bold text-[1.2em] text-[#FF8300]">‒</button>
                            <span className="px-2">1 ədəd</span>
                            <button className="font-bold text-[1.2em] text-[#FF8300]">＋</button>
                        </div>
                        <button className="rounded-3xl bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3">Səbətə at</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center w-[180px] border rounded-md p-3 bg-white relative">
                        <GoHeart className='absolute top-3 right-3 text-[1.3em] text-[#FF8300]'/>
                        <img src="https://neptun.az/image/cache/webp/logo-120x120.webp?v=9" alt="" />
                        <h5 className="py-4 hover:text-[#FF8300] text-[1em]">Lorem ipsum dolor, sit amet  elit.</h5>
                        <p className="font-bold text-[1.3em]">2.68 ₼</p>
                        <div className="py-3">
                            <button className="font-bold text-[1.2em] text-[#FF8300]">‒</button>
                            <span className="px-2">1 ədəd</span>
                            <button className="font-bold text-[1.2em] text-[#FF8300]">＋</button>
                        </div>
                        <button className="rounded-3xl bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3">Səbətə at</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center w-[180px] border rounded-md p-3 bg-white relative">
                        <GoHeart className='absolute top-3 right-3 text-[1.3em] text-[#FF8300]'/>
                        <img src="https://neptun.az/image/cache/webp/logo-120x120.webp?v=9" alt="" />
                        <h5 className="py-4 hover:text-[#FF8300] text-[1em]">Lorem ipsum dolor, sit amet  elit.</h5>
                        <p className="font-bold text-[1.3em]">2.68 ₼</p>
                        <div className="py-3">
                            <button className="font-bold text-[1.2em] text-[#FF8300]">‒</button>
                            <span className="px-2">1 ədəd</span>
                            <button className="font-bold text-[1.2em] text-[#FF8300]">＋</button>
                        </div>
                        <button className="rounded-3xl bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3">Səbətə at</button>
                    </div>
                </SwiperSlide>
                

            </Swiper>
        </>
    )
}

export default CardsSlider