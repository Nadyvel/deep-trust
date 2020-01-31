import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loginAction} from '../../store/action/loginAction';
import {setModal} from '../../store/action/modalAction';

const Login = props => {
    let [state, setState] = useState({
      email: '',
      password: ''
    });
    
    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await props.dispatch(loginAction(state.email, state.password));
        if (Number(response.status) === 200) {
            props.dispatch(setModal('LoginModal', null, false));
            props.history.push('/');  //landing page
        }
    }
 
    return(
        <div className="mainUserContainer">
            <div className='titleContainer'>
                <h5 className='loginTitle'>LOGIN</h5>
            </div>
            <div className='inputContainer'>
                <form onSubmit={handleSubmit}>
                    <input className='registrationInput' placeholder={'Email'} name='email' value={state.email} onChange={handleChange}/>
                    <input className='registrationInput' placeholder={'Password'} type='password' name='password' value={state.password} onChange={handleChange}/>
                    <button className='buttonUserRegistration'>Submit</button>
                </form>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        user_data: state.loginReducer.user_data,
        tokens: state.loginReducer.tokens,
    }
}

export default withRouter(connect(mapStateToProps)(Login))