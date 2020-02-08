import React from 'react'
import {Link, withRouter} from "react-router-dom";

import logo from '../../images/wcs-umbrella-icon-grey.png'

const PsychologistMenuNav = (props) => {

    const PathName=props.location.pathname
    return (
        <>
        <div className='logo-container'>
            <img src={logo} alt='logo' className='user-profile-logo'/>
        </div>

        <div className="menu-nav-items">
            <div className={PathName.includes('home')? 'psychologist-menu-profile-button-clicked': 'psychologist-menu-profile-button-unclicked'}>
                <Link to={`/`} style={{textDecoration: 'none',}}>
                    <h2 className='psychologist-page-links'>Home</h2>
                </Link>
            </div>

            <div className={PathName.includes('bookings')? 'psychologist-menu-profile-button-clicked': 'psychologist-menu-profile-button-unclicked'}>
                <Link to={`/psychologist/my/appointments`} style={{textDecoration: 'none',}}>
                    <h2 className='psychologist-page-links'>My Appointments</h2>
                </Link>
            </div>

            <div className={PathName.includes('update')? 'psychologist-menu-profile-button-clicked': 'psychologist-menu-profile-button-unclicked'}>
                <Link to={'/psychologist/my/update'} style={{textDecoration: 'none',}}>
                    <h2 className='psychologist-page-links'>Settings</h2>
                </Link>
            </div>
        </div>

        <div className='sos-link-container'>
            <div className={PathName.includes('sos')? 'psychologist-menu-profile-button-clicked': 'psychologist-menu-profile-button-unclicked'}>
                <Link to={`/sos`} style={{textDecoration: 'none',}} >
                    <h2 className='psychologist-sos-link'>SOS</h2>
                </Link>
            </div>
        </div>
        </>
    )
}

export default withRouter(PsychologistMenuNav)