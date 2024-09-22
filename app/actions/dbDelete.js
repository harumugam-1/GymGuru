'use server'
import db from "../../db/db";
import { getUser, verifyCurrentUser,getUserEmail } from "./dbUser";

export async function deleterFunction(type = "none",itemToDelete = "none"){
    const user = await getUser()
    if (type === "muscle"){

        console.log(`Running Deleter for >>>Muscle<<<, deleting item >>>${itemToDelete}<<<`)
        let deletedMuscle
        try{        
            deletedMuscle = await db.muscle.delete({
            where:{
                userID_name:{
                    userID:user.id,
                    name:itemToDelete,
                }
            }
        })
        }
        catch(error){
            console.log("UNABLE TO DELETE", error)
        }
        console.log("Supposed to Delete", itemToDelete, "Deleted>>>", deletedMuscle)
    }
}