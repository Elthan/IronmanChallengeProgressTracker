import React from "react";
import { TWITCHCLIP } from "../../constants/Twitch";

function HeroSection() {
  return (
    <section className="bg-primary-10 relative h-full w-full mb-6">      
      <video id="bgVideo" loop autoPlay muted playsInline className="relative object-cover h-screen w-full hidden sm:block">
        <source src={TWITCHCLIP} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos
      </video>
      <img className="block sm:hidden" src="https://images.immediate.co.uk/production/volatile/sites/34/2020/05/11695-b138007.jpg?quality=90&resize=600%2C400" alt=""/>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0)] bg-opacity-70">
        <div id="overlayComponents" className="relative h-full flex flex-col items-center justify-end opacity-100">
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl animate-pulse delay-1000">IRONMAN CHALLENGE</h1>
          </div>
          <div className="relative flex flex-col items-center">
            <a className="hidden sm:block" href="#endOfHero">
              <svg 
                className="fill-primary-600 animate-[bounce_2s_ease-in-out_infinite]" 
                width="30" height="30" 
                viewBox="0 0 30 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.9725 24.4613C14.0872 24.6278 14.2406 24.764 14.4196 24.8581C14.5986 24.9521 14.7978 25.0013 15 25.0013C15.2022 25.0013 15.4014 24.9521 15.5804 24.8581C15.7594 24.764 15.9128 24.6278 16.0275 24.4613L27.2775 8.21125C27.4077 8.02382 27.4841 7.80429 27.4983 7.57651C27.5125 7.34873 27.464 7.1214 27.3581 6.91924C27.2522 6.71708 27.0929 6.54781 26.8975 6.42982C26.7022 6.31184 26.4782 6.24964 26.25 6.25H3.75C3.5223 6.25094 3.29917 6.31393 3.1046 6.43221C2.91003 6.55048 2.75138 6.71955 2.64571 6.92124C2.54004 7.12294 2.49136 7.34962 2.50489 7.57692C2.51842 7.80421 2.59365 8.02352 2.7225 8.21125L13.9725 24.4613Z"/>
              </svg>
            </a>

            <div className="py-3 sm:py-6 w-screen bg-primary-600 flex justify-center text-white">
              <p className="font-semibold text-md">By Edison Park</p>
            </div>
          </div>
          <div id="endOfHero"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;