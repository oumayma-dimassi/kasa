import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Notfound from './pages/Notfound';
import Apartement from './pages/Apartement/Appartement';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/propos" element={<About />} />
                <Route path="*" element={<Notfound />} />
                <Route path= "/Apartement/:id" element={<Apartement />} />
                
            </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);