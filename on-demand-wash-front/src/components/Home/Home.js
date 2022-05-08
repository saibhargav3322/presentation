import React from 'react';
import '../../App.css';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Nav from './Navbar'

function Home() {
  return (
    <>
    <Nav></Nav>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
