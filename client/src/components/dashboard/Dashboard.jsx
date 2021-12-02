import React from "react";
import Footer from "../footer/footer";
import ProfileNavbar from "../profileNavbar/profileNavbar";
import dashboardStyles from "./Dashboard.module.css";

export default function Dashboard(){

  return(
      //const { user } = this.props.auth;*/
    <>
      <ProfileNavbar/>
        <div className={dashboardStyles.background}>
          TEST
        </div>
        <Footer/>
    </>
    );
  }
