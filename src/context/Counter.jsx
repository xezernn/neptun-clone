import React, { createContext, useState } from "react";

export const counter = createContext();

export default function Counter({ children }) {
  
    const [countProduct, setCountProduct] = useState(1);
    

    return (
      
        <counter.Provider value={{ countProduct, setCountProduct }}>
            {children}
        </counter.Provider>
    );
}
