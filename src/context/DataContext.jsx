import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Cntx = createContext();

function DataContext({ children }) {
    const [data, setData] = useState([]);
    const [catalog, setCatalog] = useState();
    const [wishList, setWishList] = useState();

    // function handleWish() {
    //     const savedWish = localStorage.getItem('wishList')
    //     return savedWish ? JSON.parse(savedWish) : []
    // }
    useEffect(() => {
        axios
            .get("https://mirafgan.me/neptun/products")
            .then((res) => setData(res.data.data));
    }, []);

    useEffect(() => {
        axios
            .get("https://mirafgan.me/neptun/catalog")
            .then((res) => setCatalog(res.data));
    }, []);

    // useEffect(() => {
    //     localStorage.setItem('wishList', JSON.stringify(wishList))
    // }, [wishList])

    return (
        <Cntx.Provider
            value={{ data, wishList, setWishList, catalog, setCatalog }}
        >
            {children}
        </Cntx.Provider>
    );
}

export default DataContext;
