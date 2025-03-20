import React, { useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SecondarySection from './components/SecondarySection';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contactme from './components/Contactme';
import './styles/App.css';
import ParticlesComponent from './components/Particles';





const App = () => {

  return (
    <>
    <ParticlesComponent />
    <BrowserRouter>
      
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/SecondarySection" element={<SecondarySection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contactme" element={<Contactme />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
    
      
    
  );
};

export default App;
