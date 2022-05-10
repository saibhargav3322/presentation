import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Gallery...!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/carwash.jpg'
              text='Explore the fabulous wash'
              label='Quick wash'
              path='/userhome'
            />
            <CardItem
              src='images/bodyclean.jpg'
              text='Beyond clean and more than just shine!'
              label='Our Awesome Workers'
              path='/userhome'
            />
             <CardItem
              src='images/wash.jpg'
              text='Express wash in minutes.'
              label='Drivethru'
              path='/userhome'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/frontwash.jpg'
              text='Always expect fast and efficient service.'
              label='Amazing Customer Service'
              path='/userhome'
            />
            <CardItem
              src='images/gear.jpg'
              text='Drive with pride in a clear car.'
              label='Fast And Accurate Services'
              path='/userhome'
            />
            <CardItem
              src='images/car.jpg'
              text='Cleaning Waterless Wash.'
              label='Waxing'
              path='/userhome'
            />
          </ul>
        </div>
        <div>
          <h1  className='about' id='about' >ABOUT US</h1><br></br>
          <p>Clean Car Wash is a brand which is literally going to change the way people think about car 
            cleaning. It is a unique mechanized car cleaning concept where cars are getting pampered by the latest equipments including high pressure cleaning machines, spray injection and extraction machines, high powered vacuum cleaners, steam cleaners and Clean Car Wash is a brand which is literally going to change the way people think about car cleaning. It is a unique mechanized car cleaning concept where cars are getting pampered by the latest equipments including high pressure cleaning machines, spray injection and extraction machines, high powered vacuum cleaners, steam cleaners and so on. In this fast moving life today we tond to spend more time in travelling as a result spend hours in the car, mainting the traffic jams. Air Pollution, Dust, Rain, Sunlight and Adverse road conditions all keeps adding on woos of common car users. And as a result, there is a severe need of Professional Car Cleaning Organization to take care of all Car Cleaning jobs and give us the finest and ultimate car cleaning experience and satisfaction.</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
