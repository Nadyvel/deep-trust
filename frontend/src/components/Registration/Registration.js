import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {registrationAction} from '../../store/action/registrationAction';
import './Registration.css' 


const Registration = props => {
    let [state, setState] = useState({
        email: '',
    });
    let [showMessage, setShowMessage] = useState(false);

    const handleChange = e =>
        setState({...state, [e.target.name]: e.target.value});
        
    const handleRegistration = async e => {
        e.preventDefault();
        const response = await props.dispatch(registrationAction(state.email));
        if (Number(response.status) === 200) {
            console.log("from registration", response)
            props.history.push("/message");
        }
        if (Number(response.status) === 400) {
            console.log("from registration", response)
            setShowMessage("This Email already exist")
        }
    } 
    
 
    return (
        <div className="mainUserContainer">
            
            <div className='titleContainer'>
               
                <h5>USER REGISTRATION PAGE</h5>
            </div>
            <div className='inputContainer'>
                <form onSubmit={handleRegistration}>

                    <input type='email' className='registrationInput' placeholder={'E-Mail address'} name='email' value={state.email}
                    onChange={handleChange}/>

                    <div className="erroeMessage">
                        <p>{showMessage}</p>
                    </div>

                    <button className='buttonUserRegistration'>Submit</button>
                </form>
               
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        //user_data: state.loginReducer.user_data,
    }
}

export default withRouter(connect(mapStateToProps)(Registration))