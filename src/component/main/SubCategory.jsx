import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import getAllProducts from "../../api/api";
import Aside from "./Aside";
import { Cntx } from "../../context/DataContext";

function SubCategory({ catSt }) {
    const { basket, setBasket,setSebetSay,sebetSay } = useContext(Cntx)
    const [product, setProduct] = useState();
    const { category, subCategory } = useParams();

    useEffect(() => {
        getAllProducts(category, subCategory).then((res) =>
            setProduct(res.data)
        );
    }, []);

    return (
        <main className='bg-[#F2F2F2] '>
            <div className='wrapper py-2 flex'>
                <div className='w-[22vw]'>{catSt ? <Aside /> : ""}</div>
                <div>
                    <div className='text-gray-600 font-semibold py-5 px-3'>
                        <Link to='/'>Ana səhifə /</Link>
                        <span className="capitalize"> {category} /</span>
                        <span className="capitalize"> {subCategory}</span>
                    </div>
                    <div className='flex justify-between items-start'>
                        {catSt ? (
                            ""
                        ) : (
                            <div className='filter hidden bg-white rounded-[10px] lg:inline-block  w-[60%] text-[.8em] '>
                                <h3 className='p-[10px] '>Filtr</h3>
                                <div className='flex justify-between py-[20px] border-b '>
                                    <h5 className='px-[10px]'>
                                        Alt Kateqoriya
                                    </h5>
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
                        )}
                        <div className='flex flex-wrap lg:justify-end justify-center '>
                            {product
                                ? product.map((item, i) => {
                                    const { img, title, price, id } = item;
                                    return (
                                        <div
                                            key={i}
                                            className='sm:w-[49%] md:w-[30%] lg:w-[25%] xl:w-[calc(25-1vw)] '
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
                                                        }}
                                                        className='font-bold text-[1.2em] text-[#FF8300]'
                                                    >
                                                        ‒
                                                    </button>
                                                    <span className='px-2'>
                                                        ədəd
                                                    </span>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className='font-bold text-[1.2em] text-[#FF8300]'
                                                    >
                                                        ＋
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setBasket([...basket, item])
                                                        setSebetSay(sebetSay + 1)
                                                    }}
                                                    className='rounded-3xl  text-[.85em] bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3'>
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
            </div>
        </main>
    );
}

export default SubCategory;
