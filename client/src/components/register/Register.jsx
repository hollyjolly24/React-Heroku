import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import signupStyles from "./signup.module.css";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      authPassword: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

componentWillReceiveProps(nextProps) {
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
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      authPassword: this.state.authPassword
    };
this.props.registerUser(newUser, this.props.history); 
  };
render() {
    const { errors } = this.state;

return (

  <div className={signupStyles.bGround}>
    <Navbar/>
    <div className={signupStyles.contactForm}>

<h1 className={signupStyles.contactHeader}>
  Signup!
</h1>
<h2 className={signupStyles.contactInfo}>
  Already have an account? <Link to="/login">Login</Link>
</h2>
  <form noValidate onSubmit={this.onSubmit} className={signupStyles.contactFormBody}>
      <p>
          <input 
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            id="name"
            type="text" 
            name="name" 
            placeholder="Name"
            className={classnames(signupStyles.name,{invalid: errors.name})}
            />
          <label htmlFor="name"></label>
          <span className={signupStyles.invalidName}>
            {errors.name}
          </span>
      </p>

      <p>
          <input 
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email" 
            name="email" 
            placeholder="email"
            className={classnames(signupStyles.email,{invalid: errors.email})}
            />
          <label htmlFor="email"></label>
          <span className={signupStyles.invalidEmail}>
            {errors.email}
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
            placeholder="password"
            className={classnames(signupStyles.password,{invalid: errors.password})}
            />
          <label htmlFor="password"></label>
          <span className={signupStyles.invalidPassword}>
            {errors.password}
          </span>
      </p>

      <button 
        name="submit" 
        type="submit"
        className={signupStyles.submitBtn}>
          Submit
      </button>
      
  </form>
  </div>
  <Footer/>
  </div> 
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
