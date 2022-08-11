import React from "react";
import { GIGACHADEDISONPIC } from "../../../constants/Twitter";
import SectionProps from "./SectionProps";
import EdisonWhoDecorations from "../../Decorations/EdisonWhoDecorations";

function EdisonWhoSection(props: SectionProps) {
  return (
    <section className={`${props.cName} relative bg-zinc-50 pt-24 pb-20 px-4 lg:pt-44 lg:pb-36 overflow-hidden`}>
      <EdisonWhoDecorations />

      <main className="relative flex flex-col xl:flex-row lg:space-x-[10%] mx-auto px-8 pt-8" >
        <div className="py-3 bg-primary-600 xl:w-1/2">
          <img 
            className="object-cover aspect-square w-[50%] xl:w-[60%] scale-x-[-1] translate-x-4 -translate-y-6 drop-shadow-2xl"
            src={GIGACHADEDISONPIC}
            alt="Edison Park" 
            loading="lazy"
          />
        </div>

        <div className="px-4 py-6 space-y-7 xl:max-w-md">
          <h1 className="text-primary-600 font-bold mb-7 text-6xl md:text-8xl w-max xl:w-fit">
            About Me
          </h1>
          <div className="text-primary-900 max-w-md xl:mx-auto">
            <p className="mb-4">
              Hi there, I'm Edison! I'm a former techie who left my engineering PM role to pursue my dreams. 
              Absolutely insane that I'm here now as I wouldn't have ever guessed it in a million years.
            </p>
            <p className="mb-4">
              On top of gameplay and IRL content, you'll find we really like to just sit down and talk about things around here 
              -- about relationships, college, industry, tech, and life in general.
            </p>
            <p>Proud former member of both OfflineTV and Just Friends</p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default EdisonWhoSection;