import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Cntx = createContext();

function DataContext({ children }) {
    const [data, setData] = useState([]);
    const [catalog, setCatalog] = useState();
    // const [wishList, setWishList] = useState();

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

    return (
        <Cntx.Provider value={{ data, catalog, setCatalog }}>
            {children}
        </Cntx.Provider>
    );
}

export default DataContext;
