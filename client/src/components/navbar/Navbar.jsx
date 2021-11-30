/*import React 
    useStatee is a hook - 
    let's the components "remember" the variable  to get passed into the component instance 
*/
import React from 'react'
import { Link } from 'react-router-dom';
import navbarstyles from './navbar.module.css'
import history from '../history/history';


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

</link>
function navbar() {

    return (
      <>
        <nav class = 'nav' className={navbarstyles.nav}>
          <div className={navbarstyles.topNav}>
            <div className={navbarstyles.logo}>
                <Link to='/publicHome' className={navbarstyles.career} onclick={() => history.push("/publicHome")}>
                  Career
                </Link>
                <Link to='/publicHome' className={navbarstyles.lift} onclick={() => history.push("/publicHome")}>
                  Lift
                </Link>
            </div>

        <div className={navbarstyles.links}>
          <Link to='/publicHome' className={navbarstyles.mainSection} onclick={() => history.push("/publicHome")}>
            Home
          </Link>   

          <Link to='/aboutUs' className={navbarstyles.aboutUs} onclick={() => history.push("/aboutUs")}>
            About Us
          </Link>   

          <Link to='/login' className={navbarstyles.login} onclick={() => history.push("/login")}>
            Log In
          </Link> 

           <Link to='/signup' className={navbarstyles.signup} onclick={() => history.push("/signup")}>
            Sign Up
          </Link> 
        </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default navbar;