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
        <div className='mainContainer'>
            <div className='leftContainer'>
                
            </div>

            <div className='rightContainer'>
                <form onSubmit={handleUserSubmit}>
                    <div className="optionUser">
                        <label className='labelRegistration'>User</label>
                        <button className='buttonRegistration' type='submit'>REGISTER</button>
                    </div>
                </form>
                <form onSubmit={handleDoctorSubmit}>
                    <div className="optionDoctor">
                        <label className='labelRegistration'>Doctor</label>
                        <button className='buttonRegistration' type='submit'>REGISTER</button>
                    </div>  
                </form>
            </div>

        </div>
    )
}

export default PreRegistration