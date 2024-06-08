import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos:[{}],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    editTodo:(id, todo)=>{},
    checkCompleted : (id)=>{}
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=> {
    return useContext(TodoContext)
}  