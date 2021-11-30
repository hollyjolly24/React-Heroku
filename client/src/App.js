import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import publicHome from './components/publicHome/publicHome';
import aboutUs from './components/aboutUs/aboutUs';
import privacyPolicy from './components/privacyPolicy/privacyPolicy';
import terms from './components/terms/terms';
import contactUs from './components/contactUs/contactUs';
import Footer from './components/footer/footer';
import signup from './components/signup/signup';
import login from './components/login/login';
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Navbar from "./components/navbar/navbar";

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
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
            <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route path='/login' component={login}/>
              <Route path='/Footer' component={Footer}/>
              <Route path='/publicHome' component={publicHome}/>
              <Route path='/aboutUs' component={aboutUs}/>
              <Route path='/contactUs' component={contactUs}/>
              <Route path='/terms' component={terms}/>
              <Route path='/privacyPolicy' component={privacyPolicy}/>
              <Route path='/signup' component={signup}/>
              <Route path='/navbar' component={Navbar}/>
            </Switch>
          </Router>
      </Provider>
  );
}

export default App;