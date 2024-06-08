import React from 'react'
import { useSelector} from 'react-redux'
// import { removeRecipe } from '../features/recipe/recipeSlice'
import RecipeCard from './RecipeCard'

function UpdtRmv() {
    const recipes = useSelector(state=>state.recipes)
    // const dispatch = useDispatch()

    
  return (
    <>
        
        <ul className="list-none items-center w-1/2">
        {recipes && recipes.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCard recipe = {recipe}/> <br />
          </div>
        ))}
      </ul> 
    </>
  )
} 

export default UpdtRmv