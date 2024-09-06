import addData from '../../actions/addData'
export default function Page() {

  return (
    <div className="text-xs">
      <p>settings page</p>
      <p className="w-full">
        Things To ADD: <br/><br/>
        
        Delete Account <br/>
        Change Email Address and Link with another user !!! or add social page <br/>
        Clear Data <br/>
        clear Workouts or exercises... <br/>
        Notifications <br/>
        Level of warnings, ie about frequent injuries, frequent soreness, and level of filling in for workouts. autofill
      </p>
      <form action = {addData}>
        <button 
          className="login-button mx-5 outline-4 outline-gray-500" 
        >Run addData</button>
      </form>
    </div>
  );
}


