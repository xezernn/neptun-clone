import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cntx } from "../../context/DataContext";

function Sidebar({ sideSt, setSideSt }) {

    const { catalog } = useContext(Cntx);
    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    sideSt
        ? ((document.documentElement.style.overflow = "hidden"),
          (document.body.style.overflow = "hidden"))
        : ((document.documentElement.style.overflow = ""),
          (document.body.style.overflow = ""));
    return (
        <nav
            className={`${
                sideSt ? "translate-x-0" : "translate-x-[-120%]"
            } p-[2vw] fixed bg-white z-[1000] h-[calc(100%-150px)] w-[70vw] lg:hidden bottom-0 transition overflow-auto `}
        >
            {catalog &&
                catalog.map((item, i) => {
                    const { name, submenu, icon, slug } = item;
                    return (
                        <div key={i}>
                            <button className='flex items-center gap-3 border-b p-2 accordion'>
                                <img
                                    src={icon}
                                    alt={name}
                                    className='w-6 h-6'
                                />
                                <p>{name}</p>
                            </button>

                            {submenu && submenu.length > 0 && (
                                <div className='panel'>
                                    {submenu.map((elem, j) => (
                                       <Link  
                                       onClick={() => setSideSt(false)}
                                       key={j} to={`/${elem.slug}`}>
                                       <p>{elem.name}</p>
                                       </Link> 
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
        </nav>
    );
}

export default Sidebar;
