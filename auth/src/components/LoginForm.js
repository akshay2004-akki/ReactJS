import React from 'react'
import useAuth from '../context/UseAuth'
import { useState } from 'react';


function LoginForm() {

    const {logIn} = useAuth()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(username && username.length>0){
          console.log("type of : ", typeof(username))
            logIn(username, password)
            setUsername("")
            setPassword("")
        }
        else{
            return
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className='bg-green-300 rounded p-1' type="submit">Login</button>
    </form>
  )
}

export default LoginForm