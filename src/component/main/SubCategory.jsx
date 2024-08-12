import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Cntx } from "../../context/DataContext";
import { GoHeart } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { counter } from "../../context/Counter";

function SubCategory() {
    const { subcategory } = useParams();
    const { countProduct, setCountProduct } = useContext(counter);

    const { data } = useContext(Cntx);
  

    return (
        <main className='bg-[#F2F2F2] '>
            <div className='wrapper py-2'>
                <div className='text-gray-600 font-semibold py-5 px-3'>
                    <Link to='/'>Ana səhifə /</Link>
                    <span> Meyvə, tərəvəz, quru meyvə /</span>
                    <span> Tərəvəz</span>
                </div>
                <div className='flex justify-between items-start'>
                    <div className='filter bg-white rounded-[10px]  w-[60%] text-[.8em] '>
                        <h3 className='p-[10px] '>Filtr</h3>
                        <div className='flex justify-between py-[20px] border-b '>
                            <h5 className='px-[10px]'>Alt Kateqoriya</h5>
                            <FaChevronDown className=' pr-[5px] ' />
                        </div>
                        <div className='marka py-[20px]'>
                            <div className='flex justify-between py-[5px] '>
                                <h5 className='px-[10px]'>Markası</h5>
                                <FaChevronDown className=' pr-[5px] ' />
                            </div>
                            <div className='py-[10px] border-b flex justify-between px-[10px] items-center '>
                                <div>
                                    <span className='inline-block w-[12px] h-[12px] bg-[#FF8300] mx-[4px] '></span>
                                    NEPTUN-MEYVETEREVEZ
                                </div>

                                <span className='text-[#FF8300] inline-block text-end'>
                                    13
                                </span>
                            </div>
                        </div>
                        <div className='qiymet border-b py-[8px]'>
                            <div className='flex justify-between py-[5px]'>
                                <h5 className='px-[10px]'>Qiymət</h5>
                                <FaChevronDown className=' pr-[5px] ' />
                            </div>
                            <div className='flex justify-between p-[10px]'>
                                <h6>0₼</h6>
                                <h6>13₼</h6>
                            </div>
                            <div className='text-center'>
                                <input
                                    type='range'
                                    className='w-[80%] h-[3px] range-input'
                                />
                            </div>
                        </div>
                        <div className='py-[20px] text-center'>
                            <button className='rounded-3xl  text-[.85em] bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3'>
                                Hamısını sıfırla
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-end '>
                        {data
                            ? data.map((item, i) => {
                                  const { img, title, price, id } = item;
                                  return (
                                      <div
                                          key={i}
                                          className='md:w-[30%] lg:w-[25%] xl:w-[calc(25-1vw)] '
                                      >
                                          <Link
                                              to={`/product/${id}`}
                                              className='text-center rounded-md p-3 bg-white relative inline-block m-[.5vw] '
                                          >
                                              <GoHeart className='absolute cursor-pointer top-3 right-3 text-[1.3em] text-[#FF8300]' />
                                              <img src={img} alt={title} />
                                              <h5 className='py-4 hover:text-[#FF8300] h-16 text-[.7em] font-semibold'>
                                                  {title}
                                              </h5>
                                              <p className='font-bold text-[1.3em]'>
                                                  {price} ₼
                                              </p>
                                              <div className='py-3'>
                                                  <button
                                                      onClick={(e) => {
                                                          e.preventDefault();
                                                          setCountProduct( countProduct > 0 ? countProduct - 1 : 0);
                                                      }}
                                                      className='font-bold text-[1.2em] text-[#FF8300]'
                                                  >
                                                      ‒
                                                  </button>
                                                  <span className='px-2'>
                                                      {countProduct} ədəd
                                                  </span>
                                                  <button
                                                      onClick={(e) => {e.preventDefault();setCountProduct( countProduct + 1); }}
                                                      className='font-bold text-[1.2em] text-[#FF8300]'
                                                  >
                                                      ＋
                                                  </button>
                                              </div>
                                              <button className='rounded-3xl  text-[.85em] bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3'>
                                                  Səbətə at
                                              </button>
                                          </Link>
                                      </div>
                                  );
                              })
                            : ""}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SubCategory;
