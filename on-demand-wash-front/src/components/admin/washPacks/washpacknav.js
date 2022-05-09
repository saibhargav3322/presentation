import React from 'react';
import {Link} from "react-router-dom";

function Washpacknav(props) {
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
           <a href="/adminpacks" className="nav-link" >
             AllPacks
           </a>
         </li>
         <li className="nav-item">
           <a href="/adminaddpacks" className="nav-link" >
           AddPack
           </a>
         </li>
       </div>
       </div>
       </nav>
       </div>
    );
}

export default Washpacknav;