import React from 'react';
import Navbar from './usernav'
import '../Home/services.css'
import { useNavigate } from 'react-router-dom';
import Orders from './getorders/Getorders'
import Footer from '../../components/Home/Footer';
import Link from 'react-dom'
import Section from '../Home/Services'


function Userhome(props) {

    const navigate=useNavigate();

    return (
      <div>
          <Navbar/>
     <div >
     <img  src='./images/userhome.jpg'  style={{width: '100%', position: 'absolute',right:"0px",height:"100%",filter:"grayscale(0%) blur(4px)"}} />
       
       <h1 style={{color:"gold", position:'relative',top:"200px",fontSize:"60px"}}>Welcome to Clean Car Wash</h1>
       <h6 style={{color:"white", position:'relative',top:"220px",fontSize:"20px",marginLeft:"450px"}}>You are few steps away to order dream wash for your car....</h6>
        {/* <br/>
        <br/>
      <h2  style={{ position:'relative', top:'120px', fontWeight:'700',fontStyle:'italic', fontSize: '50px'}}> We are offering our services in these locations  </h2>      
         <br/><br/>
        <ul style={{ position:'relative', top:'120px'}}>
          <h4 style={{ fontSize:'40px',marginRight:'400px'}}> Eluru</h4>
          <h4 style={{ fontSize:'40px',marginLeft:'400px',marginTop:'-59px'}}> Hyderabad</h4>
          <br/>
          <h4 style={{ fontSize:'40px',marginRight:'400px'}}> Kakinada</h4>
          <h4 style={{ fontSize:'40px',marginLeft:'400px',marginTop:'-59px'}}> Rajamundry</h4>
          <br/>
          <h4 style={{ fontSize:'40px',marginRight:'400px'}}> Vizag</h4>
          <h4 style={{ fontSize:'40px',marginLeft:'400px',marginTop:'-59px'}}> Vijayawada</h4>
          <br/>
          <br/>
          <p style={{ fontSize:'25px',textAlign:'center',color:'orangered'}}> We are expanding our services all over India soon.....</p>

        </ul> */}
     </div>
   <br/><br/>
   {/* <Section></Section> */}
   <div>
   <div style={{position:"absolute",top:"820px"}}>
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
                <p>Express Wash plus???</p>
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
                <p>The Super Wash plus???</p>
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
                <p>The Super Wash plus???</p>
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
                <p>Deluxe Wash Package plus???</p>
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
                <p>Deluxe Wash Package plus???</p>
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
                <p>Deluxe Wash Package plus???</p>
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
                <p>Deluxe Wash Package plus???</p>
                <p>Clear Coat Conditioner</p>
                <p>Triple Foam Wax</p>
                <p>Wheels Finished by Hand</p>
                <p>Tire Shine by Hand</p>
                <button className="pack" onClick={() => { navigate('/userhome') }}>Book Now</button></div>
            </div>
          </div>
      </div>
      </div> 
      <div  style={{position:"absolute",top:"1550px",width:"100%"}}>
      <Footer></Footer>
      </div>
      </div>
  );
}

export default Userhome;