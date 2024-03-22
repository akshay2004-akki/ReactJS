import React, { useContext } from 'react'
import UserContext from '../userContext/Usercontext'

function Profile() {
    // const [username, setUsername] = useState('')

    const {user} = useContext(UserContext)
    if(!user){
        return <div>please login</div>
    }
    else{
        return <div>welcome : {user.username}</div>
    }
}

export default Profile