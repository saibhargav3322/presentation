import React from 'react';
import Adminnav from './adminnav'

function Adminhome(props) {
    return (
        <div>
            <Adminnav></Adminnav>
            <div >
                <br/>
                <br/>

       <img  src='./images/admin.jpg'  style={{width: '1000px', borderRadius:'80px', position: 'absolute', right:'240px'}} />
       <br/>
          <br/>
        <h2  style={{ position:'relative', top:'120px', fontWeight:'800',fontStyle:'italic', fontSize: '60px', color:'navy',fontFamily:'algerian'}} > 

              <marquee  behavior='scroll'
    scrollamount='20'
    width='30%'
    direction='right'
    height='70px'> Welcome Admin </marquee>  
              
              </h2>      
         </div>
        </div>
    );
}

export default Adminhome;