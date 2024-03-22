import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import Github from './components/Github';

function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/user/:id' element={<User/>}></Route>
          <Route path='/github' element={<Github/>}></Route>
        </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
