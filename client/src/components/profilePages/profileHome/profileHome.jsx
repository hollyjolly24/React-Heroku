import React from 'react';
import ProfileFooter from '../profileFooter/profileFooter';
import ProfileNavbar from '../profileNavbar/profileNavbar';

export default function profileHome(){
    return(
        <>
        <ProfileNavbar/>
        <img 
          src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHN0dWRlbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" 
          alt="imageHomePage"
          width="800"
          height= "700"
          margin= "0"
          />
        <header>
            Welcome!
        </header>
        <ProfileFooter/>
        </>
    )
}