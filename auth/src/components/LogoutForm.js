import React from 'react'
import useAuth from '../context/UseAuth'

function LogoutForm() {

    const {logOut} = useAuth()
    const handleLogOut = ()=>{
        logOut()
    }
  return (
    <>
        <button className='bg-green-300 rounded p-1' onClick={handleLogOut}>logOut</button>
    </>
  )
}

export default LogoutForm