
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()// insert for debuggin purposes can also choose one or more. {log:["query","error","warn","info"]}

export async function main() { 
  const currTime = new Date()
  console.log("\n Running Main ",currTime,"\n")

  //////////  await prisma.user.deleteMany()                                      //remember to delete this dummmy

 
  createUser("Hsd fi","AB.sa@gmail.com",)
  const totalNumUsers = await prisma.user.findMany()
  console.log(totalNumUsers.length)
  const userSignedIn = await prisma.user.findMany({
    where:{ NOT:{name:"Hari"}},
    include:{
      userPreference:true
    }})
/*      userPreference:{
        emailUpdates:true,
      }
    },
    select:{
      email:true,
      role:true,
      userPreference:true
    }*/
  console.log(userSignedIn, userSignedIn.length)
  

  const userChanged = await prisma.user.update({//to update multiple updateMany obviously dumbpo.. no select or include tho,  just like createMany 
    where: {
      email:'ABCDEFGsdfsa@gmail.com'
    },
    data:{
      role:"ADMIN",
      userPreference:{
        update:{emailUpdates:true}
      }
      // if there is a field like age. can doe age: {increment:1} . also decrement, multiply, divide.. can also create a userPreference and then do data:{userPreference:{connect:{"user pref id"}}}, or disconnect. 
    }

  })


  console.log("\nRAN MAIN\n")

}

async function createUser(name,email,role = "FREE",emailUpdates = false,printAll = false){
  try {//warning id will increment even if creating a new user failed (even if i am just editing file while devStart)
    const currUser = await prisma.user.create({
      data:{
        name:name, 
        email:email,
        role: role,
        userPreference:{
          create:{
            emailUpdates: emailUpdates
          }
        },
      },
      select:{
        name:true,
        id:true
      }
      })
    if(printAll === true){
      console.log(currUser)
      const allUsers = await prisma.user.findMany({include:{userPreference:true}})// can do include for findMany but cannot do select
      console.log('\n ALL USERS ME:',allUsers)
    }
  } catch (error) {
    console.log(`There was an error, it seems this user already exists. Error Message: ${error}`)
  }


}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })