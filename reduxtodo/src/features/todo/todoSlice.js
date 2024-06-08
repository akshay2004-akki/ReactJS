import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid : Creates wnique id for the rendering elements

//createSlice is a utility function used to create Redux slices, which are portions of the Redux state and associated reducer logic.

// Imagine you have a large pizza, and you want to slice it into smaller pieces so that each slice has its own toppings and flavor. Similarly, in a Redux application, the entire state can be seen as a big pizza, and sometimes you need to divide it into smaller parts, each managing its own data and logic.


// Now, createSlice in Redux is like a pizza cutter. It helps you cut your big pizza (state) into smaller, more manageable slices (slices of state). Each slice (or Redux slice) contains a specific part of your application's state and the logic to update that part.


const initialState = {
    todos : [{id:1, text:"hello Wolrd"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers :{
        addTodo : (state,action)=>{
            const todo ={
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo : (state, action)=>{
            const { id,newText } = action.payload;
            const todoUpdate = state.todos.find((todo)=>todo.id===id)
            // console.log((todoUpdate));
            if(todoUpdate){
                todoUpdate.text = newText;
            }
        }
    }
});

export const {addTodo,removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer