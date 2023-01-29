import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import MobilePortfolio from './views/mobilePortfolio/mobilePortfolio';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/CV_Andreas_2023/' element={<Home />} />
      
      <Route path="/portfolio" element={<MobilePortfolio />} />
    </Routes>
    </>
  );
}

export default App;
