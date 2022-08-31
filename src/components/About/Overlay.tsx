import React from "react";
import TriangleDown from "../svgComponents/TriangleDown";
import RightAngledTriangle from "../svgComponents/RightAngledTriangle"; 


interface OverlayProps {
  title: string,
  footerTitle: string
}

function Overlay({ title, footerTitle }: OverlayProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0)] bg-opacity-80 sm:bg-opacity-50 overflow-hidden">
        <div id="overlayComponents" className="relative h-full flex flex-col items-center justify-end opacity-100">
          <div className="absolute-center top-1/3 left-1/2 text-center text-white ">
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl w-min animate-pulse">{title}</h1>
          </div>
          <div className="relative w-full flex flex-col items-center">
            <TriangleDown cName="fill-primary-700 animate-[bounce_2s_ease-in-out_infinite] hidden sm:block"/>
            
            {/* Footer Bar */}
            <div className="relative w-full py-3 sm:py-10 bg-primary-700 flex justify-center text-zinc-200">
              <RightAngledTriangle width="48" height="32" cName="hidden lg:block absolute bottom-0 left-0 fill-zinc-50" />
              <RightAngledTriangle width="32" height="30" cName="block lg:hidden absolute bottom-0 left-0 fill-zinc-50" />
              <p className="font-semibold text-md">{footerTitle}</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Overlay;