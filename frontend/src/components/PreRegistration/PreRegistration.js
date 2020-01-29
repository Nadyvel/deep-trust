import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './PreRegistration.css' 


const PreRegistration = props => {
    let [state, setState] = useState({
       
    });
     
 
    const handleUserSubmit = (e) => {
        e.preventDefault();
        props.history.push('/registration');
    }

    const handleDoctorSubmit = (e) => {
        e.preventDefault();
        props.history.push('/doctorRegistration');
    }

    return (
        <div>
            <form onSubmit={handleUserSubmit}>
                <div className="optionButton">
                    <button type='submit'>User</button>
                </div>
            </form>
            <form onSubmit={handleDoctorSubmit}>
                <div className="optionButton">
                    <button type='submit'>Doctor</button>
                </div>  
            </form>
        </div>
    )
}

export default PreRegistration