import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataContex from "./context/DataContext.jsx";
import { BrowserRouter } from "react-router-dom";
import Counter from "./context/Counter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <DataContex>
        <Counter>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Counter>
    </DataContex>
);
