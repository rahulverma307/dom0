"use server"

import {auth,currentUser} from "@clerk/nextjs/server"
import {prisma} from "@/lib/db"

export const onBoardUser = async () => {
   const {userId} = await auth();
   if(!userId) return;

   const clerkUser = await currentUser()
   if(!clerkUser) return;

   const email = clerkUser.primaryEmailAddress?.emailAddress??
   clerkUser.emailAddresses[0]?.emailAddress ??
   null;

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
        email,
        name,
        imageUrl:clerkUser.imageUrl,
    }
   })

}   

