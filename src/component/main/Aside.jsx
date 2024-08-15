import { useContext } from "react";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { Cntx } from "../../context/DataContext";

function Aside({catSt}) {

    const { catalog } = useContext(Cntx);

    return (
        <aside className={`pt-6 mb-5 bg-white shadow-lg h-[100%] lg:inline-block ${!catSt ? 'w-[250px]' : 'w-[90%]' } hidden  `}>
            <nav>
                <ul className='flex flex-col '>
                    {catalog &&
                        catalog.map((item, i) => {
                            const { name, submenu, icon } = item;
                            return (
                                <li
                                    key={i}
                                    className={`flex px-3 ${name === 'Kampaniyalar' ? 'bg-[#FF8300] text-white' : 'bg-white'} gap-3 items-center border-b py-2 hover:bg-[#ff84004e] relative dropdown`}
                                >
                                    <img src={icon} alt={name} />
                                    <div className='flex justify-between items-center w-full relative'>
                                        <p className='font-bold text-[10px] lg:text-[.65em]'>
                                            {name}
                                        </p>
                                        <GoChevronRight className='w-[13px]' />
                                        <ul id="scrollbar" className='bg-[#fff] h-[200px] overflow-auto z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] rounded-sm py-2 absolute left-[calc(100%+13px)] top-[calc(100%-40px)] w-[10vw]'>
                                            {submenu.length != 0
                                                ? submenu.map((elem, i) => {
                                                    return (

                                                      <Link to={`/${elem.slug}`} key={i}>
                                                          <li
                                                              key={i}
                                                              className='text-[.8em] py-2 px-3 hover:bg-[#ff84001c]'
                                                          >
                                                                  {elem.name}
                                                              
                                                          </li>
                                                      </Link>
                                                    );
                                                })
                                                : null}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;
