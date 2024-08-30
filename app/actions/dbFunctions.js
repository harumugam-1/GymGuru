
import { auth } from "../../auth";
import db from "../../db/db";

export async function getExercises() {
    console.log("USERID______________________________________________________________________________________________________________",userID,"END_______________________------------------------------------------------")
    const data = await db.exercise.findMany({
      where:{ userID : userID
      }
    })
   
    return {
        data
    }
}

export async function getUser(actually = true) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Getting User <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    let email
    if(actually){
        const session = await auth();
        email = session?.user?.email;
    }else{
        email = process.env.DEFAULT_USER_EMAIL
    }
    const user = await db.user.findUnique({
        where:{
            email:email
        }
    })
    console.log(user)

    return user
}
export async function createUser(height_cm,emailUpdates,role){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Creating User <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    try {
        const session = await auth();
        const email = session?.user?.email;
        const name = session?.user.name;
        const user = await db.user.create({
            data:{
                name:name,
                email:email,
                height_cm:height_cm,
                emailUpdates:emailUpdates,
                role:role,
            }
        })
        console.log(user)
        return user

    } catch(error){
        console.log(error)
    }
}

export async function createExercise(userID){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Creating Exercise <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

}

export async function createExercises(userID){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Creating User <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
}

//user.joined.toString()