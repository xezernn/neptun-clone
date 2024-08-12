import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Cntx } from "../../context/DataContext";
import { GoHeart } from "react-icons/go";

function SubCategory() {
    const { subcategory } = useParams();

    const { data } = useContext(Cntx);
    console.log(data);

    return (
        <main className='bg-[#F2F2F2] '>
            <div className='wrapper py-2'>
                <div>
                    <div className='text-gray-600 font-semibold py-5 px-3'>
                        <Link to='/'>Ana səhifə /</Link>
                        <span> Meyvə, tərəvəz, quru meyvə /</span>
                        <span> Tərəvəz</span>
                    </div>
                    <div className='filter '>
                        <h3>Filtr</h3>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center gap-[1.5vw]'>
                    {data
                        ? data.map((item, i) => {
                              console.log(item);

                              const { img, title, price, id } = item;
                              return (
                                  <div key={i}>
                                      <Link
                                          to={`/product/${id}`}
                                          className='text-center rounded-md p-3 bg-white relative inline-block'
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
                                              <button className='font-bold text-[1.2em] text-[#FF8300]'>
                                                  ‒
                                              </button>
                                              <span className='px-2'>
                                                  1 ədəd
                                              </span>
                                              <button className='font-bold text-[1.2em] text-[#FF8300]'>
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
        </main>
    );
}

export default SubCategory;
