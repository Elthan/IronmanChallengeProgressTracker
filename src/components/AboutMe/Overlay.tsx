import React from "react";

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
            <svg 
              className="fill-primary-700 animate-[bounce_2s_ease-in-out_infinite] hidden sm:block" 
              width="30" height="30" 
              viewBox="0 0 30 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.9725 24.4613C14.0872 24.6278 14.2406 24.764 14.4196 24.8581C14.5986 24.9521 14.7978 25.0013 15 25.0013C15.2022 25.0013 15.4014 24.9521 15.5804 24.8581C15.7594 24.764 15.9128 24.6278 16.0275 24.4613L27.2775 8.21125C27.4077 8.02382 27.4841 7.80429 27.4983 7.57651C27.5125 7.34873 27.464 7.1214 27.3581 6.91924C27.2522 6.71708 27.0929 6.54781 26.8975 6.42982C26.7022 6.31184 26.4782 6.24964 26.25 6.25H3.75C3.5223 6.25094 3.29917 6.31393 3.1046 6.43221C2.91003 6.55048 2.75138 6.71955 2.64571 6.92124C2.54004 7.12294 2.49136 7.34962 2.50489 7.57692C2.51842 7.80421 2.59365 8.02352 2.7225 8.21125L13.9725 24.4613Z"/>
            </svg>

            <div className="relative w-full py-3 sm:py-8 bg-primary-700 flex justify-center text-white">
              <p className="font-semibold text-md">{footerTitle}</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Overlay;