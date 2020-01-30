import React, {useState} from 'react';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';
import './PreRegistration.css' 


const PreRegistration = props => {
     
    const handleUserSubmit = (e) => {
        e.preventDefault();
        console.log("from preRegristration user")
        props.history.push('/registration/user');
    }

    const handleDoctorSubmit = (e) => {
        e.preventDefault();
        props.history.push('/registration/doctor');
    }

    return (
        <div className='mainContainer'>
            <form onSubmit={handleUserSubmit}>
                <div className="optionUser">
                    <label className='labelRegistration'>User</label>
                    <button className='buttonRegistration' type='submit'>REGISTER</button>
                </div>
            </form>
            <form onSubmit={handleDoctorSubmit}>
                <div className="optionDoctor">
                    <label className='labelRegistration'>Psychologist</label>
                    <button className='buttonRegistration' type='submit'>REGISTER</button>
                </div>  
            </form>
        </div>
    )
}

export default PreRegistration