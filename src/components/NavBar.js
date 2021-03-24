import React, { useState  } from 'react'
import { Link } from 'react-router-dom'
import { FaJenkins} from 'react-icons/fa'
import { FaBars,FaTimes } from 'react-icons/fa'
import {Button} from './Button'
import './NavBar.css'

function NavBar() {

    const [ click,setClick ] = useState(false)
    const [ button,setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () =>setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
     
        
        window.addEventListener('resize', showButton);
        
    
    
    
    return (
        <div className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navabr-logo'>
                <FaJenkins className='navbar-icon' />
                <h3>Eazy Bit</h3>
            </Link>
             <div className='menu-icon' onClick={handleClick} >
               { click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                   <Link to='/' className='nav-links'>
                       Home
                   </Link>
               </li>
               <li className='nav-item'>
                   <Link to='/services' className='nav-links'>
                      Services
                   </Link>
               </li>
               <li className='nav-item'>
                   <Link to='/products' className='nav-links'>
                       Products
                   </Link>
               </li>
               <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            
         </ul>
            </div>

        </div>

    )
}

export default NavBar
