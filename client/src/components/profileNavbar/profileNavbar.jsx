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

class ProfileNavbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

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
            <button
              style={{
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
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