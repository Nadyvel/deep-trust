import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './UserSettings.css';
import {withRouter} from 'react-router-dom';

const UserSettings = (props) => {
    console.log('user settings', props)
    if(props.userProfile.email){
        return (
        <div className='user-settings'>
            <div className='user-settings-image-styling'><div className='bold'>Image</div>{props.userProfile.image}
            </div>
            <div className='user-settings-title'>{props.userProfile.username}'s Profile
            </div>
            <div className='user-settings-styling'><div className='bold'>Email</div>{props.userProfile.email}
            </div>
            <div className='user-settings-styling'><div className='bold'>Username</div>{props.userProfile.username}
            </div>
            <div className='user-settings-styling'><div className='bold'>First name</div> {props.userProfile.first_name}
            </div>
            <div className='user-settings-styling'><div className='bold'>Last name</div> {props.userProfile.last_name}
            </div>
            <div className='user-settings-styling'><div className='bold'>Location</div> {props.userProfile.location}
            </div>
            <div className='user-settings-styling'><div className='bold'>Description</div> {props.userProfile.description}
            </div>
        </div>)
}
    else
        return(<div className='loading'>Loading</div>)
}

const mapStateToProps = state => {
    return {
        userProfile: state.userReducer.userProfile,
    }
}

export default connect(mapStateToProps)(withRouter(UserSettings));
