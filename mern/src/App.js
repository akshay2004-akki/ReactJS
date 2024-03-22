import React,{useRef} from 'react'
//import Goal from './Component/Goal.js';
import './App.css'

export default function App() {
  let nameArray=[];
  let passArray=[];
  const nme=useRef(null);
  const pass=useRef(null);
  const submit= (e)=>{
    const nm=(nme.current.value);
    const ps=(pass.current.value);
    if(nm===null || nm==='' || ps===null || ps===''){
      e.preventDefault();
      alert('Please fill the required field')
    }
    else{
      nameArray.push(nm);
      passArray.push(ps);
      e.preventDefault();
    }
  }
  const show = (e)=>{
    console.log(nameArray);
    console.log(passArray);
    e.preventDefault();
  }
  return (
    <>
    <div className='form'>
      <form action="" className='inside'>
        <label htmlFor="name">
          Enter your name : <br />
          <input type="text" placeholder='name' required ref={nme}/> <br />
          </label>
        <label htmlFor="password">
          Enter your password : <br />
          <input type="password" placeholder='password' required ref={pass}/><br /> 
        </label>

        <button onClick={submit}>submit</button><br />
        <button onClick={show}>Show details</button>
      </form>
    </div>
    </>
  )
}

