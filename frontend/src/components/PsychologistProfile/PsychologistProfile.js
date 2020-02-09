import React, { useEffect } from 'react'
import './PsychologistProfile.scss'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch, withRouter} from "react-router-dom";
import { PsychologistProfileAction } from '../../store/action/psychologistsAction'

import logo from '../images/wcs-umbrella-icon-grey.png'

import PsychologistMenuNav from './PsychologistMenuNav/PsychologistMenuNav'
import PsychologistInformation from './PsychologistInformation/PsychologistInformation'
import PsychologistSetting from './PsychologistSetting/PsychologistSetting'


const PsychologistProfile = (props) => {
    useEffect(() => {
        props.dispatch(PsychologistProfileAction())
    },[])

    return (
        <div className='psychologist-profile-component'>

            <div className='psychologist-menu-nav-container'>
                <PsychologistMenuNav />
            </div>

            <div className='psychologist-menu-content-container'>
                <h1> CONTAINER </h1>
                <Route exact path='/psychologist/my/update' component={PsychologistSetting} />
            </div>

            <div className='psychologist-information-container'>
                <PsychologistInformation />
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        authenticated: state.loginReducer.authenticated,
        tokens: state.loginReducer.tokens,
        myProfile: state.psychologistsReducer.myProfile
    }
}
export default connect(mapStateToProps)(withRouter(PsychologistProfile))