import { Route, Routes } from "react-router-dom";
import Main from "./component/main/Main";
import Layout from "./component/layout/Layout";

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Main />}/>
            </Route>
        </Routes>
        </>
    );
}

export default App;
