import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../modules/Home";

function MainRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    )
}

export default MainRoutes;