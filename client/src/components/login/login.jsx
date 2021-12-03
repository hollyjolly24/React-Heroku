import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Footer from "../footer/footer";
import loginStyles from "./login.module.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profileHome");
    }
  }

componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profileHome"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
      const userData = {
      email: this.state.email,
      password: this.state.password
    };
this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
render() {
    const { errors } = this.state;
return (
  <div className={loginStyles.bGround}>
    <Navbar/>
    <div className={loginStyles.contactForm}>

<h1 className={loginStyles.contactHeader}>
<FontAwesomeIcon icon={faSignInAlt} /> 
  Login!
</h1>
<h2 className={loginStyles.contactInfo}>
  Please enter your login credentials.
</h2>
  <form noValidate onSubmit={this.onSubmit} className={loginStyles.contactFormBody}>
      <p>
          <input 
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email" 
            name="email" 
            placeholder="Email"
            className={classnames(loginStyles.email,{invalid: errors.email ||errors.emailnotfound})}
            />
          <label htmlFor="email"></label>
          <span className={loginStyles.invalidEmail}>
            {errors.email}
            {errors.emailnotfound}
          </span>
      </p>

      <p>
          <input 
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="password" 
            name="password" 
            placeholder="Password"
            className={classnames(loginStyles.password,{invalid: errors.password ||errors.password})}
            />
          <label htmlFor="password"></label>
          <span className={loginStyles.invalidPassword}>
            {errors.password}
            {errors.passwordnotfound}
          </span>
      </p>

      <button 
        name="submit" 
        type="submit"
        className={loginStyles.submitBtn}>
          Submit
      </button>
      
  </form>
  <p className={loginStyles.linktoSignup}>
    Don't have an account? <Link to="/signup" className={loginStyles.linktoSignup}>Signup Here</Link>
  </p>
  </div>
  <Footer/>
  </div> 
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
