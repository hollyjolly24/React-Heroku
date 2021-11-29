import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import publicHome from './components/publicHome/publicHome';
import aboutUs from './components/aboutUs/aboutUs';
import privacyPolicy from './components/privacyPolicy/privacyPolicy';
import terms from './components/terms/terms';
import contactUs from './components/contactUs/contactUs';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';


function App() {
  return (
  <Router>
        <Switch>
          <Route path='/Navbar' exact component={Navbar}/>
          <Route path='/Footer' exact component={Footer}/>
          <Route path='/publicHome' exact component={publicHome}/>
          <Route path='/aboutUs'  component={aboutUs}/>
          <Route path='/contactUs' component={contactUs}/>
          <Route path='/terms' component={terms}/>
          <Route path='/privacyPolicy' component={privacyPolicy}/>
	      </Switch>
      </Router>
  );
}

export default App;