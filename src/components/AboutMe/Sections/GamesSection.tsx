import React from "react";
import SectionProps from "./SectionProps";
import BorderDecoration from "../../Decorations/BorderDecoration";
import RightAngledTriangle from "../../svgComponents/RightAngledTriangle";
import Slider from "react-slick";


function GamesSection(props: SectionProps) {
  const settings = {
    fade: false,
    infinite: true,
    autoplay: true,
    centerPadding: '100px',
    autoplaySpeed: 4000,
    cssEase: "linear",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <section className={`${props.cName} relative bg-zinc-800 pt-36 pb-32 px-4 lg:pt-40 lg:pb-40 overflow-hidden`}>
      <BorderDecoration noTop noBottom noRight />
      <article className="px-8">
        <h1 className="text-zinc-50 font-bold text-6xl md:text-8xl text-center mb-16">The Games</h1>
        <Slider {...settings}>
          <div className="relative group">
            <div className="overflow-hidden">
              <img className="object-cover transition-all group-hover:scale-125" src="/images/valo_thumbnail.jpg" alt="Valorant thumbnail" />
            </div>
            <h4 className="text-zinc-200 font-semibold text-xl mt-1 ml-2" >Valorant</h4>
          </div>
          <div className="relative group ">
            <div className="overflow-hidden">
              <img className="object-cover transition-all group-hover:scale-125" src="/images/tft_thumbnail.jpg" alt="TFT thumbnail" />
            </div>
            <h4 className="text-zinc-200 font-semibold text-xl mt-1 ml-2">Teamfight Tactics</h4>
          </div>
          <div className="relative group ">
            <div className="overflow-hidden">
              <img className="object-cover transition-all group-hover:scale-125" src="/images/apex_thumbnail.jpg" alt="Apex thumbnail" />
            </div>
            <h4 className="text-zinc-200 font-semibold text-xl mt-1 ml-2">Apex Legends</h4>
          </div>
        </Slider>
      </article>

      <RightAngledTriangle width="48" height="40" cName="hidden lg:block absolute bottom-0 right-0 fill-zinc-50 scale-x-[-1]"/>
      <RightAngledTriangle width="32" height="30" cName="block lg:hidden absolute bottom-0 right-0 fill-zinc-50 scale-x-[-1]" />
    </section>
  );
}

export default GamesSection;