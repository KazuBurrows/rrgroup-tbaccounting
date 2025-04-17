import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home';
import Financing from './Views/Financing';
import Tax from './Views/Tax';
import Paye from './Views/Paye';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/financing" element={<Financing />} />
      <Route path="/tax" element={<Tax />} />
      <Route path="/paye" element={<Paye />} />
    </Routes>

  );
}

export default App;
