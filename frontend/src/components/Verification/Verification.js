import React, {useState} from 'react';
import {connect} from 'react-redux';
import {verificationAction} from '../../store/action/verificationAction';
import './Verification.css';
import {withRouter} from 'react-router-dom';

const Verification = (props) => {
    let [state, setState] = useState({
        email: '',
        validation_code: '',
        username: '',
        password: '',
        password_repeat: '',
    })
    let [showMessage, setShowMessage] = useState(false);

    const handleChange = e =>
        setState({...state, [e.target.name]: e.target.value});

    const handleVerification = async e => {
        e.preventDefault();

        const response = await props.dispatch(verificationAction(state));
        if (Number(response.status) === 200) {
            props.history.push('/');
        }

        const message = await props.dispatch(verificationAction(state));
        if (message.length > 0) {
            setShowMessage(message)
        }
    }
    return (
        <div className='verifMainContainer'>
            <div className='backgroundLayer'>
                <div className="verifVerificationForm">
                    <div className="verificationTitle1"><h5 className='titlesverif'>Sign up for a free consultation with</h5> 
                    <h5 className='titlesverif'>one of our specialists</h5>
                    </div>
                    <form className='formInput' onSubmit={handleVerification}>
                
                        <input type='email' className='verifInput' placeholder={"E-Mail address"} name="email" 
                            value={state.email} onChange={handleChange}/>

                        <input className='verifInput' placeholder={"Validation code"} name="validation_code"
                            value={state.validation_code} onChange={handleChange} type='password'/>
                    
                        <input className='verifInput' placeholder={"Username"} name="username"
                            value={state.username} onChange={handleChange}/>
                    
                        <input className='verifInput' placeholder={"Password"} name="password"
                            value={state.password} onChange={handleChange} type='password'/>

                        <input className='verifInput' placeholder={"Password repeat"} name="password_repeat"
                            value={state.password_repeat} onChange={handleChange} type='password'/>
                    
                        <div>
                            <p>{showMessage}</p>
                        </div>

                        <button className='verificButton' type="submit" content="Finish registration">Sign up</button>
                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(connect()(Verification))