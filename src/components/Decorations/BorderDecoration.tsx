import React from "react";

interface BorderProps {
  noLeft?: boolean
  noTop?: boolean
}


function BorderDecoration({ noLeft, noTop }: BorderProps) {
  return (
    <>
      { !noLeft && <div className="absolute top-0 left-0 h-full w-8 border-zinc-200 border-r-[1px] lg:w-12"></div> }
      { !noTop && <div className="absolute top-0 left-0 w-4/5 h-16 border-zinc-200 border-b-[1px] "></div> }
    </>
  );
}

export default BorderDecoration;