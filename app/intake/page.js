
import {getUser, createUser} from "../actions/dbFunctions"
import { redirect } from "next/navigation";
import TopNav from "../components/TopNav";
import { NextResponse } from "next/server";
// maybe add an about page to sell prospective users on the product
export default async function Home() {
    let user = await getUser(false)
    console.log("test1" ,user)
    if(user == null){
        user = await createUser()
    }
    const userID = user.id
    console.log(userID)
    redirect("/create") //bypasses Intake page. can actually use this page later if needed 
    return (
        <div className="flex flex-col min-h-screen">
            <TopNav settings={false} />
            <div className="spacing-top"></div>
            <div className='flex-grow w-[100vw] justify-items-center'>
                
            </div>
            <div className="spacing-bottom"></div>
        </div>
    );
}