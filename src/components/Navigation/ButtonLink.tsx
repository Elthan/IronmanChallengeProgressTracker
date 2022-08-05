interface ButtonProps {
  text: string,
  href: string,
}

export default function ButtonLink(props: ButtonProps) {
  return (
    <a
      href={props.href}
      rel='noreferrer'
      target='_blank'
      className="bg-primary-700 text-white rounded-md py-2 px-4 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-white"
    >
      {props.text}
    </a>
  )
}