import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Services from '../Components/Services';


function Home() {
  return (
    <div className='w-full'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Services></Services>
    </div>

  );
}

export default Home;
