import React from 'react';
import Washernav from './washernav'
import Footer from '../../components/Home/Footer';

function Washerhome(props) {
    return (
        <div>
            <Washernav></Washernav>

            <div >

       <img  src='./images/washerhome.jpg'  style={{width: '100%',position: 'absolute', right:'0px',filter:"grayscale(0%) blur(5px)",top:"-400px"}} />
       {/* <br/>
          <br/>
        <h2  style={{ position:'relative', top:'120px', fontWeight:'800',fontStyle:'italic', fontSize: '60px', color:'orange',fontFamily:'algerian'}} > 

              <marquee   behavior='scroll'
    scrollamount='20'
    width='40%'
    direction='right'
    height='70px'> Welcome Washer </marquee>  
              
              </h2>       */}

              <h2 style={{ position:'relative',color:"gold",top:'200px',fontSize:"60px"}}>Welcome to Clean Car Wash</h2>
              <h6 style={{ position:'relative',color:"black",top:'200px',fontSize:"20px",marginLeft:"600px"}}>Orders are waiting to be conquered by you.....</h6>
         </div>
         {/* <div  style={{position:"absolute",top:"700px",width:"100%"}}>
      <Footer></Footer>
      </div> */}
        </div>
    );
}

export default Washerhome;