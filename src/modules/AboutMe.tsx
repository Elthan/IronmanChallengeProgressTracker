import React from "react";
import EdisonWhoSection from "../components/AboutMe/Sections/EdisonWhoSection";
import HeroSection from "../components/AboutMe/Sections/HeroSection";


function AboutMe() {  
    return (
        <div className="">
            <HeroSection cName="mb-6" />
            <EdisonWhoSection />
        </div>
    );
}

export default AboutMe;