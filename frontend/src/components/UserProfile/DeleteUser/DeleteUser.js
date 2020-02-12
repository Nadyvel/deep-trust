import React, {useState} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import './DeleteUser.css'; 
import {setModal} from '../../../store/action/modalAction';

const namespace = "DeleteUserModal";
const DeleteUser = ({isVisible, data, dispatch, history}) => {
     
    const handdleClose = (e) => {
        e.preventDefault();
        dispatch(setModal(namespace, null, false));
        history.push('/user/settings/');
    };

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
                    <button className='buttonRegistration' type='submit' onClick={handdleClose}>No</button>
                </div>  
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
      isVisible: state.modalReducer[namespace].isVisible,
      data: state.modalReducer[namespace].data
    };
};

export default withRouter(connect(mapStateToProps)(DeleteUser));