import React from 'react';
import jobStyles from "./jobs.module.css";
import ProfileNavbar from "../profileNavbar/profileNavbar";
import ProfileFooter from '../profileFooter/profileFooter';

/*
NEED TO IMPLEMENT JOB SEARCH

*/

export default function jobs(){
    return(
      <>
        <div className={jobStyles.bGround}>
        <ProfileNavbar/>
        <div className={jobStyles.contactForm}>

        <h1 className={jobStyles.contactHeader}>
            Find a Job Today!
        </h1>

        <h2 className={jobStyles.contactInfo}>
            Please fill out the job title and location
        </h2>
            <form className={jobStyles.contactFormBody}>
            <p>
                    <input type="text" name="job Title" className={jobStyles.title} placeholder="Job Title"></input>
                </p>

                <p>
                    <input type="text" name="location" className={jobStyles.location} placeholder="Location"></input>
                </p>

                <button name="submit" className={jobStyles.submitBtn}>
                    Submit
                </button>
                
            </form>
            </div>
            <ProfileFooter/>
            </div> 
</>
  );
}