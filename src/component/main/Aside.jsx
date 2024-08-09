import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

function Aside() {
    return (
        <aside className='pt-6 mb-5 sm:w-60 bg-white shadow-lg lg:block lg:w-[19vw] hidden'>
            <nav>
                <ul className='flex flex-col space-y-1'>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] relative dropdown'>
                        <img
                            src='../../assets/meyve-ve-terevez.svg'
                            alt='meyve-terevez'
                        />
                        <div className='flex justify-between items-center w-full relative'>
                            <p className='font-semibold text-[12px]'>
                                Meyvə, tərəvəz, quru meyvə
                            </p>
                            <GoChevronRight className='w-[13px]' />
                            <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] rounded-sm py-2 absolute left-[calc(100%+11px)]  top-[calc(100%-40px)] w-[10vw]'>
                                <li className='text-[.8em] py-2 px-3 hover:bg-[#ff84001c]'>
                                    <Link to='meyve'>Meyvə</Link>
                                </li>
                                <li className='text-[.8em] py-2 px-3 hover:bg-[#ff84001c]'>
                                    <Link to='terevez'>Tərəvəz</Link>
                                </li>
                                <li className='text-[.8em] py-2 px-3 hover:bg-[#ff84001c]'>
                                    <Link to='goyerti'>Göyərti</Link>
                                </li>
                                <li className='text-[.8em] py-2 px-3 hover:bg-[#ff84001c]'>
                                    <Link to='quru-meyve'>Quru meyvələr</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] relative dropdown'>
                        <img
                            src='./src/assets/et-ve-toyuq-mehsullari.svg'
                            alt='et'
                        />
                        <div className='flex justify-between items-center w-full relative'>
                            <p className='font-semibold text-[12px]'>
                                Ət, toyuq, dəniz məhsulları
                            </p>
                            <GoChevronRight className='w-[13px]' />
                            <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute left-[calc(100%+11px)]  top-[calc(100%-40px)] w-[10vw]'>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='mal-eti'>Ət</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='toyuq'>Toyuq</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='deniz-mehsullari'>
                                        Dəniz məhsulları
                                    </Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='yumurta'>Yumurta</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img src='./src/assets/Qastronom.svg' alt='qastronom' />
                        <div className='flex justify-between items-center w-full relative'>
                            <p className='font-semibold text-[12px]'>
                                Qastronom
                            </p>
                            <GoChevronRight className='w-[13px]' />
                            <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute left-[calc(100%+11px)]  top-[calc(100%-40px)] w-[10vw]'>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='kolbasa-sosisler'>
                                        Kolbasa və sosislər
                                    </Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='donmus-mehsullar'>
                                        Donmuş məshullar
                                    </Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='dondurma'>Dondurma</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img
                            src='./src/assets/erzaq-mehsullari.svg'
                            alt='ərzaq məhsulları'
                        />
                        <div className='flex justify-between items-center w-full relative'>
                            <p className='font-semibold text-[12px]'>
                                Ərzaq məhsulları
                            </p>
                            <GoChevronRight className='w-[13px]' />
                            <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute left-[calc(100%+11px)]  top-[calc(100%-40px)] w-[10vw]'>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='denliler'>Dənlilər</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='unlar'>Unlar</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='edviyyatlar'>Ədviyyatlar</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='souslar'>Souslar</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img
                            src='./src/assets/sirniyyat-cay-ve-qehve.svg'
                            alt='shirniyyat'
                        />
                        <div className='flex justify-between items-center w-full relative'>
                            <p className='font-semibold text-[12px]'>
                                Şirniyyat, çay, kofe, biabetik
                            </p>
                            <GoChevronRight className='w-[13px]' />
                            <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm absolute left-[calc(100%+11px)]  top-[calc(100%-40px)] w-[10vw]'>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='corek'>Çörək</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='saqqizlar'>Saqqızlar</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='sirniyyat'>Şirniyyat</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img src='./src/assets/ickiler.svg' alt='ichki' />
                        <div className='flex justify-between items-center w-full relative'>
                            <p className='font-semibold text-[12px]'>İçkilər</p>
                            <GoChevronRight className='w-[13px]' />
                            <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute left-[calc(100%+11px)]  top-[calc(100%-40px)] w-[10vw]'>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='cay'>Çay</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='kofe-kakao'>
                                        Kofe, kakao və s.
                                    </Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='meyve-sulari'>Meyvə suları</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img src='./src/assets/sud-mehsullari.svg' alt='sud' />
                        <div className='flex justify-between items-center w-full relative'>
                            <p className='font-semibold text-[12px]'>
                                Süd məhsulları
                            </p>
                            <GoChevronRight className='w-[13px]' />
                            <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute left-[calc(100%+11px)]  top-[calc(100%-40px)] w-[10vw]'>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='yaglar'>Yağlar</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='ayran'>Ayran</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='sud'>Südlər</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img
                            src='./src/assets/usaq-mehsullari.svg'
                            alt='ushaq'
                        />
                        <div className='flex justify-between items-center w-full relative'>
                            <p className='font-semibold text-[12px]'>
                                Uşaq məhsulları
                            </p>
                            <GoChevronRight className='w-[13px]' />
                            <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute left-[calc(100%+11px)]  top-[calc(100%-40px)] w-[10vw]'>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='oyuncaq'>Oyuncaqlar</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='usaq-bezleri'>Uşaq bezləri</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='usaq-levazimatlar'>
                                        Uşaq ləvazimatları
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img
                            src='./src/assets/yuyucu-vasiteler.svg'
                            alt='yuyucu'
                        />
                        <div className='flex justify-between items-center w-full relative'>
                            <p className='font-semibold text-[12px]'>
                                Yuyucu, təmizləyici vasitələr
                            </p>
                            <GoChevronRight className='w-[13px]' />
                            <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute left-[calc(100%+11px)]  top-[calc(100%-40px)] w-[10vw]'>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='paltarlar-ucun'>
                                        Paltarlar üçün
                                    </Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='qab-yumaq-ucun'>
                                        Qab yumaq üçün
                                    </Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='yuyucu-temizleyiciler'>
                                        Yuyucu, təmizləyicilər
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] dropdown relative'>
                        <img
                            src='./src/assets/kosmetik-ve-gigiyenik.svg'
                            alt='kosmetik'
                        />
                        <div className='flex justify-between items-center w-full relative'>
                            <p className='font-semibold text-[12px]'>
                                Kosmetik və gigiyenik
                            </p>
                            <GoChevronRight className='w-[13px]' />
                            <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] py-2 rounded-sm  absolute left-[calc(100%+11px)]  top-[calc(100%-40px)] w-[10vw]'>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='#'>Ətirlər</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='#'>Ağız baxımı</Link>
                                </li>
                                <li className='py-2 px-3 hover:bg-[#ff84001c] text-[.8em]'>
                                    <Link to='#'>Antiperspirant</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]'>
                        <img
                            src='./src/assets/meiset-metbex-ve-tekstil.svg'
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
                            src='./src/assets/heyvan-yemleri.svg'
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
                            src='./src/assets/elektronika-ve-mebel.svg'
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
