import React from 'react';
import history from '../history/history';
import { Link } from 'react-router-dom';
import mainSectionStyles from './publicHome.module.css';
import Footer from '../footer/footer';
import Navbar from '../navbar/Navbar';

function MainSection() {
    return (
      <>
      <div className={mainSectionStyles.homescreenbackground}>
        <Navbar/>
        <img 
          src="https://cdn.pixabay.com/photo/2018/12/10/10/21/earth-3866609_1280.jpg" 
          alt="imageHomePage"
          />
            <div className={mainSectionStyles.rotatingText}>
              <div className={mainSectionStyles.rotatingTextContent}>
                <h2 className={mainSectionStyles.rotatingTextAdjective}>Explore</h2>
                <h2 className={mainSectionStyles.rotatingTextAdjective}>Mentor</h2>
                <h2 className={mainSectionStyles.rotatingTextAdjective}>Connect.</h2>
              </div>
            </div>
             <div className={mainSectionStyles.phrase1}>
                University
             </div>   
             <div className={mainSectionStyles.phrase2}>
                Life
             </div>   
        
                <Link to='/aboutUs' className={mainSectionStyles.learnMore} onclick={() => history.push("/learnMore")}>
                        Learn More
                </Link>
               
            <Footer/>
        </div>
        
        </>
       

    

    )
}

export default MainSection;