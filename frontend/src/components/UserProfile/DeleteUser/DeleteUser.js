import React, {useState} from 'react';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';
import './DeleteUser.css'; 


const DeleteUser = props => {
     
    // const handleUserSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("from preRegristration user");
    //     props.history.push('/registration/user');
    // };

    // const handleDoctorSubmit = (e) => {
    //     e.preventDefault();
    //     props.history.push('/registration/doctor');
    // };

    return (
        <div className='mainContainer2'>
            <div className='messageContainer'>
                <div>
                    <p className='messageDeleteAccount'>Are you sure you want to delete </p>
                </div>
                <div>
                    <p className='messageDeleteAccount'> your account?</p>
                </div>
            </div>
            <div className='deleteOptionsContainer'>
                <div className="optionYN">
                    <button className='buttonRegistration' type='submit'>Yes</button>
                </div>
        
            
                <div className="optionYN">
                    <button className='buttonRegistration' type='submit'>No</button>
                </div>  
            </div>
        </div>
    );
};

export default DeleteUser;