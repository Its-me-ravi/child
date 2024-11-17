import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbarhome } from './pages/Navbarhome'; // Update path if needed
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import  Videos  from './pages/Videos';
import  Contact  from './pages/Contact';
import ParentsCorner from './pages/ParentsCorner';
import WhyUs from './pages/WhyUs';
import Footer from './pages/Footer';
import StackingGame from './threejs/StackingGame';

function App() {
  return (
    <Router>
      <div>
        <Navbarhome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/ParentScorner" element={<ParentsCorner />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/Whyus' element={<WhyUs/>}/>
          
        </Routes>
        <Footer/>
        {/* <StackingGame/> */}
      </div>
    </Router>
  );
}

export default App;
