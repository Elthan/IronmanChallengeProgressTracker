import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";
import Home from "../modules/Home";
import AboutMe from "../modules/AboutMe";
import Challenge from "../modules/Challenge";
import Valorant from "../modules/Valorant";

function MainRoutes() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="challenge" element={<Challenge/>} />
                <Route path="valorant" element={<Valorant/>}/>
                <Route path="aboutme" element={<AboutMe/>} />
            </Routes>
        </div>
    )
}

export default MainRoutes;