import { Request,Response, RequestHandler } from "express"
interface Todo {
    id:number
    title:string
    description:string
}
const todos:Todo[]=[]
 export const getTodos:RequestHandler=(req, res)=>{
    return res.status(200).json(todos)
}

export const getOneTodo:RequestHandler<{id:string}> =(req, res)=>{
    const id = +req.params.id
    const index=todos.findIndex(x=>x.id===id)
    if(index<0){
       return res.status(404).json({message:"Todo not found"})
    }
    return res.status(200).json(todos[index])
}


export const addTodo= (req:Request,res:Response)=>{
    const {title,description} = req.body as{title:string, description:string}
    todos.push({title,description, id:Math.floor(Math.random()* 1000)})
    return res.status(201).json({message:"Todo Added Successfully"})
}

export const updateTodo=(req:Request<{id:string}>, res:Response)=>{
    
    const id = +req.params.id
    const index=todos.findIndex(x=>x.id===id)
    if(index<0){
       return res.status(404).json({message:"Todo not found"})
    }
     const {title,description} = req.body as{title:string, description:string}

     todos[index]={...todos[index], title,description}

     res.status(200).json({message:"Todo is Updated"})
}

 const deleteTodo:RequestHandler<{id:string}>=(req, res)=>{
     const id = +req.params.id
    const index=todos.findIndex(x=>x.id===id)
    if(index<0){
       return res.status(404).json({message:"Todo not found"})
    }
    todos.splice(index,1)
    res.status(200).json({message:"Todo is Deleted"})
}

export default deleteTodo

