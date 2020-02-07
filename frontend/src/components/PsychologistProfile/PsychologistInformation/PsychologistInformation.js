import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


const PsychologistInformation = (props) => {
    console.log('props', props)
    
    const image = props.myProfile.map((profile, index) => {
        return profile.image
    })

    const first_name = props.myProfile.map((profile, index) => {
        return profile.first_name
    })

    const last_name = props.myProfile.map((profile, index) => {
        return profile.last_name
    })

    const description = props.myProfile.map((profile, index) => {
        return profile.description
    })

    return (
        <>
        <div className='user-image-container'>
            <img src={image} className='psych-image' alt='pschologist-image'/>
        </div>
        <div className='psych-description'>
             <h2>{first_name} {last_name}'s Profile</h2> 
             {description}
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