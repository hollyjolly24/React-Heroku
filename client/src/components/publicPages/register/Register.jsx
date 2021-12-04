import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import classnames from "classnames";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import registerStyles from "./register.module.css";
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
<div className={registerStyles.bGround}>
    <Navbar/>
    <div className={registerStyles.contactForm}>

<h1 className={registerStyles.contactHeader}>
<FontAwesomeIcon icon={faUserPlus} /> 

  Register!
</h1>
<h2 className={registerStyles.contactInfo}>
  Please enter your information.
</h2>
  <form noValidate onSubmit={this.onSubmit} className={registerStyles.contactFormBody}>
      <div>
          <input 
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            id="name"
            type="text"
            placeholder ="Name"
            className={classnames(registerStyles.name,{invalid:errors.name})}/>
      <span>{errors.name}</span>
      </div>

      <div>
          <input 
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="text"
            placeholder ="Email"
            className={classnames(registerStyles.email,{invalid:errors.email})}/>
      <span>{errors.email}</span>
      </div>

      <div>
          <input 
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="text"
            placeholder ="Password"
            className={classnames(registerStyles.password,{invalid:errors.password})}/>
      <span>{errors.password}</span>
      </div>

      <div>
          <input 
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            id="password2"
            type="text"
            placeholder ="Confirm Password"
            className={classnames(registerStyles.password2,{invalid:errors.password2})}/>
      <span>{errors.password2}</span>
      </div>

      <button 
        name="submit" 
        type="submit"
        className={registerStyles.submitBtn}>
          Submit
      </button>
      
  </form>
  <p className={registerStyles.linktoSignup}>
    Already have an account? <Link to="/login" className={registerStyles.linktoSignup}>Login Here</Link>
  </p>
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