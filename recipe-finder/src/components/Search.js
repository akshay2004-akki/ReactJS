import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRecipe } from '../features/recipe/recipeSlice';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const recipes = useSelector(state => state.filteredRecipes);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchRecipe({ displaytitle: searchQuery }));
  };

  return (
    <div className='pl-3'>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by recipe title"
        className='bg-gray-800 text-white rounded p-2'
      />
      <button className='bg-green-500 rounded p-2 mx-1' onClick={handleSearch}>Search</button>

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
        {
           recipes.map((recipe)=>(
                <React.Fragment>
                    <div className="md:flex-grow pl-4 flex-wrap">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        Recipe Name: {recipe.title}
                    </div>
                    <p className="mt-2 text-gray-700">{recipe.steps}</p>
                </div>
                </React.Fragment>
            ))
        } 
      </div>
    </div>
    </div>
  );
}

export default Search;
