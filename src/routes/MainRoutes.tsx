import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";
import Home from "../modules/Home";
import About from "../modules/AboutMe";
import Challenge from "../modules/Challenge";

function MainRoutes() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="challenge" element={<Challenge/>} />
                <Route path="about" element={<About/>} />
            </Routes>
        </div>
    )
}

export default MainRoutes;