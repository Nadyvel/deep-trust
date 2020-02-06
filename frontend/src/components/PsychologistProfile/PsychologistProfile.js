import React from 'react'
import './PsychologistProfile.scss'
import {Link, Route, Switch, withRouter} from "react-router-dom";

import logo from '../images/wcs-umbrella-icon-grey.png'

import PsychologistMenuNav from './PsychologistMenuNav/PsychologistMenuNav'
import PsychologistInformation from './PsychologistInformation/PsychologistInformation'

const PsychologistProfile = (props) => {

    return (
        <div className='psychologist-profile-component'>

            <div className='psychologist-menu-nav-container'>
                <PsychologistMenuNav />
            </div>

            <div className='psychologist-menu-content-container'>

            </div>

            <div className='psychologist-information-container'>
                <PsychologistInformation />
            </div>
        </div>
    )
}

export default withRouter(PsychologistProfile)