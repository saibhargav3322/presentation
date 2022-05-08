import React, { Component,useState,useEffect } from "react";
import {Link} from "react-router-dom";

function Usernav(props) {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user =localStorage.getItem('admintoken');
    
        if (user) {
          setCurrentUser(user);
        }
      }, []);

      const logOut = () => {
        localStorage.removeItem('admintoken');
      };
    return (
        <div>
            <nav className='navbar navbar-expand navbar-light fixed-top'>
            <h2>Admin Portal</h2>
              <a href="/" className="nav-link" >
                 HOME
               </a>
                <div className='container'>
       {currentUser ? (
           <div className="navbar-nav ms-auto">
                          <li className="nav-item">
               <a href="/adminhome" className="nav-link" >
                 AdminHome
               </a>
             </li>
             <li className="nav-item">
               <a href="/adminrating" className="nav-link" >
                 AllRatings
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
             <li className="nav-item">
               <a href="/adminorders" className="nav-link" >
                 AllOrders
               </a>
             </li>
             <li className="nav-item">
               <a href="/adminuser" className="nav-link" >
                 AllCustomers
               </a>
             </li>
             <li className="nav-item">
               <a href="/adminwasher" className="nav-link" >
                 AllWashers
               </a>
             </li>
             <li className="nav-item">
               <a href="/" className="nav-link" onClick={logOut}>
                 Logout
               </a>
             </li>
           </div>
         ) 
         : (
            
            <div className="navbar-nav ms-auto">
            <li className="nav-item">
               <a href="/adminhome" className="nav-link" >
                 AdminHome
               </a>
             </li>
             <li className="nav-item">
               <Link to={"/adminlogin"} className="nav-link">
                 Login
               </Link>
             </li>
           </div>
             
         )
         }
         </div>
    </nav>
        </div>
    );
}

export default Usernav;