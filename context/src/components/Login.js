import { useContext, useEffect, useState } from "react"
import React from 'react'
import Usercontext from "../userContext/Usercontext"
import User from './User'

function Login({isNames}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(Usercontext)
    const {setIsName} = useContext(Usercontext)

    useEffect(()=>{
        setIsName({isNames})
    },[isNames,setIsName])

    const handlesubmit  = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <>
        <input value={username} type="text" onChange={(e)=>setUsername(e.target.value)}/>{"    "}
        <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handlesubmit}>Submit</button>
        <User/>
    </>
  )
}

export default Login