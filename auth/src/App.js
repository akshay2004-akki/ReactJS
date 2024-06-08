import { useState, useEffect } from 'react';
import './App.css';
import { AuthProvider } from './context/UseAuth';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';
import SignupForm from './components/SignupForm';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userPresent, setUserPresent] = useState("")

  const signUp = (user) => {
    const userAlready = users.find((users) => users.user.username === user.username)
    if(!userAlready){
      setUsers((prev)=>[{id:Date.now(), user},...prev])
      setUserPresent("")
    }
    else{
      setUserPresent("user already present")
    }
  }

  const logIn = (usernames, password) => {

  
    const searchUser = users.find((user) => user.user.username === usernames && user.user.password===password);
    if (searchUser) {
      setCurrentUser(searchUser.user.username);
      setIsLoggedIn(true);
    } else {
      setCurrentUser("Incorrect username or password");
    }
  }
  

  const logOut = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  }

  useEffect(()=>{
    const storedUsers = JSON.parse(localStorage.getItem("users"))
    if(storedUsers && storedUsers.length>0){
      setUsers(storedUsers)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("users", JSON.stringify(users))
  },[users])

  return (
    <AuthProvider value={{isLoggedIn,logIn,logOut, signUp, users}}>
      current user : {currentUser} <br />
      {userPresent} <br />
      signUp : <SignupForm/> <br />
      login : <LoginForm/> <br />
      logout : <LogoutForm/>
    </AuthProvider>
  );
}

export default App;

// const usernames="akshay"

// const users = [{id: 1711184518872, user: {username: "prashant", password: "22"}},
// {id: 1711184510786, user: {username: "akshay", password: "11"}}]

// const searchUser = users.find((user) => user.user.username.trim() === usernames);
//     console.log("Search result:", searchUser);