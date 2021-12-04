import React from "react";
import termsStyles from './terms.module.css';
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";


function terms() {
    return(
        <>
        <Navbar/>
        <div className={termsStyles.terms}>
            This is the terms page.
        </div>
        <Footer/>
        </>
        
    )

}

export default terms;