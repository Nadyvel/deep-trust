import React, {useState} from "react";
import {connect} from "react-redux";
import './Header.css';
import {useEffect} from "react"
import RegistrationModal from '../RegistrationModal/RegistrationModal'
import {setModal} from "../../store/action/modalAction";
import LoginModal from '../LoginModal/LoginModal';

const Header = (props) => { 

    const handleOpen = (namespace) => props.dispatch(setModal(namespace, null, true));

    return (
        <div className='header'>
            <button type='submit' onClick={() => handleOpen("RegistrationModal")}>Sign up</button>
            <button type='submit' onClick={() => handleOpen("LoginModal")}>Login</button>
          
            <RegistrationModal />
            <LoginModal />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        
    };
};

export default connect(mapStateToProps)(Header);