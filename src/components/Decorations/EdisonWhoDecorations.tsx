import React from "react";
import BorderDecoration from "./BorderDecoration";

function EdisonWhoDecorations() {
  return (
    <>   
      {/* Page Border */}
      <BorderDecoration noTop />

      {/* Background Giant Text */}
      <h1 className="absolute left-0 top-0 leading-none text-[20vw] font-bold text-outline transform xl:rotate-90">
        <div>EDISON</div>
        <div>PARK</div>
      </h1>

      {/* Color Line  */}
      <div className="absolute top-0 right-8 lg:right-12 w-[10%] h-2 bg-primary-300"></div>

      {/* dot dot dot line */}
      <div className="absolute right-16 w-2 h-2 bg-zinc-200"></div>
      <div className="absolute right-16 w-2 h-2 bg-zinc-200 translate-y-4"></div>
      <div className="absolute right-16 w-2 h-2 bg-zinc-200 translate-y-8"></div>
      <div className="absolute right-16 w-2 h-[10%] bg-zinc-200 translate-y-12"></div>

      {/* Small Backward Text */}
      <h1 className="absolute bottom-10 right-10 font-semibold text-primary-300 scale-x-[-1] ">
        OLDISON PARK
      </h1>
    </>
  );
}

export default EdisonWhoDecorations;