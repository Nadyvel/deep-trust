import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const PsychologistSetting = (props) => {
    console.log('setting props', props)
    return (
        <div className="settings_container">
            <div className='user-settings-image-styling'>
                <div className='bold'>Image</div>
                {props.myProfile.psychologists.image}
            </div>
            <div className='user-settings-title'>
                {props.myProfile.username}'s Profile
            </div>
            <div className='user-settings-styling'>
                <div className='bold'>Email</div>
                {props.myProfile.email}
            </div>
            <div className='user-settings-styling'>
                <div className='bold'>Username</div>
                {props.myProfile.username}
            </div>
            <div className='user-settings-styling'>
                <div className='bold'>First name</div>
                {props.myProfile.psychologists.first_name}
            </div>
            <div className='user-settings-styling'>
                <div className='bold'>Last name</div>
                {props.myProfile.psychologists.last_name}
            </div>
            <div className='user-settings-styling'>
                <div className='bold'>Country</div>
                {props.myProfile.psychologists.country}
            </div>
            <div className='user-settings-styling'>
                <div className='bold'>City</div>
                {props.myProfile.psychologists.city}
            </div>
            <div className='user-settings-styling'>
                <div className='bold'>ZIP</div>
                {props.myProfile.psychologists.zip}
            </div>
            <div className='user-settings-styling'>
                <div className='bold'>Description</div>
                {props.myProfile.psychologists.description}
            </div>
            <div className='user-settings-styling'>
                <div className='bold'>Working Hour</div>
                {props.myProfile.psychologists.working_hours}
            </div>
            <div className='user-settings-styling'>
                <div className='bold'>Price per Hour</div>
                {props.myProfile.psychologists.price_per_hour}
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return{
        myProfile: state.psychologistsReducer.myProfile
    }
}

export default connect(mapStateToProps)(withRouter(PsychologistSetting))