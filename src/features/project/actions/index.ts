"use server"

import {getcurrentUser} from "@/features/auth/action"
import { MessageRole,MessageType} from "@/generated/prisma/client"
import {prisma} from "@/lib/db"
import {generateSlug} from "random-word-slugs"
import {inngest} from "@/features/inngest/client"
import { error } from "console"


export const createProject = async (value:string) => {
    const user = await getcurrentUser();
    if(!user){
        throw new Error("Unauthorized")
    } 

    try {
        const project = await prisma.project.create({
        data:{
            name:generateSlug(2,{format:"kebab"}),
            userId:user.id,
            messages:{
                create:{
                    content:value,
                    role:MessageRole.User,
                    type:MessageType.RESULT,
                }
            }
        }
    });

    //todo: send project to inngest
    return project
    } catch (error) {
        console.log(error)
        throw new Error("Failed to create project")
        
    }
}

export const getProjectById = async (id:string) => {
    const user = await getcurrentUser();
    if(!user){
        throw new Error("Unauthorized")
    }
    try {
        const project = await prisma.project.findUnique({
            where:{
                id,
                userId:user.id,
            }
        })
        if(!project){
            throw new Error("Project not found")
        }
        return project
    } catch (error) {
        console.log(error)
        throw new Error("Failed to get project")
    }
}

export const getProject = async (id:string)=>{
    const user=await getcurrentUser();

    if(!user){
        return{
            error:"user not found"
        }
    }

    try {
         
      const project =  await prisma.project.findMany({
          where:{
             userId:user.id
          },
          orderBy:{
            createdAt:"desc"
          }

            
        })
        if(!project){
            return{
                error:"Project not Found"
            }
        }

        return project


    } catch (error) {
        console.log(error)
        throw new Error("Failed to get project")
        
    }
}




