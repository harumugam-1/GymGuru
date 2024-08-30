import ButtonOption from '../../components/ButtonOption'

export default function Home() {
 
  return (
    <div className="items-center flex flex-col justify-center">
      <p className="my-5  text-backing">What would you like to log?
        <span></span>
      </p>
      <ButtonOption  name="Recommended Workout" description="Created using machine learning." href="/log/recommended"/>
      <ButtonOption  name="Preset Workout" description="Continue with a prebuilt workout routine." href="/log/preset"/>
      <ButtonOption  name="CHYOA Workout" description="Select exercises as you progress, with the option to save the workout at the end." href="/log/chyoa"/>
      <ButtonOption  name="Daily Update" description="Log any soreness or injuries in order to improve the recommendation system." href="/log/daily-update"/>
      
    </div>

  );
}
