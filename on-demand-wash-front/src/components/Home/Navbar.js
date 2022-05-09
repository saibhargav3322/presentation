import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* <h2>Clean Car Wash</h2> */}
          <img  src= "./images/logo6.png" alt='' />

            

          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Services'
                className='nav-links'

              >
                Packages
              </Link>
            </li>
            <li className="nav-item" >
              <a className="nav-links " href="#about" >About Us</a>
            </li>
            <li className='nav-item'>
              <Link
                to='/userhome'
                className='nav-links'

              >
                User Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/washerhome'
                className='nav-links'

              >
                Washer Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/adminhome'
                className='nav-links'

              >
                Admin Login
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
