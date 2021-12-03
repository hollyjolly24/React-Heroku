import React, { useState } from "react";
import Footer from "../footer/footer";
import ProfileNavbar from "../profileNavbar/profileNavbar";
import axios from 'axios';


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
            <ProfileNavbar/>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />

            <input 
                type="text"
                placeholder="name"
                name="name"
                value={newProfile.name}
                onChange={handleChange}
            />

            <input 
                type="date"
                name="birthdate"
                value={newProfile.date}
                onChange={handleChange}
            />

            <input 
                type="submit"
            />
        </form>
            <Footer/>
        </>
    );
}

export default Profile;