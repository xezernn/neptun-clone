import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const Cntx = createContext();

function DataContex({ children }) {
    const [data, setData] = useState([]);
    const [wishList, setWishList] = useState();

    // function handleWish() {
    //     const savedWish = localStorage.getItem('wishList')
    //     return savedWish ? JSON.parse(savedWish) : []
    // }
    useEffect(() => {
        axios.get("mirafgan.me/neptun/catalog").then((res) => console.log(res));
    }, []);

    // console.log(data);

    // useEffect(() => {
    //     localStorage.setItem('wishList', JSON.stringify(wishList))
    // }, [wishList])

    return (
        <Cntx.Provider value={{ data, wishList, setWishList }}>
            {children}
        </Cntx.Provider>
    );
}

export default DataContex;
