import React, { useContext } from 'react'
import UserContext from '../userContext/Usercontext'

function User() {
    const {isName} = useContext(UserContext)
    if(!isName) return <div>akki</div>
    else return <div>akshay : {isName.isNames}</div> // props from the app.js component is passed without prop drilling
}

export default User