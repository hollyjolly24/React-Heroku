import React from 'react';
import ProfileFooter from '../profileFooter/profileFooter';
import ProfileNavbar from '../profileNavbar/profileNavbar';
import profileStyles from './profileHome.module.css';

export default function profileHome(){
    return(
        <>
        <div className={profileStyles.homescreenbackground}>
        <ProfileNavbar/>
        
        <img 
          src="https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsY29tZSUyMGJhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
          alt="imageHomePage"
          width="1440"
          height= "700"
          margin= "0"
          />

       

        <ProfileFooter/>
        </div>
        </>
    )
}