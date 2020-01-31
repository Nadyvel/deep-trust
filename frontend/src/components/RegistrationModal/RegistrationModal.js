import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import PreRegistration from '../PreRegistration/PreRegistration'
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom'
//import {useEffect} from "react";
import Modal from '../Modal/Modal';
import {setModal} from "../../store/action/modalAction";
import Registration from '../Registration/Registration';
import DoctorRegistration from '../DoctorRegistration/DoctorRegistration';
import SignUpMessage from '../SignUpMessage/SignUpMessage';

const namespace = "RegistrationModal";
const RegistrationModal = ({isVisible, data, dispatch, history}) => {
 
    const handleClose = () => {
        dispatch(setModal(namespace, null, false));
        history.push("/");
    };

    useEffect(() => {
       
    })
   
    return (
        <>
            { isVisible &&
                <Modal close={handleClose}>
                   
            {data.activePage === "pre" && <PreRegistration/> }
         
                <Router>
                    <Route exact path='/registration/pre' component={PreRegistration}/>
                    <Route exact path='/registration/user' component={Registration}/>
                    <Route exact path='/registration/doctor' component={DoctorRegistration}/>
                    <Route exact path='/message' component={SignUpMessage}/>
                    <Redirect from="" to="/registration/pre" />
                 </Router>
                    
                </Modal>  
            }
        </> 
    )
}

const mapStateToProps = state => {
    return {
      isVisible: state.modalReducer[namespace].isVisible,
      data: state.modalReducer[namespace].data
    };
};

export default withRouter(connect(mapStateToProps)(RegistrationModal));