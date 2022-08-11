import React from "react";

interface BorderProps {
  noLeft?: boolean
  noRight?: boolean
  noTop?: boolean
  noBottom?: boolean
}


function BorderDecoration({ noLeft, noRight, noTop, noBottom }: BorderProps) {
  return (
    <>
      { !noLeft && <div className="absolute top-0 left-0 h-full w-8 border-zinc-200 border-r-[1px] lg:w-12"></div> }
      { !noRight && <div className="absolute top-0 right-0 h-full w-8 border-zinc-200 border-l-[1px] lg:w-12"></div> }
      { !noTop && <div className="absolute top-0 left-0 w-4/5 h-16 border-zinc-200 border-b-[1px] "></div> }
      { !noBottom && <div className="absolute bottom-0 left-0 w-4/5 h-16 border-zinc-200 border-t-[1px] "></div> }
    </>
  );
}

export default BorderDecoration;