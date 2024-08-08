import { Route, Routes } from "react-router-dom";
import Main from "./component/main/Main";
import Layout from "./component/layout/Layout";
import Error404 from "./component/error/Error404";
import CardInfo from "./component/main/CardInfo";
import CardsSlider from "./component/main/CardsSlider";
import { useState } from "react";

function App() {
    
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/:subCategory' element={<CardsSlider />} />
                    <Route path='/cardInfo' element={<CardInfo />} />
                </Route>
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>
    );
}

export default App;
