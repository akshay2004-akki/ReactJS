import React, { useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { addRecipe, loadRecepiesFromLocalStorage } from '../features/recipe/recipeSlice'

function AddRecipe() {

    const [title, setTitle] = useState("")
    const [steps, setSteps] = useState("")

    const dispatch = useDispatch()

    const handleAdd = (e)=>{
        e.preventDefault()
        dispatch(addRecipe({ title: title, steps: steps }))
        setSteps("")
        setTitle("")
    } 
    useEffect(() => {
      dispatch(loadRecepiesFromLocalStorage());
  }, [dispatch]);
    

  return (
    <form onSubmit={handleAdd} className="space-x-3 text-center mt-12 flex justify-center items-center">
        <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        type="text"
        className="bg-gray-800 rounded border border-green-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        row = {5}
        cols={80}
        />
        <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Recipe
      </button>
    </form>
  )
}

export default AddRecipe