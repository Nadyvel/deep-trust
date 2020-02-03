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
    let [showMessage, setShowMessage] = useState(false);

    const handleChange = e =>
        setState({...state, [e.target.name]: e.target.value});
        
    const handleRegistration = async e => {
        e.preventDefault();
        const response = await props.dispatch(doctorRegistrationAction(state));
        if (Number(response.status) === 200) {
            props.history.push("/message");
        }
        if (Number(response.status) === 400) {
            setShowMessage("The Email is not been found")
        }
    }
    return (
        <div className="mainUserContainer">
            
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

                <div className="erroeMessage">
                    <p>{showMessage}</p>
                </div>

                <button className='buttonUserRegistration'>Submit</button>
            </form>
        </div>
    )
}

export default withRouter(connect()(DoctorRegistration))