import "./App.css";
import Bestseller from "./components/Bestseller";
import Finance from "./components/Finance";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
// import Product from './components/Product';
import Top from "./components/Top";
import Topdeals from "./components/Topdeals";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
            <Hero />
            <Top />
            <Topdeals />
            <Finance />
            <Product />
            <Bestseller />
            <Footer />
            </>
          }></Route>
        </Routes>
        <Routes>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
