import {connect} from "react-redux";
import React, {useState, useEffect} from "react";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import './UserCard.css';
import logo from "../../images/wcs-umbrella-icon-grey.png";
import UserProfile from "../UserProfile";
import UserFavouritePsychologistList from "../UserFavoritePsychologistList/UserFavouritePsychologistList";
import UserSettings from "../UserSettings/UserSetting";
import BookingCalendar from "../UserFavoritePsychologistList/BookingCalendar/BookingCalendar";
import MyBookings from '../MyBookings/MyBookings';
import MyBookingDetails from "../MyBookings/MyBookingDetails/MyBookingDetails";
import {setModal} from "../../../store/action/modalAction";
import DeleteUserModal from '../DeleteUserModal/DeleteUserModal';
import Emergency from "../../Emergency/Emergency";

import { FaCamera } from 'react-icons/fa';

const UserCard = (props) => {
    const handleOpen = (namespace) => props.dispatch(setModal(namespace, null, true));

    useEffect(() => {
       
    });

    const onClickLogoHandler = (event) => {
        props.history.push('/')
    }

    const PathName=props.location.pathname;
    return (
        <div className='user-card-component'>
            <div className='user-image-and-description-container'>

                <div className='user-image-container'>
                    {props.location.pathname.includes('settings') && <button className='camaraUpdate'><FaCamera size={20}/></button>}
                    <img src={props.userProfile.image} className='user-image' alt='user-image'/>
                </div>
                <div className='user-description'><h2>{props.userProfile.username}'s Profile</h2> {props.userProfile.description}</div>
                {/*{props.location.pathname.includes('settings') && <button onClick={() => handleOpen("DeleteUserModal")} className='deleteProfile'>DELETE ACCOUNT?</button>}*/}
           
            </div>

            <div className='information-render-container' id="main">

                <div>
                {props.location.pathname === '/userprofile' && 
                    <div className='userprofileMessageContainer'>
                      <div><p className='userprofileMessage'>Life is a beautiful journey.</p></div>
                      <div><p className='userprofileMessage1'>Deep Trust is here to </p></div>
                      <div><p className='userprofileMessage1'>walk you through it.</p></div>
                    </div>}
                <div className='deleteAccount'>
                    {props.location.pathname.includes('settings') && <button onClick={() => handleOpen("DeleteUserModal")} className='save-button'>Delete Account</button>}
                </div>

                </div>

                <Route exact path='/userprofile/psychologists-list' component={UserFavouritePsychologistList}/>
                <Route exact path='/userprofile/settings' component={UserSettings}/>
                <Route path='/userprofile/psychologist' component={BookingCalendar}/>
                <Route exact path='/userprofile/myBookings' component={MyBookings} />
                <Route path='/userprofile/myBookings/details' component={MyBookingDetails} />
                <Route exact path='/userprofile/emergency' component={Emergency}/>
                <DeleteUserModal />
            </div>

            <div className='user-menu-container'>
                <div className='logo-container'>
                    <img onClick={onClickLogoHandler} src={logo} alt='logo' className='user-profile-logo' style={{cursor: 'pointer'}}/>
                </div>
                <div className='menu-items'>
                    <div className={PathName.includes('home')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/`} style={{textDecoration: 'none',}}>
                            <h2 className='user-page-links'>Home</h2>
                        </Link></div>
                    <div className={PathName.includes('bookings')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/userprofile/myBookings`} style={{textDecoration: 'none',}}>
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
                    <div className={PathName.includes('emergency')? 'user-menu-profile-button-clicked': 'user-menu-profile-button-unclicked'}>
                        <Link to={`/userprofile/emergency`} style={{textDecoration: 'none',}} >
                            <h2 className='user-sos-link'>Emergency</h2>
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