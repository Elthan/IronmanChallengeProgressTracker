import SVGProps from "./SVGProps";

function Triangle(props: SVGProps) {
    return (
      <svg 
        className={props.cName}
        width={props.width || '30'} height={props.height || '30'} 
        viewBox={`0 0 ${props.width || '30'} ${props.height || '30'} `}
        fill={props.fill || 'none'} 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M10.285 3.858c.777-1.294 2.653-1.294 3.43 0l8.468 14.113c.8 1.333-.16 3.029-1.715 3.029H3.532c-1.554 0-2.514-1.696-1.715-3.029l8.468-14.113Z"/>
      </svg>
    );
  }
  
  export default Triangle;