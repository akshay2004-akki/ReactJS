import React, { useState } from 'react'
import UserContext from './Usercontext'

function Usercontextprovider({children}) {
    const [user, setUser] = useState(null)
    const [isName, setIsName] = useState(null)
  return (
    <UserContext.Provider value={{user,setUser, isName, setIsName}}>
        {children}
    </UserContext.Provider>
  )
}

export default Usercontextprovider
