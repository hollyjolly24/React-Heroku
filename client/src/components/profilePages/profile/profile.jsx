import React, { useState } from "react";
import axios from 'axios';
import ProfileNavbar from "../profileNavbar/profileNavbar";
import ProfileFooter from "../profileFooter/profileFooter";
import profileStyles from "./profile.module.css"

const Profile = () => {
    const [newProfile, setNewProfile] = useState(
        {
            name: '',
            birthdate: '',
            photo: '',
        }
    );
    const setNewAuthor = setNewProfile;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newProfile.photo);
        formData.append('birthdate', newProfile.birthdate);
        formData.append('name', newProfile.name);

        axios.post('http://localhost:5000/users/add/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewAuthor({...newProfile, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewAuthor({...newProfile, photo: e.target.files[0]});
    }


    return(
        <>
        <div className={profileStyles.bGround}>
        <ProfileNavbar/>
        <div className={profileStyles.contactForm}>

        <h1 className={profileStyles.contactHeader}>
            Update Your Profile!
        </h1>

        <h2 className={profileStyles.contactInfo}>
            You can add an image, update your name, change your birthday.
        </h2>
            <form 
            className={profileStyles.contactFormBody}
            onSubmit={handleSubmit}
            encType='multipart/form-data'>
            <p>
             <input type="text" name="nName" className={profileStyles.name} placeholder="Name"/>
            </p>

            <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handlePhoto}
            />
            <p>
            <input 
            type="text"
            placeholder="name"
            name="name"
            value={newProfile.name}
            onChange={handleChange}
        />
        </p>

        <p>

        <input 
            type="date"
            name="birthdate"
            value={newProfile.date}
            onChange={handleChange}
        />
        </p>

    

                <button name="submit" className={profileStyles.submitBtn}>
                    Submit
                </button>
                
            </form>
            </div>
            <ProfileFooter/>
            </div> 
        </>
    );
}

export default Profile;