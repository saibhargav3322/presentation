import React from 'react';
import './services.css'
import { useNavigate } from 'react-router-dom'
import Nav from './Navbar'




const Services = () => {
  let navigate = useNavigate();


  return (
<>
    <Nav></Nav>
    <br/><br/>
        <div >
          <div class='flip-card'>
            <div className='flip-card-inner'>
              <div class='flip-card-front'>
                <br/><br/><br/>
                <h2>Super Wash</h2>
                <br/>
                <h1 className='mo'>Rs.499</h1>
              </div>
              <div class='flip-card-back'>
                <p>Soft Cloth Tunnel Wash</p>
                <p> Spot Free Rinse </p>
                <p> Turbo Air Dry</p>
                <button className="pack" onClick={() => { navigate('/userhome') }}>Book Now </button></div>
            </div>
            
          </div>



          <div class='flip-card'>
            <div className='flip-card-inner'>
              <div class='flip-card-front'>
              <br/><br/><br/>
                <h2>Express Wash</h2>
                <h1 className='mo'>Rs.799</h1>
              </div>
              <div class='flip-card-back'>
                <p>Express Wash plus…</p>
                <p> In-Tunnel Wheel Cleaner</p>
                <p>Triple Foam Wax</p>
                <p>Clear Coat Conditioner</p>
                <button className="pack" onClick={() => { navigate('/userhome') }}>Book Now</button></div>
            </div>
          </div>




          <div class='flip-card'>
            <div className='flip-card-inner'>
              <div class='flip-card-front'>
              <br/><br/><br/>
                <h2>Ultimate Wash</h2>
                <h1 className='mo'>Rs.999</h1>
              </div>
              <div class='flip-card-back'>
                <p>The Super Wash plus…</p>
                <p>In-Tunnel Tire Shine</p>
                <p>Underbody Wash</p>
                <button className="pack" onClick={() => { navigate('/userhome') }}>Book Now</button></div>
            </div>
          </div>

          <div class='flip-card'>
            <div className='flip-card-inner'>
              
              <div class='flip-card-front'>
              <br/><br/><br/>
                <h2>Ultimate Wash</h2>
                <h1 className='mo'>Rs.999</h1>
              </div>
              <div class='flip-card-back'>
                <p>The Super Wash plus…</p>
                <p>In-Tunnel Tire Shine</p>
                <p>Underbody Wash</p>
                <button className="pack" onClick={() => { navigate('/userhome') }}>Book Now</button></div>
            </div>
          </div>



          <div class='flip-card'>
            <div className='flip-card-inner'>
              <div class='flip-card-front'>
              <br/><br/><br/>
                <h2>The Wheel Deal</h2>
                <h1 className='mo'>Rs.1499</h1>
              </div>
              <div class='flip-card-back'>
                <p>Deluxe Wash Package plus…</p>
                <p>Clear Coat Conditioner</p>
                <p>Triple Foam Wax</p>
                <p>Wheels Finished by Hand</p>
                <p>Tire Shine by Hand</p>
                <button className="pack" onClick={() => { navigate('/userhome') }}>Book Now</button></div>
            </div>
          </div>



          <div class='flip-card'>
            <div className='flip-card-inner'>
              <div class='flip-card-front'>
              <br/><br/><br/>
                <h2>The Wheel Deal</h2>
                <h1 className='mo'>Rs.1499</h1>
              </div>
              <div class='flip-card-back'>
                <p>Deluxe Wash Package plus…</p>
                <p>Clear Coat Conditioner</p>
                <p>Triple Foam Wax</p>
                <p>Wheels Finished by Hand</p>
                <p>Tire Shine by Hand</p>
                <button className="pack" onClick={() => { navigate('/userhome') }}>Book Now</button></div>
            </div>
          </div>



          <div class='flip-card'>
            <div className='flip-card-inner'>
              <div class='flip-card-front'>
              <br/><br/><br/>
                <h2>The Wheel Deal</h2>
                <h1 className='mo'>Rs.1499</h1>
              </div>
              <div class='flip-card-back'>
                <p>Deluxe Wash Package plus…</p>
                <p>Clear Coat Conditioner</p>
                <p>Triple Foam Wax</p>
                <p>Wheels Finished by Hand</p>
                <p>Tire Shine by Hand</p>
                <button className="pack" onClick={() => { navigate('/userhome') }}>Book Now</button></div>
            </div>
          </div>



          <div class='flip-card'>
            <div className='flip-card-inner'>
              <div class='flip-card-front'>
              <br/><br/><br/>
                <h2>The Wheel Deal</h2>
                <h1 className='mo'>Rs.1499</h1>
              </div>
              <div class='flip-card-back'>
                <p>Deluxe Wash Package plus…</p>
                <p>Clear Coat Conditioner</p>
                <p>Triple Foam Wax</p>
                <p>Wheels Finished by Hand</p>
                <p>Tire Shine by Hand</p>
                <button className="pack" onClick={() => { navigate('/userhome') }}>Book Now</button></div>
            </div>
          </div>
        </div>

    </>
  );
}
export default Services