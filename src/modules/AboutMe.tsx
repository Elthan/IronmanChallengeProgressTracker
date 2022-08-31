import React from "react";
import EdisonWhoSection from "../components/About/Sections/EdisonWhoSection";
import HeroSection from "../components/About/Sections/HeroSection";
import IronmanSection from "../components/About/Sections/IronmanSection";
import GamesSection from "../components/About/Sections/GamesSection";
import Footer from "../components/About/Footer";


function About() {  
    return (
        <div className="">
            <HeroSection cName="" />
            <IronmanSection />
            <GamesSection />
            <EdisonWhoSection />
            <Footer />
        </div>
    );
}

export default About;