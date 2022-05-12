import React, { useEffect, useState } from 'react';
import './services.css'
import { useNavigate } from 'react-router-dom'
import Nav from './Navbar'
import axios from 'axios';




const Services = () => {
  let navigate = useNavigate();
  const [pack,setPack] = useState([])

  const packurl="http://localhost:9098/washerPack/allpacks"

  const get=()=>{

    axios.get(packurl).then(res=>{
      console.log(res.data)
      setPack(res.data)
    })
  }

  useEffect(() => {
    get();
     }, []);


  return (
<>
    <Nav></Nav>
    <br/><br/>
{
  pack.map(d=>(
    <div class='flip-card'>
    <div className='flip-card-inner'>
      <div class='flip-card-front'>
        <br/><br/><br/>
        <h2>{d.name}</h2>
        <br/>
        <h1 className='mo'>Rs.{d.cost}</h1>
      </div>
      <div class='flip-card-back'>
      <br/><br/>
        <p>{d.description}</p>
        <button className="pack" onClick={() => { navigate('/userhome') }}>Book Now </button></div>
    </div>
    </div>
  ))
} 
   

        {/* <div >
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
                <h2>Foam Wash</h2>
                <h1 className='mo'>Rs.1299</h1>
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
                <h2>Dhamaka Deal</h2>
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
                <h2>No Water Wash</h2>
                <h1 className='mo'>Rs.1199</h1>
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
                <h2>Exterior Wash</h2>
                <h1 className='mo'>Rs.899</h1>
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
                <h2>Interior Wash</h2>
                <h1 className='mo'>Rs.699</h1>
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
        </div> */}

    </>
  );
}
export default Services;