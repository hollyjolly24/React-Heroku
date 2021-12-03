/*import React 
    useStatee is a hook - 
    let's the components "remember" the variable  to get passed into the component instance 
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import navbarstyles from './profileNavbar.module.css'
import history from '../history/history';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { faComments, faUser,faSignOutAlt,faUsers} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProfileNavbar extends Component {
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    history.push("/");

  };
  render() {
      return (
        <>
      
          <nav class = 'nav' className={navbarstyles.nav}>
            <div className={navbarstyles.topNav}>
              <div className={navbarstyles.logo}>
                  <Link to='/Dashboard' className={navbarstyles.career} onclick={() => history.push("/Dashboard")}>
                    Career
                  </Link>
                  <Link to='/Dashboard' className={navbarstyles.lift} onclick={() => history.push("/Dashboard")}>
                    Lift
                  </Link>
              </div>

          <div className={navbarstyles.links}>
          <Link to='/profile' className={navbarstyles.profile} onclick={() => history.push("/profile")}>
          <FontAwesomeIcon icon={faUser} />             
              Profile
            </Link>  
          <Link to='/Chat' className={navbarstyles.message} onclick={() => history.push("/Chat")}>
          <FontAwesomeIcon icon={faComments} />             
             Messages
            </Link>  
            <Link to='/forums' className={navbarstyles.forum} onclick={() => history.push("/forums")}>
            <FontAwesomeIcon icon={faUsers} />             
              Forums
            </Link>   
            <Link to="/" className={navbarstyles.logout} onClick={this.onLogoutClick}>
            <FontAwesomeIcon icon={faSignOutAlt} />             
              Logout
            </Link>

          </div>
            </div>
          </nav>
        </>
      );
    }
  }
  
  ProfileNavbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(ProfileNavbar);