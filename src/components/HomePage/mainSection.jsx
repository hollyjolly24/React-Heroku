import React from 'react';
import history from '../history/history';
import { Link } from 'react-router-dom';
import mainSectionStyles from './mainSection.module.css';
import Footer from '../footer/footer';

function MainSection() {
    return (
<>
        <body>
          
          <section className={mainSectionStyles.rotatingText}>
            <div className={mainSectionStyles.rotatingTextContent}>
              <h2 className={mainSectionStyles.rotatingTextAdjective}>Explore</h2>
              <h2 className={mainSectionStyles.rotatingTextAdjective}>Mentor</h2>
              <h2 className={mainSectionStyles.rotatingTextAdjective}>Connect</h2>
            </div>
          </section>

                      <div className={mainSectionStyles.phrase2}>
                      University Life
                      </div>   
            
                      <Link to='/aboutUs' className={mainSectionStyles.learnMore} onclick={() => history.push("/learnMore")}>
                            Learn More
                      </Link>        


        </body>
        <Footer/>
        </>
    )
}

export default MainSection;
