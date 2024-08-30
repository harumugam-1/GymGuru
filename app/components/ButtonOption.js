import Link from "next/link"
export default function ButtonOption({name, description, href,className}) {
    return(
        <Link 
            href = {href} 
            className={"button-secondary transition-button-A flex flex-col py-3 mb-3 mx-3  text-center font-light text-md text-text_primary text-wrap flex-shrink" + className}>
                {name} 
            <span className = "text-xs font-extralight text-text_secondary sm:w-[350px] w-[250px]  px-2 text-wrap flex-shrink">{description}</span>
        </Link>
    )
}
    