import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {registrationAction} from '../../store/action/registrationAction';
import './Registration.css' 

const Registration = props => {
    let [state, setState] = useState({
        email: '',
    });

    const handleChange = e =>
        setState({...state, [e.target.name]: e.target.value});
        
    const handleRegistration = async e => {
        e.preventDefault();
        const response = await props.dispatch(registrationAction(state.email));
        if (Number(response.status) === 200) {
            //display pop up message
            props.history.push("/message");
        }
    }
    
    return (
        <div className="mainUserContainer">
            
            <div className='titleContainer'>
               
                <h5>USER REGISTRATION PAGE</h5>
            </div>
            <div className='inputContainer'>
                <form onSubmit={handleRegistration}>

                    <input className='registrationInput' placeholder={'E-Mail address'} name='email' value={state.email}
                    onChange={handleChange}/>
                    <button className='buttonUserRegistration'>Submit</button>
                </form>
               
            </div>
        </div>
    )
}

export default withRouter(connect()(Registration))