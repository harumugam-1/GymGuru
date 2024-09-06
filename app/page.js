
import { doSocialLogin } from "./actions/signInSignOut"
import Logo from "./components/Logo"
import {getOrCreateUser} from "./actions/dbUser"
// maybe add an about page to sell prospective users on the product
export default function Home() {

  return (
    <div className="flex flex-col min-h-screen" >
      <div id = "title_subtitle" className=" min-h-max bg-bg_secondary rounded-b-[1rem] outline-A outline-4">
          <div id = "title" className=" bg-bg_primary rounded-b-[4rem] flex items-center justify-center relative outline-A outline-4">
            <Logo type = "large"></Logo>
          </div>
          <div id = "subtitle" className="font-bold p-6">
            <div className="justify-center flex flex-row">
              <p className = "p-1 text-lg">Welcome to GymGuru,</p>
            </div>
            <p className="font-normal text-sm sm:text-base justify-center text-center ">A next-level workout tracker with built-in data analytics and machine learning to bring your gym progress to the next level.</p>
          </div>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow py-2 ">
        <h1 className="text-lg sm:text-2xl mx-2 my-3 text-center">Please Log In Below Using Your Google Account</h1>
        <form action = {doSocialLogin}>
          <button 
            className="login-button" 
            type = 'submit' 
            name = 'action' 
            value = 'google'
          >Sign In With Google</button>
        </form>
      </div>
    </div>


  );
}
