import React from 'react';
import {Link} from "react-router-dom";
function Wordersnav(props) {
    return (
        
        <div>
            <nav className='navbar navbar-expand navbar-light fixed-top'>
            <Link to='/'>
          <img  src= "./images/logo6.png" alt='' />
          </Link>
        <div className='container'>
        <div className="navbar-nav ms-auto">
                          <li className="nav-item">
               <a href="/washerhome" className="nav-link" >
                 WasherHome
               </a>
             </li>
             <li className="nav-item">
               <a href="/washerorderpending" className="nav-link" >
                 AvailableOrders
               </a>
             </li>
             <li className="nav-item">
               <a href="/washerorderaccepted" className="nav-link" >
               AcceptedOrders
               </a>
             </li>
             <li className="nav-item">
               <a href="/washerordercompleted" className="nav-link" >
               CompletedOrders
               </a>
             </li>
            
           </div>
           </div>
           </nav>
           </div>
    );
}

export default Wordersnav;