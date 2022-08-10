import React from "react";
import EdisonWhoSection from "../components/AboutMe/Sections/EdisonWhoSection";
import HeroSection from "../components/AboutMe/Sections/HeroSection";
import IronmanSection from "../components/AboutMe/Sections/IronmanSection";


function AboutMe() {  
    return (
        <div className="">
            <HeroSection cName="" />
            <IronmanSection />
            <EdisonWhoSection />
        </div>
    );
}

export default AboutMe;