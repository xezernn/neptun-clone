import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Cntx } from "../../context/DataContext";
import { Link } from "react-router-dom";

export const Basket = () => {
    const { basket, setBasket } = useContext(Cntx)
    console.log(basket);
    function HandleDelete(id) {
        const elem = basket.filter(item => item.id != id)
        setBasket(elem)
    }

    return (
        <section className='wrapper py-5 px-3'>
            <h1 className="text-[1.7em]">Səbət</h1>
            <div className=" mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-sm">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Şəkil</th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Məhsulun adı</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Say</th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Qiymət</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Məbləğ</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {basket.map((item) => (
                            <tr key={item.id}>
                                <td className="w-32 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                    <img src={item.img} alt={item.title} className="md:w-24 w-20" />
                                    <dl className="font-normal lg:hidden">
                                        <dd className="mt-1 truncate text-gray-700">{item.title}</dd>
                                        <dd className="mt-1 truncate text-gray-500 sm:hidden">{item.price} ₼</dd>
                                    </dl>
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{item.title}</td>
                                <td className="px-3 py-4 w-fit text-sm text-gray-500 sm:table-cell">
                                    <button
                                        // onClick={(e) => {
                                        //     e.preventDefault();
                                        //     setCountProduct(countProduct > 0 ? countProduct - 1 : 0);
                                        // }}
                                        className='font-bold text-[1.2em] text-[#FF8300] active:text-[#000]'>
                                        ‒
                                    </button>
                                    <span className='px-2'>1</span>
                                    <button
                                        // onClick={(e) => {
                                        //     e.preventDefault();
                                        //     setCountProduct(countProduct + 1);
                                        // }}
                                        className='font-bold text-[1.2em] text-[#FF8300] active:text-[#000]'>
                                        ＋
                                    </button>
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{item.price} ₼</td>
                                <td className="px-3 py-4 text-sm text-gray-500">{item.price} ₼</td>
                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <p className="hover:text-red-600 text-[1.2em] cursor-pointer">
                                        <FaTrashAlt onClick={() => { HandleDelete(item.id) }} />
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end my-6">
                <table className="border">
                    <tr className="text-left text-sm font-semibold border">
                        <th className="p-2">Məbləğ:</th>
                        <td className="p-2">12.65 azn</td>
                    </tr>
                    <tr className="text-left text-sm font-semibold border">
                        <th className="p-2">Ümumi məbləğ:</th>
                        <td className="p-2">12.65 azn</td>
                    </tr>
                </table>
            </div>
            <div className="py-4 mt-4 flex justify-between">
                <Link to='/' className="rounded-3xl text-[.85em] bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3">Alış-verişə davam </Link>
                <button className="rounded-3xl text-[.85em] bg-[#FF8300] text-white px-4 py-2 font-semibold mb-3">Sifarişi rəsmiləşdir</button>
            </div>
        </section>
    )
}