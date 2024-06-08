import React from 'react';
import { useDispatch } from 'react-redux';
import { removeRecipe } from '../features/recipe/recipeSlice';

function RecipeCard({ recipe }) {
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex p-4">
        <div className="md:flex-shrink-0">
          {/* Placeholder for recipe image */}
          <div className="h-48 w-full bg-gray-200 md:h-auto md:w-48 rounded-lg overflow-hidden flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>
        <div className="md:flex-grow pl-4">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Recipe Name: {recipe.title}
          </div>
          <p className="mt-2 text-gray-700">{recipe.steps}</p>
          <button
            onClick={() => dispatch(removeRecipe(recipe.id))}
            className="mt-4 text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded-md text-md"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
