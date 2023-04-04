import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import About from './comps/About.js';
import Contact from './comps/Contact.js';
import Navbar from './comps/Navbar.js';
import Services from './comps/Services.js';
import Footer from './comps/Footer.js';
import Home from './comps/Home.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Navbar/>
        <Routes>
          <Route path="/" element={<><Home/></>}/>
          <Route path="/contact" element={<><Contact/></>}/>
          <Route path="/about" element={<><About/></>}/>
          <Route path="/services" element={<><Services/></>}/>
        </Routes>

      <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
