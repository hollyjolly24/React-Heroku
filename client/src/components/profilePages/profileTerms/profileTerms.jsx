import React from "react";
import termsStyles from './profileTerms.module.css';
import profileNavbar from "../profileNavbar/profileNavbar";
import profileFooter from "../profileFooter/profileFooter";

function profileTerms() {
    return(
        <>
        <profileNavbar/>
        <div className={termsStyles.terms}>
            This is the terms page.
        </div>
        <profileFooter/>
        </>
        
    )

}

export default profileTerms;