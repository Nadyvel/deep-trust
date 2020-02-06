import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const PsychologistInformation = (props) => {
    console.log('props', props)
    return (
        <div className='user-image-and-description-container'>
                <div className='user-image-container'>
                    {/* <img src={props.userProfile.image} className='user-image' alt='user-image'/> */}
                </div>
            </div>
    )
}

const mapStateToProps = (state, props) => {
    console.log('state: ', state)
    return {
        
    }
}

export default connect(mapStateToProps)(withRouter(PsychologistInformation))