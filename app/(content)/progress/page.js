import Link from "next/link";


export default function Home() {
  const LinkChoice = ({name, description, href}) => (
    <Link href = {href} className="button-secondary transition-button-A flex flex-col py-3 mb-3 mx-3  text-center font-light text-md text-text_primary text-wrap flex-shrink">
      {name} 
      <span className = "text-xs font-extralight text-text_secondary sm:w-[500px] w-[250px]  px-2 text-wrap flex-shrink">{description}</span>
    </Link>
  )

  return (
  <div className="items-center flex flex-col justify-center">
    <p className="my-5  text-backing">Click the Button</p>
    <LinkChoice name = "View Progress" description = "View your workout Progress" href = "/progress/view-progress"/>

  </div>

) ;
}

