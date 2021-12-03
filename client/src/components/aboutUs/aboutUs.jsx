import React from 'react';
import aboutStyles from './aboutUs.module.css';
import Footer from '../footer/footer';
import Navbar from '../navbar/Navbar';

function aboutUs () {

    return (
        <>
        
        <Navbar/>
        <div className={aboutStyles.aboutusBackground}>

        <img 
            src="https://images.unsplash.com/photo-1519070994522-88c6b756330e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZydXN0cmF0ZWQlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" 
            alt="student"
            width="550"
            height="600"
        />
            <div className={aboutStyles.why}>
                Why
            </div>
            <div className={aboutStyles.career}>
                CareerLift?
            </div>

            <p className={aboutStyles.whyPara}>
                CareerLift is a social media application <br/>
                started by students for students.
            </p>
          
            <h1 className={aboutStyles.explore}>
                Explore
            </h1>
            <p className={aboutStyles.para}>
                After creating an account, students can browse local jobs and save them to their CareerLift account 
                or even head directly to the job posting to apply.
            </p>
            <h2 className={aboutStyles.mentor}>
                Mentor
            </h2>
            <p className={aboutStyles.para}>
                CareerLift offers mentorship opportunities through forums designed for students, alumni, and professors. 
                A student can create or or join a forum about job hunting, what courses to take, advice on majors... the possibilities are endless.
            </p>
            <h3 className={aboutStyles.connect}>
                Connect
            </h3>
                <p className={aboutStyles.para}>
                    CareerLift is a social media application for students, alumni, and professors. 
                    A place where the career world meets academia. 
                </p>
                <Footer/>
            </div>
       
        </>
    )
}

export default aboutUs;

