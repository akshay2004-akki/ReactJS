// import logo from './fruits.jpg';
import './App.css';
import React, {useRef} from 'react'

function App() {
  const arr=["apple", "banana", "orange", "grape", "kiwi",
  "mango", "strawberry", "pineapple", "watermelon",
  "blueberry", "raspberry", "pear", "peach", "plum",
  "cherry", "apricot", "avocado", "blackberry", "cantaloupe",
  "coconut", "fig", "guava", "lemon", "lime",
  "papaya", "passion fruit", "pomegranate", "dragon fruit", "elderberry"];
  const fruit=useRef(null);
  const change=()=>{
    const getfruit=(fruit.current.value);
    const filterNames=arr.filter(element=>element.includes(getfruit.toLowerCase()));
    const names=filterNames.join('<br>');
    const items = document.querySelector('.items'); // Get the items element
    if(items.innerHTML===''){
      items.innerHTML ='item not found';
    }
    else{
      items.innerHTML =names;
    }
  }
  return (
    <>
    <div className='bi'>
      <div>
      <form>
        <label htmlFor="search">Search : </label>
        <input type="text" required ref={fruit} onChange={change}/>
      </form>
      </div>
      <div className='items'></div>
    </div>
  
    </>
  );
}

export default App;
