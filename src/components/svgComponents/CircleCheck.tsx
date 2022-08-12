import SVGProps from "./SVGProps";

function CircleCheck(props: SVGProps) {
    return (
        <svg className={props.cName}
            width={props.width || '30'} height={props.height || '30'}
            viewBox={`0 0 ${props.width || '24'} ${props.height || '24'} `} 
            xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
                <path d="M8 12.5l3 3l5-6" stroke={props.fill || 'current-color'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke={props.fill || 'current-color'} strokeWidth="2"/>
            </g>
        </svg>
    );
  }
  
  export default CircleCheck;