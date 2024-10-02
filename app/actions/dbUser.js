'use server'
import db from "../../db/db";
import { auth } from "../../auth";
// encrypt user email and everything before entering in dataabase

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

/*import 'server-only'
    import { SignJWT, jwtVerify } from 'jose'
    import { cookies } from 'next/headers'
    import { auth, signIn, signOut } from "../../auth"
    import db from "../../db/db"
    
     
    const secretKey = process.env.SESSION_SECRET
    const encodedKey = new TextEncoder().encode(secretKey)
     
    export async function encrypt(payload ){
      return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(encodedKey)
    }
     
    export async function decrypt(session) {
      try {
        const { payload } = await jwtVerify(session, encodedKey, {
          algorithms: ['HS256'],
        })
        return payload
      } catch (error) {
        console.log('Failed to verify session')
      }
    }
     
    export async function createSession(userId) {
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)
      const session = await encrypt({ userId, expiresAt })
      console.log("Creating session with userId:", userId); // Debugging log
    
      cookies().set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'strict',
        path: '/',
      })
    }
    
    export async function updateSession() {
      const session = cookies().get('session')?.value
      const payload = await decrypt(session)
     
      if (!session || !payload) {
        return null
      }
     
      const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
      cookies().set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'strict',
        path: '/',
      })
    }
    
    export async function deleteSession() {
      cookies().delete('session')
    }
    
    export async function sessionStart(){
      let user = await getUser(true)
      if(user == null){
          user = await createUser()
      }
      await createSession(user.id)
      console.log("SESSION CREATED_______--------------------___________---------")
      
    
    }
    
    async function getUser(actually = true) {
      //console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Getting User <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
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
      //console.log(user)
    
      return user
    }
    async function createUser(){
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Creating User <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
      try {
          const session = await auth();
          const email = session?.user?.email;
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
    }
    */