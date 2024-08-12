import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./component/main/Main";
import Layout from "./component/layout/Layout";
import Error404 from "./component/error/Error404";
import CardInfo from "./component/main/CardInfo";
import { useEffect, useState } from "react";
import SubCategory from "./component/main/SubCategory";

function App() {
    const { pathname } = useLocation();
   

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/:subcategory' element={<SubCategory />} />
                    <Route path='/product/:id' element={<CardInfo />} />
                </Route>
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>
    );
}

export default App;
