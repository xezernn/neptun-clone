import { Route, Routes } from "react-router-dom";
import Main from "./component/main/Main";
import Layout from "./component/layout/Layout";
import Error404 from "./component/error/Error404";

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Main />}/>
                <Route path="*" element={<Error404 />}/>
            </Route>
        </Routes>
        </>
    );
}

export default App;
