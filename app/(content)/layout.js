import NavBar from '../components/NavBar'
import TopNav from '../components/TopNav'
import { auth } from "../../auth"
import { redirect } from "next/navigation";




export default async function HomeLayout({ children }) {
  const session = await auth();
  if (!session?.user) redirect ("/");
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav settings= {true} />
      <div className="spacing-top"></div>
      <div className='flex-grow w-[100vw] justify-items-center'>
        {children}
      </div>
      <div className="spacing-bottom"></div>
      <NavBar/>
    </div>

  );
}

// maybe try using the method described in ecommerce by webdevsimplified with middleware.ts to prevent user from accessign later parts. might be mor esecure
