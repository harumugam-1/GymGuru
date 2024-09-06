
import { initializeUser} from "../actions/dbUser"
import { redirect } from "next/navigation";
import TopNav from "../components/TopNav";
import { NextResponse } from "next/server";
// maybe add an about page to sell prospective users on the product
export default async function Home() {
    await initializeUser()
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