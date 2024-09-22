import db from "../../db/db";
import { getUser } from "./dbUser";



export async function updateFunction(type = "none",itemToDelete = "none"){
    console.log(`Running Updater for >>>${type}<<<, updating item >>>${itemToDelete}<<<`)
    const user = await getUser();


}