import React, {useState} from "react";
import {connect} from "react-redux";
import './Header.css';
import RegistrationModal from '../RegistrationModal/RegistrationModal';
import {setModal} from "../../store/action/modalAction";
import LoginModal from '../LoginModal/LoginModal';
import {withRouter} from 'react-router-dom';
import {setAuthenticated} from "../../store/action/loginAction";

const Header = (props) => { 
    const handleOpen = (namespace) => props.dispatch(setModal(namespace, null, true));

    const handleHome = (e) => {
        e.preventDefault();
        props.history.push('/');
    };

    const handdleProfile = (e) => {
        e.preventDefault();
        if (props.tokens.user.is_user === true) {
            props.history.push('/userprofile');
        }
        else if (props.tokens.user.is_psychologist === true) {
            props.history.push('/psychologist/me');
        }
    };

    const handdleLogout = () => {
        props.dispatch(setAuthenticated());
        localStorage.clear();
    };

    return (
        <div className='header'>
            {!props.authenticated && <button className='headerSubmit' type='submit' onClick={() => handleOpen("RegistrationModal")}>Sign up</button>}
            {!props.authenticated && <button className='headerSubmit' type='submit' 
            onClick={() => handleOpen("LoginModal")}>Login</button>}

            {props.location.pathname === "/doctorList"  && <button className='headerSubmit' 
            onClick={(e) => handleHome(e)}>Home</button>}

            {props.authenticated && <button className='headerSubmit' type='submit' onClick={() => handdleLogout()}>Logout</button>}
            {props.authenticated && <button className='headerSubmit' type='submit' onClick={(e) => handdleProfile(e)}>Profile</button>}

            <RegistrationModal />
            <LoginModal />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        authenticated: state.loginReducer.authenticated,
        tokens: state.loginReducer.tokens,
    };
};

export default connect(mapStateToProps)(withRouter(Header));