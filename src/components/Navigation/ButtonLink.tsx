import React from 'react';
interface ButtonProps {
  cName?: string,
  text: string,
  href: string,
}

export default function ButtonLink(props: ButtonProps) {
  return (
    <a
      href={props.href}
      rel='noreferrer'
      target='_blank'
      className={`${props.cName} bg-primary-500 text-white font-semibold rounded-sm py-2 px-4 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-white`}
    >
      {props.text}
    </a>
  )
}