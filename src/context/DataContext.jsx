import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import configObj from "../config/config";

export const Cntx = createContext();

function DataContext({ children }) {
    const [data, setData] = useState([]);
    const [catalog, setCatalog] = useState();

        
    
    // const [wishList, setWishList] = useState();

    useEffect(() => {
        axios
            .get(`${configObj.base}/products`)
            .then((res) => setData(res.data.data));
            axios
                .get(`${configObj.base}/catalog`)
                .then((res) => setCatalog(res.data));
    }, []);


    return (
        <Cntx.Provider value={{ data, catalog, setCatalog }}>
            {children}
        </Cntx.Provider>
    );
}

export default DataContext;
