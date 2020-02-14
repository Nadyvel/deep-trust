import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import Modal from '../../../Modal/Modal';
import {setModal} from "../../../../store/action/modalAction";
import BookingMessage from './BookingMessage';

const namespace = "BookingMessageModal";
const BookingMessageModal = ({isVisible, data, dispatch, history}) => {
 
    const handleClose = () => {
        dispatch(setModal(namespace, null, false));
        history.push("/userprofile/myBookings");
    };

    useEffect(() => {
       
    });
   
    return (
        <>
            { isVisible &&
                <Modal close={handleClose}>
                   
            {data.activePage === "bookingMessage" && <BookingMessage/> }

                <Router>
                    <Route exact path='/bookingMessage' component={BookingMessage}/>
                    <Redirect from="userprofile/psychologist/7" to="/bookingMessage" />
                 </Router>
                    
                </Modal>  
            }
        </> 
    );
};

const mapStateToProps = state => {
    return {
      isVisible: state.modalReducer[namespace].isVisible,
      data: state.modalReducer[namespace].data
    };
};

export default withRouter(connect(mapStateToProps)(BookingMessageModal));