import Aside from "./Aside";
import CardsSlider from "./CardsSlider";
import Slider from "./Slider";
import { FaArrowRightLong } from "react-icons/fa6";

function Main() {
    return (
        <main className='bg-slate-50'>
            <div className='wrapper-md'>
                <div className='flex gap-1'>
                    <Aside />
                    <div className='mx-auto mt-0 lg:ml-0 lg:flex flex-col items-end w-[100%]'>
                        <Slider />
                        <div className='flex gap-3 justify-between py-3'>
                            <div className='lg:w-[20vw] '>
                                <div className='lg:w-[20vw]'>
                                    <a href=''>
                                        <img
                                            className='object-cover w-full'
                                            src='./src/assets/azn-50.png'
                                            alt='50to50'
                                        />
                                    </a>
                                </div>
                                <div className='flex justify-between items-center bg-white py-2 px-5'>
                                    <p className='text-[13px] font-semibold'>
                                        50 azn 50 Bonus
                                    </p>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='lg:w-[20vw] '>
                                <div className='lg:w-[20vw]'>
                                    <a href=''>
                                        <img
                                            className='object-cover w-full'
                                            src='./src/assets/nes-cake.jpg'
                                            alt='endirim'
                                        />
                                    </a>
                                </div>
                                <div className='flex justify-between items-center bg-white py-2 px-5'>
                                    <p className='text-[13px] font-semibold'>
                                        Neptunda Dadlı Endirimlər!
                                    </p>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                            <div className='w-[20vw] lg:block hidden'>
                                <div className='w-[20vw]'>
                                    <a href=''>
                                        <img
                                            className='object-cover w-full'
                                            src='./src/assets/heftesonu-banner.png'
                                            alt='heftesonuendirim'
                                        />
                                    </a>
                                </div>
                                <div className='flex justify-between items-center bg-white py-2 px-5'>
                                    <p className='text-[13px] font-semibold'>
                                        Həftəsonu Endirimləri Neptunda!
                                    </p>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className='flex justify-between items-center p-4'>
                        <h3 className='font-bold'>Ən çox satılanlar</h3>
                        <a href='#' className='text-[#FF8300]'>
                            Hamısına bax
                        </a>
                    </div>
                    <CardsSlider />
                </section>
            </div>
        </main>
    );
}

export default Main;
