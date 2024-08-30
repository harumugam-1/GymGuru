
import Link from "next/link";
import Image from 'next/image'
import Logo from './Logo'
import { auth } from "../../auth"
import LogOut from './LogOut'
import PathBar from './PathBar'
export default async function TopNav({settings = true}){
    const session = await auth();
    const name = session?.user?.name
    const length_limit = 13
    const user_name = (name.length > length_limit) ? name.substring(0,length_limit).concat("...") : name;
    return (
        <div className= "flex flex-col justify-between fixed min-h-max w-full shadow-lg bg-bg_primary_alt rounded-b-3xl hover:rounded-b-md transition-button-A outline-A">
            <div className= "flex flex-row justify-between min-h-max w-full shadow-lg bg-bg_secondary rounded-b-3xl hover:rounded-b-md transition-button-A outline-A py-1">
                <div className="flex flex-row items-center pl-2">
                    <Logo type = 'topnav'/>
                </div>
                <div id="username-logout-holder" className="flex flex-row items-center pb-1 text-[0.6rem] sm:text-lg pr-2">
                    {settings === true ? <Link href = "/settings" className="button-system flex-row px-1 mx-2 h-6 sm:h-10 transition-button-A">
                        <h1 className="p-2">{user_name}</h1>
                        <div>
                        <Image
                            src={session?.user?.image}
                            alt=""
                            width ={32}
                            height={32}
                            className="user-avatar rounded-full outline-A outline-2 sm:w-8 sm:h-8 w-4 h-4"/>
                        </div>
                    </Link>:<></>}
                    <LogOut/>
                </div>
            </div>
            <PathBar />
        </div>
    )
}

