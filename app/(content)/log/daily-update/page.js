import db from "../../../../db/db";



async function writeUserInput(){
  const data = await db.update.createManyAndReturn({
    
  })
}

export default function Home() {//schema UserUpdate

  return (
    <div className="items-center flex flex-col justify-center">
      <p className="my-5  text-backing">Daily Update</p>
    </div>

  );
}
