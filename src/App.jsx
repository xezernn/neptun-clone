import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./component/main/Main";
import Layout from "./component/layout/Layout";
import Error404 from "./component/error/Error404";
import CardInfo from "./component/main/CardInfo";
import CardsSlider from "./component/main/CardsSlider";
import { useEffect } from "react";

function App() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/:subCategory' element={<CardsSlider />} />
                    <Route path='/product/:id' element={<CardInfo />} />
                </Route>
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>
    );
}

export default App;
