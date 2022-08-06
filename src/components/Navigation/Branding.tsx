import React from 'react';

interface Brand {
  src: string,
  name: string
}

export default function Branding(props: Brand) {
  return (
    <div className="flex items-center flex-shrink-0 mr-4">
      <img
        className="block h-8 w-auto rounded-full mr-2"
        src={props.src}
        alt="Edison Park Logo"
      />
      <h1 className="text-white font-bold text-xl">{props.name}</h1>
    </div>
  )
}