import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BioComponent from "./components/Bio";
import ContactComponent from "./components/Contact";
import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import NavComponent from "./components/Nav";
import ResumeComponent from "./components/Resume";
import PortfolioComponent from './components/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <NavComponent />
        
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<BioComponent />} />
          <Route path="/portfolio" element={<PortfolioComponent />} />
          <Route path="/resume" element={<ResumeComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
        
        <FooterComponent />
      </div>
    </Router>
  );
};
export default App;