import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Contact from '../Components/Contact';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';


function Home() {
  return (
    <div className='w-full'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Services></Services>
        <Contact></Contact>
        <Testimonials></Testimonials>
        <div className='bg-white h-4'></div>
        <Footer></Footer>
    </div>

  );
}

export default Home;
