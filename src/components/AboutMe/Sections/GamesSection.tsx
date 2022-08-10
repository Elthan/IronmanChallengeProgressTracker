import React from "react";
import SectionProps from "./SectionProps";


function GamesSection(props: SectionProps) {
  return (
    <section className={`${props.cName} relative bg-primary-900 pt-16 pb-20 px-4 lg:pt-32 lg:pb-28 overflow-hidden`}>
      <h1>The Games</h1>
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </section>
  );
}

export default GamesSection;