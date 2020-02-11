import {connect} from "react-redux";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import React from "react";
import './UserCard.css';
import logo from "../../images/wcs-umbrella-icon-grey.png";
import UserProfile from "../UserProfile";
import UserFavouritePsychologistList from "../UserFavoritePsychologistList/UserFavouritePsychologistList";
import UserSettings from "../UserSettings/UserSetting";
import BookingCalendar from "../UserFavoritePsychologistList/BookingCalendar/BookingCalendar";

const UserCard = (props) => {
    console.log('USER CARD', props);

    const PathName=props.location.pathname;
    return (
        <div className='user-card-component'>
            <div className='user-image-and-description-container'>
                <div className='user-image-container'>
                    {props.location.pathname.includes('settings') && <button className='updateImageDoctor'>UPDATE IMAGE</button>}
                    <img src={props.userProfile.image} className='user-image' alt='user-image'/>
                </div>
                <div className='user-description'><h2>{props.userProfile.username}'s Profile</h2> {props.userProfile.description}</div>
            </div>

            <div className='information-render-container' id="main">
                <Route exact path='/userprofile/psychologists-list' component={UserFavouritePsychologistList}/>
                <Route exact path='/userprofile/settings' component={UserSettings}/>
                <Route path='/userprofile/psychologist' component={BookingCalendar}/>
            </div>

            <div className='user-menu-container'>
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='user-profile-logo'/>
                </div>
                <div className='menu-items'>
                    <div className={PathName.includes('home')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/`} style={{textDecoration: 'none',}}>
                            <h2 className='user-page-links'>Home</h2>
                        </Link></div>
                    <div className={PathName.includes('bookings')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/userprofile/bookings`} style={{textDecoration: 'none',}}>
                            <h2 className='user-page-links'>My Bookings</h2>
                        </Link></div>
                    <div className={PathName.includes('psychologists-list')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/userprofile/psychologists-list`} style={{textDecoration: 'none',}}>
                            <h2 className='user-page-links'>My Favourites</h2>
                        </Link></div>
                    <div className={PathName.includes('update')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/userprofile/settings`} style={{textDecoration: 'none',}}>
                            <h2 className='user-page-links'>Settings</h2>
                        </Link></div>
                </div>
                <div className='sos-link-container'>
                    <div className={PathName.includes('sos')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/sos`} style={{textDecoration: 'none',}} >
                            <h2 className='user-sos-link'>SOS</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userProfile: state.userReducer.userProfile,
    };
};


export default connect(mapStateToProps)(withRouter(UserCard));