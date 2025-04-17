import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Contact from '../Components/Contact';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';
import Brands from '../Components/Brands';


function Home() {
  return (
    <div className='w-full'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Services></Services>
        <Contact></Contact>
        <Brands></Brands>
        <Testimonials></Testimonials>
        <Footer></Footer>
    </div>

  );
}

export default Home;
