import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import React from "react";
import './UserCard.css';
import logo from "../../images/wcs-umbrella-icon-grey.png"

const UserCard = (props) => {
    console.log('USER CARD', props)

    const PathName=props.location.pathname
    return (
        <div className='user-card-component'>
            <div className='user-image-and-description-container'>
                <div className='user-image-container'>
                    <img src={props.userProfile.image} className='user-image' alt='user-image'/>
                </div>
                <div className='user-description'><h2>{props.userProfile.username}'s Profile</h2> {props.userProfile.description}</div>
                {/*<div className='username-title'>{props.userProfile.username}'s Profile</div>*/}
                {/*<div className='user-description'>{props.userProfile.description}</div>*/}
            </div>

            <div className='information-render-container'>
                <h1>Some stuff will be rendered here</h1>
                <p>BLABLABLABLABLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </p>

            </div>

            <div className='user-menu-container'>
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='user-profile-logo'/>
                </div>
                <div className='menu-items'>
                    <div className={PathName.includes('home')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/`} className='user-page-links-home'>
                            <h2>Home</h2>
                        </Link></div>
                    <div className={PathName.includes('calendar')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/userprofile/bookings`} className='user-page-links-calendar'>
                            <h2>My Bookings</h2>
                        </Link></div>
                    <div className={PathName.includes('psychologists-list')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/userprofile/psychologists-list`} className='user-page-links-psychologists'>
                            <h2>My Favourites</h2>
                        </Link></div>
                    <div className={PathName.includes('edit-profile')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/userprofile/update`} className='user-page-links-settings'>
                            <h2>Settings</h2>
                        </Link></div>
                    <div className={PathName.includes('sos')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/sos`} className='user-page-links-sos'>
                            <h2>SOS</h2>
                        </Link></div>
                </div>
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