import React from 'react';
import Adminnav from './adminnav'

function Adminhome(props) {
    return (
        <div>
            <Adminnav></Adminnav>
            <div >

       <img  src='./images/adminhome.jpg'  style={{width: '100%', position: 'absolute', right:'0px',filter:"grayscale(0%) blur(3px)"}} />
      
      <h1  style={{ position:'relative',top:"230px",fontSize:"60px"}}>Welcome Admin</h1>
      <h5  style={{ position:'relative',top:"230px",fontSize:"20px",marginLeft:"400px"}}>The seat is yours..</h5>
       {/* <br/>
          <br/>
        <h2  style={{ position:'relative', top:'120px', fontWeight:'800',fontStyle:'italic', fontSize: '60px', color:'navy',fontFamily:'algerian'}} > 

              <marquee  behavior='scroll'
    scrollamount='20'
    width='30%'
    direction='right'
    height='70px'> Welcome Admin </marquee>  
              
              </h2>*/}      
         </div> 
        </div>
    );
}

export default Adminhome;