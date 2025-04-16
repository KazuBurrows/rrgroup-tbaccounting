import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/rcd-safety-switch-testing" element={<ServiceRCD />} />
      <Route path="/electrical-testing-and-tagging-services" element={<ServiceElectrical />} />
      <Route path="/portable-appliance-testing" element={<ServicePortable />} />
      <Route path="/earth-loop-impedance-test" element={<ServiceEarth />} /> */}
    </Routes>

  );
}

export default App;
