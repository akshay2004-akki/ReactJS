import './App.css';
import Usercontextprovider from './userContext/Usercontextprovider';
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <Usercontextprovider>
      <h1>Context API</h1>
      <Login isNames = "akkishewr"/>
      <Profile/>
    </Usercontextprovider>
  );
}

export default App; 
