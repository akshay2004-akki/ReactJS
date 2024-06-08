//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddRecipe from './components/AddRecipe';
import UpdtRmv from './components/UpdtRmv';
import Search from './components/Search';

function App() {
  return (
    <Provider store={store}>
      <p className="text-3xl w-full text-center">Add Recipe</p>
      <AddRecipe/><br /> <br />
      <p className='text-3xl mx-3 my-2'>Search recipe</p>
      <Search/> <br />
      <br />
      <p className='text-3xl mx-3 my-2'>Actual list</p>
      <UpdtRmv/>
    </Provider>
  );
}

export default App;
