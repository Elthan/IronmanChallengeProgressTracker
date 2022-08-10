import React from "react";
import SVGProps from "./SVGProps";


function RightAngledTriangle(props: SVGProps) {
  return (
    <svg 
      className={props.cName}
      width={props.width || '32'} height={props.height || '30'} 
      viewBox={`0 0 ${props.width || '32'} ${props.height || '30'}`}
      fill={props.fill || 'none'}  
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={`M${props.width || '32'} ${props.height || '30'}L0 0V${props.height || '30'}H${props.width}Z`}  />
    </svg>
  );
}

export default RightAngledTriangle;