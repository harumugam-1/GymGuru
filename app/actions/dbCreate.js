import db from "../../db/db";
import { getUser } from "./dbUser";
//!!! MAX SIZE OF 17 Characters for NAMES when creating such that the thing isnt to large
//                                   str,enum,model,str    ,model       , str               , [models]        , boolean, booelan       , int,     [models]
export async function createExercise(name,area,primaryMuscle,primaryMuscleName,secondaryMuscles,symmetric,calisthenics,overallFatigue,muscleFatigue){
    let user
    try {
        user =await getUser()
        const createdExercise = await db.exercise.create({
            data:{
                name:name,
                area:area,
                user:user,
                userID: user.id,
                
                
                primaryMuscle: primaryMuscle,
                primaryMuscleName: primaryMuscleName,
                secondaryMuscles: secondaryMuscles,
                
                symmetric: symmetric,
                calisthenics: calisthenics,
                overallFatigue:overallFatigue,
                muscleFatigue:muscleFatigue,
                
              
            }
        })
        return createdExercise;
    } catch(error) {
        console.log(error)
    }
    return null;
    
}

export async function createMuscle(name,area){
    if (name.length >15){
        const errorMessage = "Please use a name that is less than 16 characters."
        console.log(errorMessage)
        return errorMessage
    }
    let user
    try {
        user = await getUser()
        const createdMuscle = await db.muscle.create({
            data:{
                name:name,
                area:area,
                userID: user.id,            
            }
        })
        return createdMuscle;
    } catch(error) {
        console.log(error)
    }
    return null;        
}
