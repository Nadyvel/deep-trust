import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import {setModal} from '../../../../store/action/modalAction';
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';

const namespace = "BookingMessageModal";
const BookingMessage = ({isVisible, data, dispatch, history}) => {
 
    const handdleOk = (event) => {
        // event.preventDefault();
        history.push("/userprofile/myBookings");
        dispatch(setModal(namespace, null, false));
    };

    return(
        <div className='mainContainer2'>
            <div className='messageContainer'>
                <h5 className='loginTitle'>Your appointment has been successfully booked.</h5>
            </div>
            <div className='inputContainer'>
                <button type='submit' onClick={handdleOk} className='buttonUserRegistration'>Ok</button>            
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        user_data: state.loginReducer.user_data,
        tokens: state.loginReducer.tokens,
        isVisible: state.modalReducer[namespace].isVisible,
        data: state.modalReducer[namespace].data
    };
};

export default withRouter(connect(mapStateToProps)(BookingMessage));
