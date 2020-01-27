import React, {useState} from 'react';
import {connect} from 'react-redux';
import {verificationAction} from '../../store/action/registrationAction';

const VerificationForm = (props) => {
    let [state, setState] = useState({
        email: '',
        validation_code: '',
        username: '',
        first_name: '',
        last_name:'',
        location: '',
        password: '',
        password_repeat: '',
    })

    const handleChange = e =>
        setState({...state, [e.target.name]: e.target.value});

    const handleVerification = async e => {
        e.preventDefault();
        const response = await props.dispatch(verificationAction(state));
        if (Number(response.status) === 200) {
            props.history.push('/');
        }
    }
    return (
        <div className="VerificationForm">
            <h5 className="verificationTitle">VERIFICATION FORM</h5>
            <form onSubmit={handleVerification}>
               
                <input placeholder={"E-Mail address"} name="email" value={state.email}
                    onChange={handleChange}/>

                <input placeholder={"Validation code"} name="validation_code"
                    value={state.validation_code} onChange={handleChange}/>
            
                <input placeholder={"Username"} name="username"
                    value={state.username} onChange={handleChange}/>

                <input placeholder={"First Name"} name="first_name"
                    value={state.first_name} onChange={handleChange}/>

                <input placeholder={"Last Name"} name="last_name"
                    value={state.last_name} onChange={handleChange}/>

                <input placeholder={"Location"} name="location"
                    value={state.location} onChange={handleChange}/>
            
                <input placeholder={"Password"} name="password"
                    value={state.password} onChange={handleChange}/>

                <input placeholder={"Password repeat"} name="password_repeat"
                    value={state.password_repeat} onChange={handleChange}/>
            
                <button type="submit" content="Finish registration"/>
              
            </form>
        </div>
    )
}

export default connect()(VerificationForm);