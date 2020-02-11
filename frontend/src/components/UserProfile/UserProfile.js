import React, {useEffect} from "react";
import {favoritePsychologistAction, userAction} from "../../store/action/userAction";
import {Route, withRouter} from "react-router-dom";
import {connect }from "react-redux";
import UserCard from "./UserCard/UserCard";
import UserSettings from "./UserSettings/UserSetting";
import UserFavoritePsychologistList from "./UserFavoritePsychologistList/UserFavouritePsychologistList";

const UserProfile = (props) => {

    useEffect(() => {
        props.dispatch(userAction());
        props.dispatch(favoritePsychologistAction());
    }, []);

    return (
        <>
        <div className='user-profile-component'>
            <UserCard userCard={props.userProfile}/>
        </div>
            </>
    );
};
const mapStateToProps = state => {
    return {
        tokens: state.loginReducer.tokens,
        userProfile: state.userReducer.userProfile,
        favoritePsychologist: state.userReducer.favoritePsychologist,
    };
};

export default withRouter(connect(mapStateToProps)(UserProfile));
