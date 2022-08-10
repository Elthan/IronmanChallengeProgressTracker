import React from "react";
import SectionProps from "./SectionProps";
import ButtonLink from "../../Navigation/ButtonLink";
import { TWITCHPAGE, TWITCHCLIP_VALO2 } from "../../../constants/Twitch";


function IronmanSection(props: SectionProps) {
  return (
    <section className={`${props.cName} relative bg-zinc-50 pt-16 pb-20 px-4 lg:pt-40 lg:pb-36 overflow-hidden`}>
      {/* Border Decoration */}
      <div className="absolute top-0 left-0 h-full w-8 border-zinc-200 border-r-[1px] lg:border-r-0"></div>
      <div className="absolute top-0 left-0 w-4/5 h-16 border-zinc-200 border-b-[1px] lg:border-b-0"></div>

      {/* Background Text Decoration */}
      <h1 className=" absolute bottom-0 lg:top-0 leading-none text-[22vw] font-bold text-outline transform lg:rotate-90 translate-x-[12%] lg:translate-y-[35%]">
        <span>IRONMAN </span>
        <span>CHALLENGE</span>
      </h1>

      <main className="relative flex flex-col lg:flex-row justify-center lg:space-x-[10%] mx-auto px-8 pt-8">
        <div className="relative mb-14 lg:mb-0 lg:w-max">
          <div className="transform -translate-y-4 mb-2">
            <h1 className="text-primary-600 font-bold text-6xl md:text-8xl">What is it?</h1>
          </div>
          <div className="relative lg:w-[500px] text-zinc-800 lg:ml-[10%]">
            <p className="mb-5">
              <strong>Ironman Challenge</strong> is a special event made by Edison Park inspired by the Ironman Triathlon. 
              The streamer will not end stream until they hit top 1% ranks in 3 different games.
            </p>
            <p className="mb-5">
              The games for Edison's challenge are Valorant, Teamfight Tactics, and APEX Legends!
            </p>
            <p>The rules are:</p>
            <ul className="list-decimal pl-6">
              <li>Ranks must be attaned on fresh accounts.</li>
              <li>Each rank can be attained separately at any time.</li>
              <li>Not ending stream until the challenge is completed!</li>
            </ul>
            <div className="relative flex justify-center lg:block mt-14 lg:mt-8 font-semibold text-2xl z-10">
              <ButtonLink cName="w-1/4 min-w-fit text-center" text="Watch Live" href={TWITCHPAGE} />
            </div>

            {/* Left Decoration */}
            <div className="hidden lg:block absolute bottom-0 left-0 h-1/4 w-[10%] translate-y-[5%] -translate-x-20">
              <svg className="stroke-zinc-300" width="204" height="146" viewBox="0 0 204 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="25.5" y1="2.18557e-08" x2="25.5" y2="146"/>
                <line y1="123.5" x2="204" y2="123.5"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-1/3">
          <div className="aspect-[2/1] sm:aspect-[3/1] lg:aspect-[4/3] drop-shadow-2xl">
            <video loop autoPlay muted playsInline className="relative object-cover lg:aspect-[4/3] h-full w-full ">
              <source src={TWITCHCLIP_VALO2} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos
            </video>
            <div className="bg-primary-400 h-2 w-[20%] ml-auto"></div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default IronmanSection;