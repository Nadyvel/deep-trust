import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


const PsychologistInformation = (props) => {
    console.log('props', props)
    console.log(props.myProfile.description)
    console.log(props.myProfile.image)

    // const myProfile_data = props.myProfile.map((myProfile, index) => {
    //     return (key={index}
    // })

    return (
        <>
        <div className='user-image-container'>
            <img src={props.myProfile.image} className='psychologist-image' alt='pschologist-image'/>
        </div>
        <div className='user-description'>
             <h2>{props.myProfile.first_name} {props.myProfile.last_name}'s Profile</h2> 
             {props.myProfile.description}
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