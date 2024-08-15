import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import getAllProducts from "../../api/api";
import Aside from "./Aside";
import { Cntx } from "../../context/DataContext";

function SubCategory({ catSt, product, setProduct }) {

    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);
    const { basket, setBasket, setSebetSay, sebetSay } = useContext(Cntx);
    const { category, subCategory } = useParams();
    const [pageCount, setPageCount] = useState(1);
    
   
    useEffect(() => {
        getAllProducts(category, subCategory, pageCount).then((res) =>
        {
            setProduct(res.data)
            setPage(res.meta)
        }
        );
    }, [pageCount,category, subCategory,]);
    ;
    
   

    return (
        <main className='bg-[#F2F2F2] '>
            <div className='wrapper flex'>
                {catSt ? <Aside catSt={catSt} /> : ""}
                <div>
                    <div className={`text-gray-600 font-semibold py-5 px-3 ${!catSt ? '' :'text-center'} `}>
                        <Link to='/'>Ana səhifə /</Link>
                        <span className='capitalize'> {category} /</span>
                        <span className='capitalize'> {subCategory}</span>
                    </div>
                    <div className={`flex ${!catSt ? 'justify-end' : 'justify-center'}  items-start`}>
                        {catSt ? (
                            ""
                        ) : (
                            <div className='filter hidden bg-white rounded-[10px] lg:inline-block px-[5px] w-[23vw] text-[.8em] '>
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
                        <div className={`flex flex-wrap w-[100%]  ${!catSt ? ' justify-center' : 'justify-end'}`}>
                            {product ? (
                                product.map((item, i) => {
                                    const { img, title, price, id } = item;
                                    return (
                                        <div
                                            key={i}
                                            className={`sm:w-[49%] md:w-[30%] ${!catSt ? ' xl:w-[calc(26%-1vw)]' : ' xl:w-[calc(20%)]' }  `}
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
                                                            setCount(
                                                                count > 0
                                                                    ? count - 1
                                                                    : 1
                                                            );
                                                        }}
                                                        className='font-bold text-[1.2em] text-[#FF8300]'
                                                    >
                                                        ‒
                                                    </button>
                                                    <span className='px-2'>
                                                        {count} ədəd
                                                    </span>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setCount(count + 1);
                                                          
                                                        }}
                                                        className='font-bold text-[1.2em] text-[#FF8300]'
                                                    >
                                                        ＋
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setBasket([
                                                            ...basket,
                                                            item,
                                                        ]);
                                                        setSebetSay(
                                                            sebetSay + 1
                                                        );
                                                    }}
                                                    className='rounded-3xl  text-[.85em] bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3'
                                                >
                                                    Səbətə at
                                                </button>
                                            </Link>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className='flex items-center justify-center space-x-2 h-screen'>
                                    <div className='w-4 h-4 rounded-full animate-pulse dark:bg-[#FF8300]'></div>
                                    <div className='w-4 h-4 rounded-full animate-pulse dark:bg-[#FF8300]'></div>
                                    <div className='w-4 h-4 rounded-full animate-pulse dark:bg-[#FF8300]'></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center space-x-1 dark:text-gray-800 py-[20px]'>
                {new Array(page.pages).fill("").map((item, i) => (
                    <button
                        onClick={(e) => 
                        {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setPageCount(e.target.innerText)
                        }
                        }
                        key={i}
                        type='button'
                        className={` ${pageCount == i + 1  ? 'bg-[red]' : '' } inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 focus:bg-[#f1cba2] focus:border-1 focus:border-[#f69733] `}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </main>
    );
}

export default SubCategory;
