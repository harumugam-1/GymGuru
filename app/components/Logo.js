
import { RiApps2AddFill } from "react-icons/ri";
import { Cinzel } from "next/font/google";
const temp_title_font = Cinzel({ subsets: ['latin'] });
const title_font = temp_title_font.className

export default function Logo({type}) {
    const Icon_GymGuru = () =>{
        return(
          <RiApps2AddFill/>
        )
    }
    
    if (type === "large"){
        return(
            <div className={`flex items-center justify-center relative ${title_font}`}>
                <div className= "text-[2.4rem] sm:text-[4.32rem] md:font-[900] pt-[3%] pb-[2%] flex flex-row text-cyan-900">
                    <Icon_GymGuru/>
                    <h1 >GymGuru</h1>
                </div>
                <div className="absolute font-semibold text-[2.5rem] sm:text-[4.5rem] text-white pt-[2.3%] pb-[2%] flex flex-row" >
                    <Icon_GymGuru/>
                    <h2 >GymGuru</h2>
                </div>
            </div>
        )
    } else if (type === "topnav"){
        return(
            <div className={`flex items-center justify-center relative ${title_font}`}>
                <div className= "sm:text-[1.45rem] text-[.79rem] py-1 font-[900] flex flex-row text-cyan-900">
                    <Icon_GymGuru/>
                    <h1 >GymGuru</h1>
                </div>
                <div className="absolute font-semibold sm:text-[1.5rem] text-[.8rem] py-1 text-white flex flex-row" >
                    <Icon_GymGuru/>
                    <h2 >GymGuru</h2>
                </div>
            </div>
        )   
    } else{
        return(
            <div className={`flex items-center justify-center relative ${title_font}`}>
                <div className= " text-[0.96rem] font-[900] pt-[3%] pb-[2%] flex flex-row text-transparent text-cyan-900">
                    <Icon_GymGuru/>
                    <h1 >GymGuru,</h1>
                </div>
                <div className="absolute font-extrabold text-[1rem] text-slate-800 pt-[2.3%] pb-[2%] flex flex-row">
                    <Icon_GymGuru/>
                    <h2 >GymGuru,</h2>
                </div>
            </div>
        )
    }
}