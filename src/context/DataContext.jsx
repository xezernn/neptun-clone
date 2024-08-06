import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const Cntx = createContext()

function DataContex({ children }) {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get("../data/data.json")
            .then(res => setData(res.data))
    }, [])
    console.log(data);
    
    return (
        <Cntx.Provider value={{data}}>
            {children}
        </Cntx.Provider>
    )
}

export default DataContex