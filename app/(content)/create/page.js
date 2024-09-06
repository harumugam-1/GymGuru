import Link from "next/link";
import ButtonOption from '../../components/ButtonOption'


export default function Home() {
  
  return (
    <div className="items-center flex flex-col justify-center">
      <p className="my-5  text-backing">What would you like to create or update?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <ButtonOption name = "Workout Routine" description = "Create a preset Workout Routine." href = "/create/workout-routine"/>
        <ButtonOption name = "Strength Exercise" description = "Available metrics include: Weight, Sets, Dropsets, Reps, Rest Time, and more." href = "/create/strength-exercise"/>
        <ButtonOption name = "Cardio Exercise" description = "Available metrics include: Distance, Pace, Duration, Incline, and more." href = "/create/cardio-exercise"/>
        <ButtonOption name = "Muscles" description = "Add or remove muscles you want to track progression for" href = "/create/muscles"/>
      </div>
    </div>
    ) ;
}
