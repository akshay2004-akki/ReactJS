import './App.css';
import Alert from './Components/Alert.js';
import About from './Components/About.js';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  const [alert, setAlert] = useState("");
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      showAlert();
    }, 3000);
  }
  const removebg = ()=>{
    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    document.body.classList.remove('primary');
    document.body.classList.remove('danger');
    document.body.classList.remove('warning');
    document.body.classList.remove('success');
  }
  const [mode, setMode]=useState("light");
  const toggleMode = (cls)=>{
    if(cls===mode){
      removebg();
      setMode(cls);
      document.body.style.backgroundColor=mode;
      showAlert(`${cls} mode enableb`,'success')
    }
    else{
      removebg();
      setMode(cls);
      document.body.style.backgroundColor=cls;
      showAlert(`${cls} mode enableb`,'success')
    }
  }
  return (
    <>
    <Router>
      <div className="bar">
      <Navbar mode={mode} toggleMode={toggleMode} alert={alert} showAlert={showAlert}/>
      <Alert alert={alert}/>
      </div>
      <Routes>
            <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" alert={alert} showAlert={showAlert}  mode={mode} toggleMode={toggleMode} />}>
            </Route>
          </Routes>
    </Router>
    </>
  );
}

export default App;
