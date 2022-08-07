import React from "react";
import { TWITCHCLIP } from "../../constants/Twitch";

function HeroSection() {

  return (
    <section className="relative w-full h-full">
      <video autoPlay loop muted playsInline className="object-cover hidden sm:block">
        <source src={TWITCHCLIP} type="video/mp4" />
        The browser does not support video
      </video>
      <img className="block sm:hidden" src="https://images.immediate.co.uk/production/volatile/sites/34/2020/05/11695-b138007.jpg?quality=90&resize=600%2C400" alt=""/>
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-30">
        {/* <div className="h-full flex flex-col justify-center items-center">
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;