import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const PsychologistSetting = (props) => {
    return (
        <h1> SETTING </h1>
    )
}

const mapStateToProps = (state, props) => {
    return{
        myProfile: state.psychologistsReducer.myProfile
    }
}

export default connect(mapStateToProps)(withRouter(PsychologistSetting))