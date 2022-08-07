import React from "react";
import { GIGACHADEDISONPIC } from "../../constants/Twitter";

function EdisonWhoSection() {
  return (
    <section className="relative bg-analogous-10">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-7xl mx-auto px-4 py-8 sm:space-x-6">
        <div className="flex flex-col px-4 py-6 space-y-7 max-w-md">
          <h1 className="text-5xl font-semibold text-analogous-800">
            About Me
          </h1>
          <span className="space-y-4 text-analogous-700">
            <p>
              Hi there, I'm Edison! I'm a former techie who left my engineering PM role to pursue my dreams. 
              Absolutely insane that I'm here now as I wouldn't have ever guessed it in a million years.
            </p>
            <p>
              On top of gameplay and IRL content, you'll find we really like to just sit down and talk about things around here 
              -- about relationships, college, industry, tech, and life in general.
            </p>
            <p>Proud former member of both OfflineTV and Just Friends</p>
          </span>
        </div>

        <div className="py-3 rounded-md bg-analogous-200">
          <img 
            className="object-cover w-auto max-h-screen w-80 h-80"
            src={GIGACHADEDISONPIC}
            alt="Edison Park" 
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}

export default EdisonWhoSection;