import React from "react";
import { TWITCHCLIP } from "../../../constants/Twitch";
import { VALO_THUMBNAIL, HERO_IMAGES } from "../../../constants/Images";
import Overlay from "../Overlay";
import Slider from "react-slick";

function HeroSection() {
  const SliderSettings = {
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="bg-primary-10 relative sm:h-[calc(100vh-64px)] w-full mb-8">      
      {/* Show Video on non-mobile */}
      <video loop autoPlay muted playsInline className="relative object-cover h-full w-full hidden sm:block" poster={VALO_THUMBNAIL}>
        <source src={TWITCHCLIP} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos
      </video>
      
      {/* Show Image Carousel on mobile */}
      <div className="block sm:hidden h-[400px]">
        <Slider {...SliderSettings}>
          {HERO_IMAGES.filter(Boolean).map(item =>
                <img src={item.src} alt={item.alt} className="object-cover"/>
          )}
        </Slider>
      </div>

      <Overlay title="IRONMAN CHALLENGE" footerTitle="By Edison Park"/>
    </section>
  );
}

export default HeroSection;