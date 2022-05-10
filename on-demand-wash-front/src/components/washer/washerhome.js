import React from 'react';
import Washernav from './washernav'
import Footer from '../../components/Home/Footer';

function Washerhome(props) {
    return (
        <div>
            <Washernav></Washernav>

            <div >
                <br/>
                <br/>

       <img  src='./images/washer.jpg'  style={{width: '1100px', borderRadius:'80px', position: 'absolute', right:'140px'}} />
       <br/>
          <br/>
        <h2  style={{ position:'relative', top:'120px', fontWeight:'800',fontStyle:'italic', fontSize: '60px', color:'orange',fontFamily:'algerian'}} > 

              <marquee   behavior='scroll'
    scrollamount='20'
    width='40%'
    direction='right'
    height='70px'> Welcome Washer </marquee>  
              
              </h2>      
         </div>
         <div  style={{position:"absolute",top:"700px",width:"100%"}}>
      <Footer></Footer>
      </div>
        </div>
    );
}

export default Washerhome;