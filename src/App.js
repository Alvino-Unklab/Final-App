import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import More from './pages/more';

import './styles/styles.css';




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/more" element={<More />}/>
    </Routes>
  );
}

export default App;
