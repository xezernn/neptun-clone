import { GoChevronRight } from "react-icons/go";
import Slider from "./Slider";
import { FaArrowRightLong } from "react-icons/fa6";
function Main() {
    return (
        <main className="bg-slate-50">
            <div className="wrapper flex gap-4">
                <aside className="w-full pt-6 mb-5 sm:w-60 bg-white shadow-lg lg:block hidden">
                    <nav>
                        <ul className="flex flex-col space-y-1">
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/Meyvə-və-tərəvəz.svg" alt="meyve-terevez" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Meyvə, tərəvəz, quru meyvə</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/ət-və-toyuq məhsulları.svg" alt="et" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Ət, toyuq, dəniz məhsulları</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/Qastronom.svg" alt="qastronom" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Qastronom</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/ərzaq məhsulları.svg" alt="" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Ərzaq məhsulları</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/Şirniyyat-çay-və qəhvə.svg" alt="shirniyyat" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Şirniyyat, çay, kofe, biabetik</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/İçkilər.svg" alt="ichki" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">İçkilər</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/Süd-məhsulları.svg" alt="sud" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Süd məhsulları</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/Meyvə-və-tərəvəz.svg" alt="ushaq" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Uşaq məhsulları</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/Meyvə-və-tərəvəz.svg" alt="" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Yuyucu, təmizləyici vasitələr</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/Kosmetik-və-gigiyenik.svg" alt="kosmetik" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Kosmetik və gigiyenik</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/Məişət-mətbəx-və-tekstil.svg" alt="meiset" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Məişət, mətbəx, tekstil</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/Konselyariya.svg" alt="konselyariya" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Konselyariya</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/Heyvan-yemləri.svg" alt="heyvan" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Heyvan yemləri</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/neptun-icon.svg" alt="neptunda" />
                                <p className="font-semibold text-[13px]">Yalnız Neptunda</p>
                            </li>
                            <li className="flex px-3 gap-3 items-center py-2 hover:bg-[#ff84004e]">
                                <img src="./src/assets/elektronika-və-mebel.svg" alt="elektronika" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[13px]">Elektronika & Mebel</p>
                                    <GoChevronRight className="w-[13px]" />
                                </div>
                            </li>
                            <li className="flex px-3 gap-3 items-center py-2 bg-[#FF8300] text-white">
                                <img src="./src/assets/Aksiyalar.svg" alt="kampaniya" />
                                <p className="font-semibold text-[13px]">Kampaniyalar</p>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <div className="m-auto">
                    <Slider />
                    <div className="flex gap-3 py-3">
                        <div className="lg:w-[20vw] w-[40vw]">
                            <div className="lg:w-[20vw] w-[40vw]"><a href=""><img className="object-cover w-full" src="./src/assets/50-azn-50.png" alt="50to50" /></a></div>
                            <div className="flex justify-between items-center bg-white py-2 px-5">
                                <p className="text-[13px] font-semibold">50 azn 50 Bonus</p>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div className="lg:w-[20vw] w-[40vw]">
                            <div className="lg:w-[20vw] w-[40vw]"><a href=""><img className="object-cover w-full" src="./src/assets/nes-cake.jpg" alt="endirim" /></a></div>
                            <div className="flex justify-between items-center bg-white py-2 px-5">
                                <p className="text-[13px] font-semibold">Neptunda Dadlı Endirimlər!</p>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div className="w-[20vw] lg:block hidden">
                            <div className="w-[20vw]"><a href=""><img className="object-cover w-full" src="./src/assets/heftesonu-banner.png" alt="heftesonuendirim" /></a></div>
                            <div className="flex justify-between items-center bg-white py-2 px-5">
                                <p className="text-[13px] font-semibold">Həftəsonu Endirimləri Neptunda!</p>
                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
