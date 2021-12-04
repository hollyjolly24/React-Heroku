import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import publicHome from './components/publicPages/publicHome/publicHome';
import aboutUs from './components/publicPages/aboutUs/aboutUs';
import privacyPolicy from './components/publicPages/privacyPolicy/privacyPolicy';
import terms from './components/publicPages/terms/terms';
import contactUs from './components/publicPages/contactUs/contactUs';
import Footer from './components/publicPages/footer/footer';
import Register from './components/publicPages/register/Register.jsx';
import Login from './components/publicPages/login/login';
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Navbar from './components/publicPages/navbar/Navbar';


import Profile from './components/profilePages/profile/profile';
import Forum from './components/profilePages/forums/forums';
import jobs from './components/profilePages/jobs/jobs';
import profileHome from './components/profilePages/profileHome/profileHome';
import profileTerms from './components/profilePages/profileTerms/profileTerms';
import profilePolicy from './components/profilePages/profilePolicy/profilePolicy';
import ProfileNavbar from './components/profilePages/profileNavbar/profileNavbar';
import ProfileFooter from './components/profilePages/profileFooter/profileFooter';
import ProfileContact from './components/profilePages/profileContactUs/profileContactUs';
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
      window.location.href = "/";
  }
}


function App() {
  return (
    <Provider store={store}>
      <Router>
            <Switch>
           
              <Route path='/login' component={Login}/>
              <Route path='/Footer' component={Footer}/>
              <Route path='/' exact component={publicHome}/>
              <Route path='/aboutUs' component={aboutUs}/>
              <Route path='/contactUs' component={contactUs}/>
              <Route path='/terms' component={terms}/>
              <Route path='/privacyPolicy' component={privacyPolicy}/>
              <Route path='/Register' component={Register}/>
              <Route path='/navbar' component={Navbar}/>
              

            

              <Route path='/profileNavbar' component={ProfileNavbar}/>
              <Route path="/profile" component={Profile} />
              <Route path='/profileHome' component={profileHome}/>
              <Route path='/profileTerms' component={profileTerms}/>
              <Route path='/profilePrivacy' component={profilePolicy}/>
              <Route path='/profileFooter' component={ProfileFooter}/>
              <Route path='/jobs' component={jobs}/>
              <Route path="/forums" component={Forum}/>
              <Route path='/profileContactUs'component={ProfileContact}/>





            </Switch>
          </Router>
      </Provider>
  );
}

export default App;