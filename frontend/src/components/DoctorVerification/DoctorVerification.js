import React, {useState} from 'react';
import {connect} from 'react-redux';
import {verificationAction} from '../../store/action/verificationAction';
import './DoctorVerification.css'

const DoctorVerification = (props) => {
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
        if (state.password !== state.password_repeat) {
            setShowMessage("Password must be the same, please check")
            return
        }

        const message = await props.dispatch(verificationAction(state));
        if (message.length > 0) {
            setShowMessage(message)
        }

        const response = await props.dispatch(verificationAction(state));
        if (Number(response.status) === 200) {
            props.history.push('/doctorLandingPage');
        }

        if (Number(response.status) === 400 && (state.password === state.password_repeat)) {
            setShowMessage("Wrong Email or Username already taken")
        }
    }
    
    return (
        <div className='verifMainContainer'>
            <div className='verifLeftContainer'>

            </div>

            <div className="verifVerificationForm">
                <h5 className="verificationTitle">DOCTOR VERIFICATION FORM</h5>

                <form className='formInput' onSubmit={handleVerification}>
            
                    <input className='verifInput' placeholder={"E-Mail address"} name="email" 
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

                    <button className='verifButton' type="submit" content="Finish registration">Submit</button>
                
                </form>
            </div>
        </div>
    )
}

export default connect()(DoctorVerification);