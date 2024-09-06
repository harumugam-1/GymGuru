'use server'
import db from "../../db/db";
import { auth } from "../../auth";


export async function initializeUser(){
    console.time("Initializing User")
    const session = await auth();
    const email = session?.user?.email;
    const user = await db.user.findUnique({
        where:{
            email:email
        }
    })
    console.timeLog("Initializing User")

    if(user == null){
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Creating User <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        try {
            const name = session?.user.name;
            const user = await db.user.create({
                data:{
                    name:name,
                    email:email,
                }
            })
            console.log(user)
            return user
    
        } catch(error){
            console.log(error)
        }
        formatDefaultUserData()
    }
    console.log("WELCOME USER >>>", user)
    console.timeEnd("Initializing User")
}

export async function getUserEmail() {
    const session = await auth();
    const email = session?.user?.email;
    return email
}

export async function getUser(){
    const email = await getUserEmail()
    const user = await db.user.findUnique({
        where:{
            email:email
        },
    }
    )
    return user
}
  
function formatDefaultUserData(){
    console.log("implement logic here")

}
export async function verifyCurrentUser(userID, userEmail){ // add before deleting idk may be pointless
    const session = await auth();
    const email = session?.user?.email;
    const user = await db.user.findUnique({
        where:{
            email:email
        },
    }
    )
    if (userID !== user.id){
        console.log(`User ID provided (${userID}) does not match the expected user ID in the database (${user.id})------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ IMPORTANT DO NOT IGNORE -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`)
    } else if (userEmail !== email){
        console.log(`User Email provided (${userEmail}) does not match the expected user Email obtained from Google Auth! (${email})--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- IMPORTANT DO NOT IGNORE --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`)
    } else if (userEmail !== user.email){
        console.log(`User Email provided (${userEmail}) does not match the expected user Email in the database (${user.email})------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ IMPORTANT DO NOT IGNORE ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`)
    } else {
        return true;
    }
    return false;
}