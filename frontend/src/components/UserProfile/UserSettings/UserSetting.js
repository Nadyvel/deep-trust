import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './UserSettings.css';
import {withRouter} from 'react-router-dom';
import {loginAction} from "../../../store/action/loginAction";
import {setModal} from "../../../store/action/modalAction";
import {userAction} from "../../../store/action/userAction";

const UserSettings = (props) => {
    let [state, setState] = useState({
      image:'',
      email: '',
      username:'',
      password: '',
      location:'',
      description:'',
    });
    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });

    const handleUpdate = async e => {
        e.preventDefault();
        const response = await props.dispatch(userAction(state));
    };


    if(props.userProfile.email){
        return (
        <div className='user-settings'>
            <div className='user-settings-title'>
                <h1 className='profile-update-title'>Update your profile</h1>
            </div>

            <form className='update-form' onSubmit={handleUpdate}>
                {/* <input className='update-input' name='image'
                    value={props.userProfile.image} onChange={handleChange}/> */}

                <input className='update-input' name="email"
                    value={props.userProfile.email} onChange={handleChange}/>

                <input className='update-input' name="username"
                    value={props.userProfile.username} onChange={handleChange}/>

                <input className='update-input' name="first_name"
                    value={props.userProfile.first_name} onChange={handleChange}/>

                <input className='update-input' name="last_name"
                    value={props.userProfile.last_name} onChange={handleChange}/>

                {/* <input className='update-input' name="password"
                    value={props.userProfile.password} onChange={handleChange} /> */}

                <input className='update-input'  name="location"
                    value={props.userProfile.location} onChange={handleChange} />

                <input className='update-input'  name="description"
                    value={props.userProfile.description} onChange={handleChange} />

                <button className='save-button' type="submit" content="Save">Save</button>

            </form>
        </div>
        );
}
    else
        return(<div className='loading'>Loading</div>);
};

const mapStateToProps = state => {
    return {
        userProfile: state.userReducer.userProfile,
    };
};

export default connect(mapStateToProps)(withRouter(UserSettings));
