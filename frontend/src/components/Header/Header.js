import React, {useState} from "react";
import {connect} from "react-redux";
import './Header.css';
import RegistrationModal from '../RegistrationModal/RegistrationModal'
import {setModal} from "../../store/action/modalAction";
import LoginModal from '../LoginModal/LoginModal';
import {withRouter} from 'react-router-dom';

const Header = (props) => { 
console.log(props)
    const handleOpen = (namespace) => props.dispatch(setModal(namespace, null, true));

    const handleHome = (e) => {
        e.preventDefault();
        props.history.push('/')
    }

    return (
        <div className='header'>
            <button className='headerSubmit' type='submit' onClick={() => handleOpen("RegistrationModal")}>Sign up</button>
            <button className='headerSubmit' type='submit' onClick={() => handleOpen("LoginModal")}>Login</button>
            {props.location.pathname === "/doctorList"  && <button className='headerSubmit' 
            onClick={(e) => handleHome(e)}>Home</button>}

            <RegistrationModal />
            <LoginModal />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        
    };
};

export default connect(mapStateToProps)(withRouter(Header));