import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ sideSt }) {
    sideSt
        ? ((document.documentElement.style.overflow = "hidden"),
            (document.body.style.overflow = "hidden"))
        : ((document.documentElement.style.overflow = ""),
            (document.body.style.overflow = ""));
    return (
        <div
            className={`${sideSt ? "translate-x-0" : "translate-x-[-120%]"
                } p-[2vw] fixed bg-white z-[1000] w-[80vw] h-[80vh] bottom-0 transition overflow-auto `}
        >
            <ul>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/meyve-ve-terevez.svg'
                            alt='meyve-terevez'
                        />
                        Meyvə, tərəvəz, quru meyvə
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/et-ve-toyuq-mehsullari.svg'
                            alt='et'
                        />
                        Ət, toyuq, dəniz məhsulları
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img src='./src/assets/Qastronom.svg' alt='qastronom' />
                        Qastronom
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/erzaq-mehsullari.svg'
                            alt='erzaq mehsullari'
                        />
                        Ərzaq məhsulları
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/sirniyyat-cay-ve-qehve.svg'
                            alt='shirniyyat'
                        />
                        Şirniyyat, çay, kofe, biabetik
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img src='./src/assets/ickiler.svg' alt='ichki' />
                        İçkilər
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img src='./src/assets/sud-mehsullari.svg' alt='sud' />
                        Süd məhsulları
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/usaq-mehsullari.svg'
                            alt='ushaq'
                        />
                        Uşaq məhsulları
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/yuyucu-vasiteler.svg'
                            alt='yuyucu'
                        />
                        Yuyucu, təmizləyici vasitələr
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/kosmetik-ve-gigiyenik.svg'
                            alt='kosmetik'
                        />
                        Kosmetik və gigiyenik
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/meiset-metbex-ve-tekstil.svg'
                            alt='meiset'
                        />
                        Məişət, mətbəx, tekstil
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/Konselyariya.svg'
                            alt='konselyariya'
                        />
                        Konselyariya
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/heyvan-yemleri.svg'
                            alt='heyvan'
                        />
                        Heyvan yemləri
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/neptun-icon.svg'
                            alt='neptunda'
                        />
                        Yalnız Neptunda
                    </Link>
                </li>
                <li>
                    <Link
                        to=''
                        className='hover:text-[#FF8300] transition flex items-center gap-[1vw] m-[3vw] px-[1vw]'
                    >
                        <img
                            src='./src/assets/elektronika-ve-mebel.svg'
                            alt='elektronika'
                        />
                        Elektronika & Mebel
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
