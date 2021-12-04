/*import React 
    useStatee is a hook - 
    let's the components "remember" the variable  to get passed into the component instance 
*/
import React from 'react'
import { Link } from 'react-router-dom';
import navbarstyles from './navbar.module.css'
import history from '../../history/history';
import { faHome,faUserPlus, faSignInAlt, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navbar() {

    return (
      <>
        <nav class = 'nav' className={navbarstyles.nav}>
          <div className={navbarstyles.topNav}>
            <div className={navbarstyles.logo}>
                <Link to='/' className={navbarstyles.career} onclick={() => history.push("/publicHome")}>
                  Career
                </Link>
                <Link to='/' className={navbarstyles.lift} onclick={() => history.push("/publicHome")}>
                  Lift
                </Link>
            </div>

        <div className={navbarstyles.links}>
          <Link to='/' className={navbarstyles.mainSection} onclick={() => history.push("/publicHome")}>
          <FontAwesomeIcon icon={faHome} />             
            Home
          </Link>   

          <Link to='/aboutUs' className={navbarstyles.aboutUs} onclick={() => history.push("/aboutUs")}>
          <FontAwesomeIcon icon={faInfoCircle} />             
            About Us
          </Link>   

          <Link to='/login' className={navbarstyles.login} onclick={() => history.push("/login")}>
          <FontAwesomeIcon icon={faSignInAlt} />             
            Login
          </Link> 

           <Link to='/Register' className={navbarstyles.signup} onclick={() => history.push("/Register")}>
           <FontAwesomeIcon icon={faUserPlus} />              
            Sign Up
          </Link> 
        </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;