import React, { Component,useState,useEffect } from "react";
import {Link} from "react-router-dom";

function Usernav(props) {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user =localStorage.getItem('washertoken');
    
        if (user) {
          setCurrentUser(user);
        }
      }, []);

      const logOut = () => {
        localStorage.removeItem('washertoken');
      };
    return (
        <div>
            <nav className='navbar navbar-expand navbar-light fixed-top'>
              <Link to='/'>
          <img  src= "./images/logo6.png" alt='' />
          </Link>
                <div className='container'>
       {currentUser ? (
           <div className="navbar-nav ms-auto">
              <li className="nav-item">
               <Link to={"/washerhome"} className="nav-link">
                 Washerhome
               </Link>
             </li>
             {/* <li className="nav-item">
               <Link to={"/washerorders"} className="nav-link">
                 Orders
               </Link>
             </li> */}
               <li className="nav-item">
               <Link to={"/washerorderpending"} className="nav-link">
                 Orders
               </Link>
             </li>
             <li className="nav-item">
               <Link to={"/washerratings"} className="nav-link">
                 Ratings
               </Link>
             </li>
             <li className="nav-item">
               <Link to={"/washerprofile"} className="nav-link">
                 Profile
               </Link>
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
               <Link to={"/washerhome"} className="nav-link">
                 Washerhome
               </Link>
             </li>
             <li className="nav-item">
               <Link to={"/washerlogin"} className="nav-link">
                 Login
               </Link>
             </li>
             <li className="nav-item">
                <Link to={"/washerreg"} className="nav-link">
                 Register
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