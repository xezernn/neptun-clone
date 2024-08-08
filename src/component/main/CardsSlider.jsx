import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import { GoHeart } from "react-icons/go";
import { useContext, useState } from "react";
import { Cntx } from "../../context/DataContext";
import { Link, useParams } from "react-router-dom";
// import Error404 from '../error/Error404';

function CardsSlider() {
    const { data, wishList, setWishList } = useContext(Cntx);
    const { category } = useParams();
    const [count, setCount] = useState(12);
    console.log(category);

    // if (data) {
    //     const x =  Object.keys(data).findIndex((item => item == category))
    //     if (x == -1) return <Error404 />
    // }

    return (
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={0}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Navigation]}
                className='mySwiper my-4 lg:mx-0 mx-3'
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
                    },
                }}
            >
                {data ? console.log(data) : console.log("data yoxdu")}
                {data
                    ? [data].map((item, i) => (
                          <SwiperSlide key={i}>
                              <Link
                                  //   to={`${i + 1}`}
                                  className='text-center w-[180px] border rounded-md p-3 bg-white relative'
                              >
                                  <GoHeart
                                      onClick={() => {
                                          setWishList();
                                      }}
                                      className='absolute cursor-pointer top-3 right-3 text-[1.3em] text-[#FF8300]'
                                  />
                                  <img src={item.img} alt={item.title} />
                                  <h5 className='py-4 hover:text-[#FF8300] h-16 text-[.7em] font-semibold'>
                                      {item.title}
                                  </h5>
                                  <p className='font-bold text-[1.3em]'>
                                      {item.price} ₼
                                  </p>
                                  <div className='py-3'>
                                      <button className='font-bold text-[1.2em] text-[#FF8300]'>
                                          ‒
                                      </button>
                                      <span className='px-2'>1 ədəd</span>
                                      <button className='font-bold text-[1.2em] text-[#FF8300]'>
                                          ＋
                                      </button>
                                  </div>
                                  <button className='rounded-3xl bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3'>
                                      Səbətə at
                                  </button>
                              </Link>
                          </SwiperSlide>
                      ))
                    : "men yoxam"}
            </Swiper>
        </>
    );
}

export default CardsSlider;
