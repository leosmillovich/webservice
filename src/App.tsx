import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BlogIndex from './pages/blog/index';
import BlogPost from './pages/blog/[slug]';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal - Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Rutas del Blog */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        {/* Ruta 404 - Redirigir a home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}