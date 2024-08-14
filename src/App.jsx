import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./component/main/Main";
import Error404 from "./component/error/Error404";
import CardInfo from "./component/main/CardInfo";
import { useEffect, useState } from "react";
import SubCategory from "./component/main/SubCategory";
import Layout from "./layout/Layout";
import { Basket } from "./component/header/Basket";

function App() {
    
    const [catSt, setCatSt] = useState(false)
    const [product, setProduct] = useState();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout catSt={catSt} setCatSt={setCatSt} />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/:category/:subCategory' element={<SubCategory catSt={catSt} product={product} setProduct={setProduct} />} />
                    <Route path='/product/:id' element={<CardInfo product={product}/>} />
                    <Route path="/basket" element={<Basket />} />
                </Route>
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>
    );
}

export default App;