import React from "react";
import SVGProps from "./SVGProps";


function AngleLine(props: SVGProps) {
  return (
    <svg 
      className={props.cName}
      width={props.width || '204'} height={props.height || '146'} 
      viewBox={`0 0 ${props.width || '204'} ${props.height || '146'}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="25.5" y1="2.18557e-08" x2="25.5" y2="146"/>
      <line y1="123.5" x2="204" y2="123.5"/>
    </svg>
  );
}

export default AngleLine;