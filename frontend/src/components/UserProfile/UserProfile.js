import React, {useEffect} from "react";
import {favoritePsychologistAction, userAction} from "../../store/action/userAction";
import {Route, withRouter} from "react-router-dom";
import {connect }from "react-redux";
import UserCard from "./UserCard/UserCard";
import UserSettings from "./UserSettings/UserSetting";
import UserFavoritePsychologistList from "./UserFavoritePsychologistList/UserFavoritePsychologistList";

const UserProfile = (props) => {

    console.log('user profile', props)
    useEffect(() => {
        props.dispatch(userAction());
        props.dispatch(favoritePsychologistAction());
    }, []);

    return (
        <>
        <div className='user-profile-component'>
            <UserCard userCard={props.userProfile}/>
            <Route exact path='/userprofile/update' component={UserSettings}/>
            <Route exact path='/userprofile/psychologists-list' component={UserFavoritePsychologistList}/>
        </div>
            </>
    )
}
const mapStateToProps = state => {
    return {
        tokens: state.loginReducer.tokens,
        userProfile: state.userReducer.userProfile,
        favoritePsychologist: state.userReducer.favoritePsychologist,
    }
}

export default withRouter(connect(mapStateToProps)(UserProfile))
