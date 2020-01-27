import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {registrationAction} from '../../store/action/registrationAction';


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
            props.history.push("/verification");
            console.log('im registered')
        }
    }
    return (
        <div>
            <div>
                <h5>REGISTRATION PAGE</h5>
            
            </div>
            <form onSubmit={handleRegistration}>
                <input type='submit' placeholder={'E-Mail address'} name='email' value={state.email}
                onChange={handleChange}/>
                <button content='Register'/>
            </form>
        </div>
    )
}

export default withRouter(connect()(Registration))