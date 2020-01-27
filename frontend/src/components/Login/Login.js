import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loginAction} from '../../store/action/loginAction';
//import {useEffect} from 'react';

const Login = props => {
    let [state, setState] = useState({
      email: '',
      password: ''
    });
    

    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        props.dispatch(loginAction(state.email, state.password))   
        if (props.tokens.access) {
            props.history.push('/');  //landing page
        }
    }
 
    return(
        <div className='loginForm'>
            <h5 className='loginTitle'>LOGIN</h5>
            <form onSubmit={handleSubmit}>
                <input placeholder='Email' value={state.email} onChange={handleChange}/>
                <input placeholder='Password' value={state.password} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        user_data: state.loginReducer.user_data,
    }
}

export default withRouter(connect(mapStateToProps)(Login))