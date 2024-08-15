import { useContext } from "react";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { Cntx } from "../../context/DataContext";

function Aside() {

    const { catalog } = useContext(Cntx);

    return (
        <aside className='pt-6 mb-5 sm:w-60 bg-white shadow-lg lg:block lg:w-[30vw] hidden px-[5px] xl:w-[17vw]'>
            <nav>
                <ul className='flex flex-col space-y-1'>
                    {catalog &&
                        catalog.map((item, i) => {
                            const { name, submenu, icon } = item;
                            return (
                                <li
                                    key={i}
                                    className='flex px-3 gap-3 items-center border-b py-2 hover:bg-[#ff84004e] relative dropdown'
                                >
                                    <img src={icon} alt={name} />
                                    <div className='flex justify-between items-center w-full relative'>
                                        <p className='font-semibold text-[10px]  lg:text-[.65em]'>
                                            {name}
                                        </p>
                                        <GoChevronRight className='w-[13px]' />
                                        <ul className='bg-[#fff] z-20 hidden dropdown-open border-l-[2px] border-l-[#FF8300] rounded-sm py-2 absolute left-[calc(100%+5px)] xl:left-[100%]  top-[calc(100%-40px)] w-[10vw]'>
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
