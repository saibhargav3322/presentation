import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/dust.mp4' autoPlay loop muted />
      <h2>Giving your car</h2>
      <h1 >THE BEST CLEANING</h1>
      <h2>IT EVER HAD</h2>
      <marquee  behavior='scroll'
    scrollamount='20'
    width='50%'
    direction='right'
    height='50px'
    > <h2 style={{color:"orangered"}}>Book today, wash your vechicle as often as you want</h2></marquee>
      <div className='hero-btns'>
      
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
        Book Now
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;