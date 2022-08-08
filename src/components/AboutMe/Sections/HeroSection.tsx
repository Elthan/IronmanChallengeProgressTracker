import React from "react";
import { TWITCHCLIP } from "../../../constants/Twitch";
import { VALO_THUMBNAIL, TFT_THUMBNAIL, APEX_THUMBNAIL } from "../../../constants/Images";
import Carousel from "../Carousel";
import Overlay from "../Overlay";

function HeroSection() {
  const imageSrcList = [
    {src: VALO_THUMBNAIL, alt: "Valorant thumbnail"},
    {src: TFT_THUMBNAIL, alt: "Teamfight Tactics thumbnail"},
    {src: APEX_THUMBNAIL, alt: "Apex Legends thumbnail"},
  ];

  return (
    <section className="bg-primary-10 relative sm:h-[calc(100vh-64px)] w-full mb-8">      
      <video loop autoPlay muted playsInline className="relative object-cover h-full w-full hidden sm:block" poster={VALO_THUMBNAIL}>
        <source src={TWITCHCLIP} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos
      </video>
      <Carousel 
        cName="block sm:hidden carousel-fade h-[400px]"
        imageSrcList={imageSrcList}
      />

      <Overlay title="IRONMAN CHALLENGE" footerTitle="By Edison Park"/>
    </section>
  );
}

export default HeroSection;