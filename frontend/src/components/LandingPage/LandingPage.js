import React, {useState} from "react";
import {connect} from "react-redux";
import {psychologistsAction} from '../../store/action/psychologistsAction';
import './LandingPage.css';
import {useEffect} from "react"
import RegistrationModal from '../RegistrationModal/RegistrationModal'
import {setModal} from "../../store/action/modalAction";
import LoginModal from '../LoginModal/LoginModal';

const LandingPage = (props) => {
    useEffect(() => {
        props.dispatch(psychologistsAction())
    }, []);

    const handleOpen = (namespace) => props.dispatch(setModal(namespace, null, true));
    //namespace -> RegistrationModal/LoginModal
    const handleUser = () => {
        props.history.push('/userprofile');
    }

    return (
        <div className='landingPage'>
            <button type='submit' onClick={() => handleOpen("RegistrationModal")}>Sign up</button>
            <button type='submit' onClick={() => handleOpen("LoginModal")}>Login</button>
            <button onClick = {handleUser}>UserProfile</button>
          <p>Landing page</p>

            <RegistrationModal />
            <LoginModal />
        
        </div>    
    )
}

const mapStateToProps = state => {
    return {
        psychologists: state.psychologistsReducer.psychologists
    };
};

export default connect(mapStateToProps)(LandingPage);

