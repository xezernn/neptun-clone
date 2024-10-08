import { Link, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { useContext } from "react";
import { Cntx } from "../../context/DataContext";

function CardInfo({ product, updateCount}) {

    const { setSebetSay, sebetSay } = useContext(Cntx)
    const { id } = useParams()
    const item = product && product.find(item => item.id == id)
      
    
    return (
        <section className='wrapper'>
            <div className='text-gray-600 font-semibold py-10 px-3'>
                <Link to='/'>Ana səhifə /</Link>
                <span className='text-[.8em]'> {item?.title}</span>
            </div>
            <div className='flex flex-col items-center bg-white md:flex-row md:max-w-4xl mb-5'>
                <img
                    className='object-contain w-full rounded-t-lg h-96 md:h-auto md:w-[450px] md:rounded-none md:rounded-s-lg'
                    src={item?.img}
                    alt={item?.title}
                />
                <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
                        {item?.title}
                    </h5>
                    <div className='flex gap-1 text-[#FF8300] text-[1.4em] py-2'>
                        <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />{" "}
                        <FaRegStar />
                    </div>
                    <p className='mb-3 text-[.8em] text-gray-700'>
                        0 şərh | Şərh yaz
                    </p>
                    <p className='mb-3 text-[.9em] text-gray-700'>
                        Mövcudluq: 🗹 Anbarda
                    </p>
                    <p className='mb-3 text-[2em] font-bold text-[#FF8300]'>
                        {(item?.price)} ₼
                    </p>
                    <div className='py-3'>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                updateCount(id, -1)
                            }}
                            className='font-bold text-[1.2em] text-[#FF8300]'>
                            ‒
                        </button>
                        <span className='px-4'>{item?.count} ədəd</span>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                updateCount(id, 1)
                            }}
                            className='font-bold text-[1.2em] text-[#FF8300]'>
                            ＋
                        </button>
                    </div>
                    <div className='flex items-center gap-4 py-2'>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                addToBasket(item.id, item.title, item.price, item.img)
                                setSebetSay(sebetSay + 1)
                            }}
                            className='rounded-3xl bg-[#FF8300] text-white px-5 py-2  mb-3'>
                            Səbətə at
                        </button>
                        <FaRegHeart className='text-[1.3em] cursor-pointer text-[#FF8300]' />
                        <LuRefreshCcw className='text-[1.3em] text-[#FF8300] hover:rotate-[270deg] transition cursor-pointer' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardInfo;
