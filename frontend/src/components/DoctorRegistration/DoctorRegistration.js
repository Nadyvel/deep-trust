import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {doctorRegistrationAction} from '../../store/action/registrationAction';
import './DoctorRegistration.css' 

const DoctorRegistration = props => {
    let [state, setState] = useState({
        email: '',
        first_name: '',
        last_name: '',
    });

    const handleChange = e =>
        setState({...state, [e.target.name]: e.target.value});
        
    const handleRegistration = async e => {
        e.preventDefault();
        const response = await props.dispatch(doctorRegistrationAction(state));
        if (Number(response.status) === 200) {
            //display pop up message
            props.history.push("/message");
            console.log('doctor is registered')
        }
    }
    return (
        <div className="signup__container">
            
            <div>
                <h5>DCOTOR REGISTRATION PAGE</h5>
            
            </div>
            <form onSubmit={handleRegistration}>
                <input className='registrationInput' placeholder={'E-Mail address'} name='email' value={state.email}
                onChange={handleChange}/>
                <input className='registrationInput' placeholder={'First Name'} name='first_name' value={state.first_name}
                onChange={handleChange}/>
                <input className='registrationInput' placeholder={'Last Name'} name='last_name' value={state.last_name}
                onChange={handleChange}/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default withRouter(connect()(DoctorRegistration))