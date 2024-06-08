import React, { useState } from 'react'
import useAuth from '../context/UseAuth'

function SignupForm() {

    const {signUp} = useAuth()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp({username, password})
        setUsername("")
        setPassword("")
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
      <button className='bg-green-300 rounded p-1' type="submit">Sign Up</button>
    </form>
  )
}

export default SignupForm