import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./component/main/Main";
import Error404 from "./component/error/Error404";
import CardInfo from "./component/main/CardInfo";
import { useEffect, useState } from "react";
import SubCategory from "./component/main/SubCategory";
import Layout from "./layout/Layout";
import { Basket } from "./component/header/Basket";
import Haqqimizda from "./component/pages/Haqqimizda";
import Elaqe from "./component/pages/Elaqe";

function App() {
    
    const [catSt, setCatSt] = useState(false)
    const [product, setProduct] = useState();
    
    const { pathname } = useLocation();

    function updateCount(id, increment) {
        const updatedProducts = product.map(item => {
            if (item.id === id) {
                return { ...item, count: item.count + increment > 0 ? item.count + increment : 1 };
            }
            return item;
        });
    
        setProduct(updatedProducts);
    }
    
    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout catSt={catSt} setCatSt={setCatSt} />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/:category/:subCategory' element={<SubCategory updateCount={updateCount} catSt={catSt} product={product} setProduct={setProduct} />} />
                    <Route path='/product/:id' element={<CardInfo updateCount={updateCount} product={product}/>} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/haqqimizda" element={<Haqqimizda />} />
                    <Route path="/elaqe" element={<Elaqe />} />
                </Route>
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>
    );
}

export default App;