import React from "react";
import termsStyles from './profileTerms.module.css';
import ProfileNavbar from "../profileNavbar/profileNavbar";
import ProfileFooter from "../profileFooter/profileFooter";

function profileTerms() {
    return(
        <>
        <ProfileNavbar/>
        <div className={termsStyles.terms}>
            This is the terms page.
        </div>
        <ProfileFooter/>
        </>
        
    )

}

export default profileTerms;