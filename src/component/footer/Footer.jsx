import React from "react";

function Footer() {
    return (
        <footer className='bg-[#FF8300] px-[2vw] text-white h-screen relative overflow-hidden'>
            <div className='text-[.7em] font-bold flex items-center text-center py-[20px] gap-[4vw]'>
                <div className='w-[30%]'>
                    <img
                        src='./src/assets/delivery.svg'
                        alt='neptun delivery'
                        className='mx-auto'
                    />
                    <h4 className='py-[10px]'>
                        Pulsuz çatdırılma 50 azn-dən yuxarı
                    </h4>
                </div>
                <div className='w-[30%]'>
                    <img
                        src='./src/assets/cash.svg'
                        alt='neptun cash'
                        className=' mx-auto'
                    />
                    <h4 className='py-[10px]'>Nağd və ya kartla ödəniş</h4>
                </div>
                <div className='w-[30%]'>
                    <img
                        src='./src/assets/gift.svg'
                        alt='neptun gift'
                        className='mx-auto'
                    />
                    <h4 className='py-[10px]'>Nağd və ya kartla ödəniş</h4>
                </div>
            </div>
            <div className=' w-[100%] absolute left-[60%] top-[10%] z-0'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='100%'
                    height='100%'
                    viewBox='0 0 442.03 565'
                    fill='#fff'
                >
                    <path
                        id='symbol'
                        className='cls-1'
                        d='M1220.94,3035.86a168.127,168.127,0,0,0-101.87,34.66c-25.9-22.53-59.57-35.53-98.41-35.53h-11.23A60.72,60.72,0,0,0,949,3095.65c0,32.93,26.763,60.66,60.429,60.66h11.23c21.58,0,31.94,18.19,31.94,37.26v172.44a60.907,60.907,0,0,0,61.29,60.66c33.67,0,60.44-27.73,60.44-60.66V3206.57c0-26,21.58-47.66,47.48-47.66s47.48,21.66,47.48,47.66v159.44c0,32.93,26.76,60.66,60.43,60.66a60.916,60.916,0,0,0,61.3-60.66V3206.57C1390.15,3111.25,1314.18,3035.86,1220.94,3035.86Zm-107.91,442.81a60.655,60.655,0,1,1-60.43,60.66A60.536,60.536,0,0,1,1113.03,3478.67Zm215.83,0a60.655,60.655,0,1,1-60.43,60.66A60.543,60.543,0,0,1,1328.86,3478.67Z'
                        transform='translate(-949 -3035)'
                    ></path>
                </svg>
            </div>
            <div className='p-[20px]'>
                <form action=''>
                    <h3 className='text-[.7em] font-bold py-[10px]'>
                        Bizə abunə olun
                    </h3>
                    <div className='relative w-[75vw] lg:w-[30vw]'>
                        <input
                            type='search'
                            name='Search'
                            placeholder='e-poçt ünvanınız... '
                            className='py-[10px]  w-[100%] pl-[10px] text-black text-[.8rem] text-sm bg-white rounded-[30px] focus:outline-none border-[1px] '
                        />
                        <button
                            onClick={(e) => e.preventDefault()}
                            className='text-white text-[.9em] bg-[#FF8300] rounded-[30px] py-[8px] sm:py-[10px] px-[15px] font-bold absolute right-[3px] top-[2px] '
                        >
                            Abunə ol
                        </button>
                    </div>
                </form>
                <form action=''>
                    <h3 className='text-[.7em] font-bold py-[10px]'>
                        Sms xəbərdarlıq üçün
                    </h3>
                    <div className='flex justify-between pr-[25px]'>
                        <select className='py-[10px]  w-[20vw] pl-[10px] text-[#808080] text-[.9rem] text-sm bg-white rounded-[30px] focus:outline-none border-[1px] '>
                            <option value='' defaultValue={'---'}>
                                ---
                            </option>
                            <option value=''>
                                050
                            </option>
                            <option value=''>
                                051
                            </option>
                            <option value=''>
                                055
                            </option>
                            <option value=''>
                                070
                            </option>
                            <option value=''>
                                077
                            </option>
                        </select>
                        <div className='relative w-[50vw] lg:w-[30vw]'>
                            <input
                                type='search'
                                name='Search'
                                placeholder='XXX YY ZZ'
                                className='py-[10px]  w-[100%] pl-[10px] text-black text-[.9rem] text-sm bg-white rounded-[30px] focus:outline-none border-[1px] '
                            />
                            <button
                                onClick={(e) => e.preventDefault()}
                                className='text-white text-[.9em] bg-[#FF8300] rounded-[30px] py-[8px] sm:py-[10px] px-[15px] font-bold absolute right-[3px] top-[2px] '
                            >
                                Abunə ol
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </footer>
    );
}

export default Footer;
