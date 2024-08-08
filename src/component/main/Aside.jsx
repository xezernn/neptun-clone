import { GoChevronRight } from "react-icons/go";
function Aside() {
    return (
        <aside className='pt-6 mb-5 sm:w-60 bg-white shadow-lg lg:block lg:w-[19vw] hidden'>
            <nav>
                <ul className='flex flex-col space-y-1'>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] relative dropdown'>
                        <img
                            src='./src/assets/Meyvə-və-tərəvəz.svg'
                            alt='meyve-terevez'
                        />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Meyvə, tərəvəz, quru meyvə
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                        <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] rounded-sm py-2 absolute right-[-153px] top-[calc(100%-40px)] w-[10vw]'>
                            <li className="text-[.8em] py-2 px-3 hover:bg-[#ff84001c]"><a href='#'>Meyvə</a></li>
                            <li className="text-[.8em] py-2 px-3 hover:bg-[#ff84001c]"><a href='#'>Tərəvəz</a></li>
                            <li className="text-[.8em] py-2 px-3 hover:bg-[#ff84001c]"><a href='#'>Göyərti</a></li>
                            <li className="text-[.8em] py-2 px-3 hover:bg-[#ff84001c]"><a href='#'>Quru meyvələr</a></li>
                        </ul>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] relative dropdown'>
                        <img
                            src='./src/assets/ət-və-toyuq məhsulları.svg'
                            alt='et'
                        />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Ət, toyuq, dəniz məhsulları
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                        <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute right-[-153px] top-[calc(100%-40px)] w-[10vw]'>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Ət</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Toyuq</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Dəniz məhsulları</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Yumurta</a></li>
                        </ul>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img src='./src/assets/Qastronom.svg' alt='qastronom' />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Qastronom
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                        <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute right-[-153px] top-[calc(100%-40px)] w-[10vw]'>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Kolbasa və sosislər</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Donmuş məshullar</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Dondurma</a></li>
                        </ul>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img src='./src/assets/ərzaq məhsulları.svg' alt='' />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Ərzaq məhsulları
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                        <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute right-[-153px] top-[calc(100%-40px)] w-[10vw]'>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Dənlilər</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Unlar</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Ədviyyatlar</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Souslar</a></li>
                        </ul>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img
                            src='./src/assets/Şirniyyat-çay-və qəhvə.svg'
                            alt='shirniyyat'
                        />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Şirniyyat, çay, kofe, biabetik
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                        <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm absolute right-[-153px] top-[calc(100%-40px)] w-[10vw]'>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Çörək</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Saqqızlar</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Şirniyyat</a></li>
                        </ul>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img src='./src/assets/İçkilər.svg' alt='ichki' />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>İçkilər</p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                        <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute right-[-153px] top-[calc(100%-40px)] w-[10vw]'>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Çay</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Kofe, kakao və s.</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Meyvə suları</a></li>
                        </ul>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img src='./src/assets/Süd-məhsulları.svg' alt='sud' />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Süd məhsulları
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                        <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute right-[-153px] top-[calc(100%-40px)] w-[10vw]'>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Yağlar</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Ayran</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Südlər</a></li>
                        </ul>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img
                            src='./src/assets/Uşaq-məhsulları.svg'
                            alt='ushaq'
                        />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Uşaq məhsulları
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                        <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute right-[-153px] top-[calc(100%-40px)] w-[10vw]'>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Oyuncaqlar</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Uşaq bezləri</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Uşaq ləvazimatları</a></li>
                        </ul>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img src='./src/assets/Yuyucu-vasitələr.svg' alt='yuyucu' />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Yuyucu, təmizləyici vasitələr
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                        <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute right-[-153px] top-[calc(100%-40px)] w-[10vw]'>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Paltarlar üçün</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Qab yumaq üçün</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Yuyucu, təmizləyicilər</a></li>
                        </ul>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img
                            src='./src/assets/Kosmetik-və-gigiyenik.svg'
                            alt='kosmetik'
                        />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Kosmetik və gigiyenik
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                        <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute right-[-153px] top-[calc(100%-40px)] w-[10vw]'>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Ətirlər</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Ağız baxımı</a></li>
                            <li className="py-2 px-3 hover:bg-[#ff84001c] text-[.8em]"><a href='#'>Antiperspirant</a></li>
                        </ul>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]'>
                        <img
                            src='./src/assets/Məişət-mətbəx-və-tekstil.svg'
                            alt='meiset'
                        />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Məişət, mətbəx, tekstil
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]'>
                        <img
                            src='./src/assets/Konselyariya.svg'
                            alt='konselyariya'
                        />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Konselyariya
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]'>
                        <img
                            src='./src/assets/Heyvan-yemləri.svg'
                            alt='heyvan'
                        />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Heyvan yemləri
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center py-2 hover:bg-[#ff84004e]'>
                        <img
                            src='./src/assets/neptun-icon.svg'
                            alt='neptunda'
                        />
                        <p className='font-semibold text-[12px]'>
                            Yalnız Neptunda
                        </p>
                    </li>
                    <li className='flex px-3 gap-3 items-center py-2 hover:bg-[#ff84004e]'>
                        <img
                            src='./src/assets/elektronika-və-mebel.svg'
                            alt='elektronika'
                        />
                        <div className='flex justify-between items-center w-full'>
                            <p className='font-semibold text-[12px]'>
                                Elektronika & Mebel
                            </p>
                            <GoChevronRight className='w-[13px]' />
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center py-2 bg-[#FF8300] text-white'>
                        <img src='./src/assets/Aksiyalar.svg' alt='kampaniya' />
                        <p className='font-semibold text-[12px]'>
                            Kampaniyalar
                        </p>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;
