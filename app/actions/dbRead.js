import db from "../../db/db";
import {getUserEmail} from './dbUser'
export async function getAllExercises(){
    let email
    try {
        email = await getUserEmail()
    } catch(error) {
        console.log(error)
    }
    const allExercises = await db.exercise.findMany({
        where:{
            user: {
                email:{
                    equals:email
                }
            }   
        },
    })
    console.log(allExercises)
    return allExercises;
}
//                            
export async function getMuscleNames(Area){
    let email
    try {
        email = await getUserEmail()
        const allMuscles = await db.muscle.findMany({
            where:{
                user: {
                    email:{
                        equals:email
                    }
                },
                area:{
                    equals:Area,
                }   
            },
            select:{
                name:true,
            }
        })
        return allMuscles.map(item => item.name);
    } catch(error) {
        console.log(error)
    }
    return null;
}
//                            

