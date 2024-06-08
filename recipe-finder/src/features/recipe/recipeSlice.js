import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    recipes : [],
    filteredRecipes : [] 
}

export const recipeSlice = createSlice({
    name : "recipes",
    initialState,
    reducers : { 
        addRecipe : (state, action)=>{
            const { title, steps } = action.payload;
            const recipe = {
                id : nanoid(),
                title : title,
                steps : steps
            }
            state.recipes.push(recipe);
            localStorage.setItem('recipes', JSON.stringify(state.recipes));
        },
        searchRecipe : (state,action)=>{
            const { displaytitle } = action.payload
            state.filteredRecipes = state.recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(displaytitle.toLowerCase())
              );
        },
        removeRecipe : (state, action)=>{
            state.recipes=state.recipes.filter((recipe)=>recipe.id!==action.payload)
            localStorage.setItem('recipes', JSON.stringify(state.recipes)); // Save to local storage
        },
        loadRecepiesFromLocalStorage : (state)=>{
            const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || []
            state.recipes = savedRecipes
        }
    }
})

export const {addRecipe, searchRecipe, removeRecipe, loadRecepiesFromLocalStorage} = recipeSlice.actions

export default recipeSlice.reducer