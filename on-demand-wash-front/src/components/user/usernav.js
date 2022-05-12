import React, { Component,useState,useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import Login from './login'
import '../Home/Navbar.css'
import './usernav.css'


function Usernav(props) {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user =localStorage.getItem('token');
    
        if (user) {
          setCurrentUser(user);
        }
      }, []);
      const navigate=useNavigate();

      const logOut = () => {
        localStorage.removeItem('token');
      };
    return (
          <main>

            <nav className='navbar navbar-expand navbar-light fixed-top'>
            <Link to='/'>
          <img  src= "./images/logo6.png" alt='' />
          </Link>
            {/* <a href="/" className="nav-link" >
                 HOME
               </a> */}

                <div className='container'>
       {currentUser ? (
           <div className="navbar-nav ms-auto">   
             <li className="nav-item">
               <Link to="/userhome" className="nav-link" >
                 UserHome
               </Link>
             </li>

             <br></br>
             <li className="nav-item">
               <Link to="/addorder" className="nav-link" >
                 Addorder
               </Link>
             </li>
             <br></br>
             <li className="nav-item">
               <Link to="/getorders" className="nav-link" >
                 Orderstatus
               </Link>
             </li>
             <li className="nav-item">
               <Link to="/userupdate" className="nav-link" >
                 Profile
               </Link>
             </li>
             <li className="nav-item">
               <Link to="/" className="nav-link" onClick={logOut} >
                 Logout
               </Link>
             </li>
           </div>
         ) 
         : (
           


           
             
            <div className="navbar-nav ms-auto">

<li className="nav-item">
               <Link to="/userhome" className="nav-link" >
                 UserHome
               </Link>
             </li>
             <li className="nav-item">
               <Link to={"/userlogin"} className="nav-link">
                 Login
               </Link>
             </li>

           {/* </div>
            <div className="navbar-nav ms-auto">
             <li className="nav-item">
                <Link to={"/userreg"} className="nav-link">
                 Register
                </Link>
             </li>
          </div> */}
                       <li className="nav-item">
                <Link to={"/userreg"} className="nav-link">
                 Register
                </Link>
             </li>

             </div>
         )
         }
         </div>
    </nav>
  

    </main>

    );
}

export default Usernav;