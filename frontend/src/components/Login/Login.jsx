import React, { useState } from 'react';
import { connect } from 'react-redux';
//import './Login.css';
import { withRouter } from 'react-router-dom';
import {loginAction} from '../../store/action/loginAction';
import {useEffect} from 'react';

const Login = props => {
    let [state, setState] = useState({
      email: '',
    });
    

    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        props.dispatch(loginAction(state.email))
        
    }
 

    return(
        <div className="loginForm">

            <h5 className="loginTitle"><span className="headLine">LOGIN</span></h5>
            
        </div>
    )
}


const mapStateToProps = state => {
    return {
        user_data: state.loginReducer.user_data,
    }
}

export default withRouter(connect(mapStateToProps)(Login))