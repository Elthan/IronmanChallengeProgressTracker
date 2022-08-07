import React from "react";
import { TWITCHCLIP } from "../../constants/Twitch";

function HeroSection() {
  return (
    <section className="relative w-full h-full">
      <video id="bgVideo" autoPlay muted playsInline className="object-cover hidden sm:block">
        <source src={TWITCHCLIP} type="video/mp4" />
        The browser does not support video
      </video>
      <img className="block sm:hidden" src="https://images.immediate.co.uk/production/volatile/sites/34/2020/05/11695-b138007.jpg?quality=90&resize=600%2C400" alt=""/>
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] bg-opacity-30">
        <div id="overlayComponents" className="h-full flex flex-col justify-center items-center opacity-0">
          <h1 className="text-white text-5xl sm:text-7xl xl:text-9xl">Ironman</h1>
          <h1 className="text-white text-5xl sm:text-7xl xl:text-9xl">Challenge</h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;