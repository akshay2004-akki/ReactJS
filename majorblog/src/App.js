import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import {login, logout} from './store/authslice'
import authService from './confi/appwrite/auth'
import {Footer, Header} from './components'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(true))
  },[dispatch])

  return !loading ? <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className="w-full block">
      <Header/>
      <main>
        
      </main>
      <Footer/>
    </div>
  </div>:(null)
}

export default App;