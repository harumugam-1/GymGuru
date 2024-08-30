'use client';
import Link from "next/link";
import { RiAddBoxFill, RiBarChart2Fill, RiHome3Fill, RiPlayListAddFill, RiSettings5Fill} from "react-icons/ri";
import React, {useState, useEffect} from "react";

export default function NavBar(){
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    
    const NavBarIcon = ({icon, description,href}) => (
        <Link href={href} className="button-system transition-button-A relative flex h-[85%] justify-center w-1/3 m-1 group flex-col">
            {hasMounted && icon}
            <span className = "flex min-w-max scale-0 text-[0.0001rem] p-0 m-0 origin-bottom group-hover:scale-100 group-hover:static group-hover:text-[0.6rem] font-semibold transition-all duration-400"> 
                {description}
            </span>
        </Link>
    )
    const iconclass = "size-[1.8rem] transition-button-A m-[1px]"
    return (
        <div className= "flex flex-row fixed nav-height nav-height-hover sm:nav-height sm:nav-height-hover items-center justify-center left-0 w-full shadow-lg bg-bg_secondary  rounded-t-2xl hover:rounded-t-md  transition-button-A min-h-max outline-A">
            <NavBarIcon icon = {<RiBarChart2Fill  className={iconclass} />} description = {"Progress"} href = '/progress'/>
            <NavBarIcon icon = {<RiAddBoxFill className={iconclass} />} description = {"Create"} href = '/create'/>
            <NavBarIcon icon = {<RiPlayListAddFill  className={iconclass} />} description = {"Log"} href = '/log'/>
        </div>
    )
}
