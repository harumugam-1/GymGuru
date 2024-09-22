
import Selector from '../../../components/Selector'
export default function Home() {
  
  return (
    <div>
      <p className="text-backing">Select a muscle you would like to edit or delete:</p>
          
      <Selector type = "muscle"/>

      <p className="text-backing">Add a muscle below:</p>
    </div>
  );
}

