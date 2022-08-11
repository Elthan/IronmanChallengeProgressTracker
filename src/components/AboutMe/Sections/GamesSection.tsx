import React from "react";
import SectionProps from "./SectionProps";


function GamesSection(props: SectionProps) {
  return (
    <section className={`${props.cName} relative bg-zinc-800 pt-16 pb-20 px-4 lg:pt-40 lg:pb-36 overflow-hidden`}>
      <h1 className="text-zinc-50 font-bold text-5xl md:text-7xl">The Games</h1>
      <div className="flex flex-row justify-around w-full">
        <img className="w-1/3" src="/images/valo_thumbnail.jpg" alt="" />
        <img className="w-1/3" src="https://www.futuregamereleases.com/wp-content/uploads/2019/07/teamfight-tactics.jpg" alt="" />
        <img className="w-1/3" src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg" alt="" />
      </div>
    </section>
  );
}

export default GamesSection;