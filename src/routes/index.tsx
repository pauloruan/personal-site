import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from '../pages/About'
import { Home } from '../pages/Home';

export const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}