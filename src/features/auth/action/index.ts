"use server"

import {auth,currentUser} from "@clerk/nextjs/server"
import {prisma} from "@/lib/db"

export const onBoardUser = async () => {
   const {userId} = await auth();
   if(!userId) return;

   const clerkUser = await currentUser()
   if(!clerkUser) return;

   const email = clerkUser.primaryEmailAddress?.emailAddress??
   clerkUser.emailAddresses[0]?.emailAddress ?? null;

   const name = clerkUser.fullName ??
   ([clerkUser.firstName,clerkUser.lastName].filter(Boolean).join(" ")||null)

   await prisma.user.upsert({
    where:{clerkid:userId},
    update:{
        email,
        name,
        imageUrl:clerkUser.imageUrl,},
    create:{
        clerkid:userId,
        firstName:clerkUser.firstName,
        lastName:clerkUser.lastName,
        email,
        name,
        imageUrl:clerkUser.imageUrl,
    }
   })

}  

export const getcurrentUser = async () =>{
  try {
    const user = await currentUser();
    if(!user){
        return null
    }
    const dbUser = await prisma.user.findUnique({
        where:{
            clerkid:user.id
        },
        select:{
            id:true,
            email:true,
            name:true,
            imageUrl:true,
            clerkid:true,
        }
    })

    return dbUser
    
  } catch (error) {
    console.log(error)
    return null
  }
}


