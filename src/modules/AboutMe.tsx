import React from "react";
import EdisonWhoSection from "../components/AboutMe/Sections/EdisonWhoSection";
import HeroSection from "../components/AboutMe/Sections/HeroSection";
import IronmanSection from "../components/AboutMe/Sections/IronmanSection";
import GamesSection from "../components/AboutMe/Sections/GamesSection";


function AboutMe() {  
    return (
        <div className="">
            <HeroSection cName="" />
            <IronmanSection />
            <GamesSection />
            <EdisonWhoSection />
        </div>
    );
}

export default AboutMe;