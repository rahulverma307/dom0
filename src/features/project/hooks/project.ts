import { useMutation,useQueryClient,useQuery } from "@tanstack/react-query"
import { createProject ,getProjectById,getProject} from "../actions"




export const useCreateProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(value:string)=>createProject(value),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["project"]})
        }
    })
}

export const useGetProjects = () => {
    return useQuery({
        queryKey:["project"],
        queryFn:()=>getProject
    })
}

export const useGetProjectById = (id:string) => {
    return useQuery({
        queryKey:["project",id],
        queryFn:()=>getProjectById(id)
    })
}

async function unwrapActionResult(result:any){
    if(result.error){
        throw result.error;
    }
    return result.data;
}

