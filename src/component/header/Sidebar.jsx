import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cntx } from "../../context/DataContext";

function Sidebar({ sideSt }) {
    const { catalog } = useContext(Cntx);

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
                {
                    catalog && catalog.map((item, i) => {
                        const { name, submenu, icon, slug } = item;
                        return <li key={i} className="flex items-center gap-3 border-b p-2">
                            <div className="hs-accordion-group">
                                <div className="hs-accordion hs-accordion-active:border-gray-200 bg-white rounded-xl" id="hs-active-bordered-heading-one">
                                    <button className="hs-accordion-toggle p-2 text-gray-900 text-[.85em] hover:text-[#FF8300] inline-flex items-center gap-x-3 w-full" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-one">
                                        <img src={icon} alt={name} />
                                        <p>{name}</p>
                                        <svg className="hs-accordion-active:block hidden size-4 bg-[#FF8300] text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                        </svg>
                                    </button>
                                    <div id="hs-basic-active-bordered-collapse-one" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-active-bordered-heading-one">
                                        {
                                            submenu.length != 0
                                                ? submenu.map((item,i) => {
                                                    return <Link to={`/${slug}`} key={i} className="px-4 py-2 text-[.8em] hover:text-[#FF8300]">{item.slug}</Link>
                                                })
                                                : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
            {/* <ul>
                {
                    catalog && catalog.map((item, i) => {
                        const { name, submenu, icon, slug } = item;
                        return <li key={i} className="flex items-center gap-3 border-b p-2">
                            <img src={icon} alt={name} />
                            <p>{name}</p>
                            {
                                submenu.length != 0
                                    ? submenu.map(item => {
                                        return <div class="hs-accordion-group">
                                            <div class="hs-accordion hs-accordion-active:border-gray-200 bg-white rounded-xl" id="hs-active-bordered-heading-one">
                                                <button class="hs-accordion-toggle p-2 text-gray-900 text-[.85em] hover:text-[#FF8300] inline-flex justify-between items-center gap-x-3 w-full" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-one">
                                                    Kariyera
                                                    <svg class="hs-accordion-active:hidden block size-4 bg-[#FF8300] text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5v14"></path>
                                                    </svg>
                                                    <svg class="hs-accordion-active:block hidden size-4 bg-[#FF8300] text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                    </svg>
                                                </button>
                                                <div id="hs-basic-active-bordered-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-active-bordered-heading-one">
                                                    <p class="px-4 py-2 text-[.8em] hover:text-[#FF8300]">İşə qəbul proseduru</p>
                                                    <p class="px-4 py-2 text-[.8em] hover:text-[#FF8300]">Vakansiyalar</p>
                                                    <p class="px-4 py-2 text-[.8em] hover:text-[#FF8300]">CV yerləşdirin</p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                    : 'miyau'
                            }
                        </li>
                    })
                }
            </ul> */}
        </div>
    );
}

export default Sidebar;
