'use server'
import db from "../../db/db";
import { auth } from "../../auth";
import { getUser, verifyCurrentUser,getUserEmail } from "./dbUser";

export async function deleterFunction(type = "none",itemToDelete = "none"){
    console.log(`Running Deleter for >>>${type}<<<, deleting item >>>${itemToDelete}<<<`)
    user = await getUser();


}