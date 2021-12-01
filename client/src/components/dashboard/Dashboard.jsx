import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Footer from "../footer/footer";
import Profile from "../profileNavbar/profileNavbar";
import dashboardStyles from "./Dashboard.module.css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    //const { user } = this.props.auth;*/
return (
  <>
    <Profile/>
      <div className={dashboardStyles.background}>
        TEST
      </div>
      <Footer/>
  </>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);