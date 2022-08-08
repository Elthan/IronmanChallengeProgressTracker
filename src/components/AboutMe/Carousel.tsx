import React from "react";
import 'tw-elements';


interface ImageSrc {
  src: string,
  alt: string
}

interface CarouselProps {
  cName?: string,
  imageSrcList: ImageSrc[],
}

function Carousel(props : CarouselProps) {
  return (
    <div
      id="carouselCrossfade"
      className={`carousel slide relative ${props.cName}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full h-full overflow-hidden">
        {props.imageSrcList.filter(Boolean).map((item, index) => {
          return (
            <div className={`carousel-item float-left w-full h-full ${index === 0 ? 'active' : ''}`}>
              <img src={item.src} alt={item.alt} className="block w-full h-full object-cover" />
            </div>
          ); 
        })}
      </div>
    </div>
  );
}

export default Carousel;