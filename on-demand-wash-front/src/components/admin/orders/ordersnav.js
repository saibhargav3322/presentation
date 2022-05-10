import React from 'react';
import {Link} from "react-router-dom";
function Ordersnav(props) {
    return (
        
        <div>
            <nav className='navbar navbar-expand navbar-light fixed-top'>
            <Link to='/'>
          <img  src= "./images/logo6.png" alt='' />
          </Link>
        <div className='container'>
        <div className="navbar-nav ms-auto">
                          <li className="nav-item">
               <a href="/adminhome" className="nav-link" >
                 AdminHome
               </a>
             </li>
             <li className="nav-item">
               <a href="/adminpending" className="nav-link" >
                 PendingOrders
               </a>
             </li>
             <li className="nav-item">
               <a href="/adminaccepted" className="nav-link" >
               AcceptedOrders
               </a>
             </li>
             <li className="nav-item">
               <a href="/admincompleted" className="nav-link" >
               CompletedOrders
               </a>
             </li>
             <li className="nav-item">
               <a href="/admincancled" className="nav-link" >
               CancelledOrders
               </a>
               </li>
            
           </div>
           </div>
           </nav>
           </div>
    );
}

export default Ordersnav;