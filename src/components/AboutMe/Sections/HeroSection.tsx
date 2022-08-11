import React from "react";
import { HERO_IMAGES } from "../../../constants/Images";
import Overlay from "../Overlay";
import Slider from "react-slick";

interface HeroProps {
  cName?: string,
}

function HeroSection(props: HeroProps) {
  const sliderSettings = {
    fade: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    cssEase: "linear",
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className={`bg-primary-10 relative sm:h-[calc(90vh-64px)] w-full ${props.cName}`}>      
      {/* Show Video on non-mobile */}
      <video loop autoPlay muted playsInline className="relative object-cover h-full w-full hidden sm:block">
        <source src="/videos/valo_clip_calm.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos
      </video>
      
      {/* Show Image Carousel on mobile */}
      <div className="block sm:hidden h-[400px]">
        <Slider {...sliderSettings}>
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