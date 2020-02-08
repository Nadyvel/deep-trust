import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


const PsychologistInformation = (props) => {
    return (
        <>
        <div className='user-image-container'>
            <img src={props.myProfile.psychologists.image} className='psych-image' alt='pschologist-image'/>
        </div>
        <div className='psych-description'>
             <h2>{props.myProfile.psychologists.first_name} {props.myProfile.psychologists.last_name}'s Profile</h2> 
             {props.myProfile.psychologists.description}
        </div>
        </>
    )
}

const mapStateToProps = (state, props) => {
    console.log('state: ', state)
    return {
        authenticated: state.loginReducer.authenticated,
        tokens: state.loginReducer.tokens,
        myProfile: state.psychologistsReducer.myProfile
    }
}

export default connect(mapStateToProps)(withRouter(PsychologistInformation))