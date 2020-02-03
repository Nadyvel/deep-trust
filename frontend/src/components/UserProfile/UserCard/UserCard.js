import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import React from "react";

const UserCard = (props) => {
    console.log('USER CARD', props)

    const PathName=props.location.pathname
    return (
        <div className='user-card-component'>
            <div className='user-image'>Image</div>
             <div className='user-profile-card'>
             <div className='username-profile-title'>{props.userProfile.username}'s Profile</div>

            <div className={PathName.includes('home')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                <Link to={`/`} className='user-page-links-home'>
                        <h2>Home</h2>
                </Link></div>
            <div className={PathName.includes('calendar')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                <Link to={`/users/${props.match.params.id}/calendar`} className='user-page-links-calendar'>
                        <h2>Calendar</h2>
                </Link></div>
            <div className={PathName.includes('psychologists')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                <Link to={`/users/${props.match.params.id}/psychologists`} className='user-page-links-psychologists'>
                        <h2>My Psychologists</h2>
                </Link></div>
            <div className={PathName.includes('edit-profile')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                <Link to={`/users/${props.match.params.id}/edit-profile`} className='user-page-links-edit-profile'>
                        <h2>Settings</h2>
                </Link></div>
             <div className={PathName.includes('sos')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                <Link to={`/sos`} className='user-page-links-sos'>
                        <h2>SOS</h2>
                </Link></div>
                </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userProfile: state.userReducer.userProfile,
    }
}


export default connect(mapStateToProps)(withRouter(UserCard));