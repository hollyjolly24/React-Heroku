/*import React 
    useStatee is a hook - 
    let's the components "remember" the variable  to get passed into the component instance 
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import navbarstyles from './profileNavbar.module.css'
import history from '../../history/history';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import {faUser,faSignOutAlt,faUsers, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class profileNavbar extends Component {
  
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
                  <Link to='/profileHome' className={navbarstyles.career} onclick={() => history.push("/profileHome")}>
                    Career
                  </Link>
                  <Link to='/profileHome' className={navbarstyles.lift} onclick={() => history.push("/profileHome")}>
                    Lift
                  </Link>
              </div>

          <div className={navbarstyles.links}>
          <Link to='/profile' className={navbarstyles.profile} onclick={() => history.push("/profile")}>
          <FontAwesomeIcon icon={faUser} />             
              Profile
            </Link>  

            <Link to='/forums' className={navbarstyles.forum} onclick={() => history.push("/forums")}>
            <FontAwesomeIcon icon={faUsers} />             
              Forums
            </Link>   

            <Link to='/jobs' className={navbarstyles.forum} onclick={() => history.push("/jobs")}>
            <FontAwesomeIcon icon={faBriefcase} />             
              Jobs
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
  
  profileNavbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(profileNavbar);