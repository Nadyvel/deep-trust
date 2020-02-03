import React, {useEffect} from "react";
import {userAction} from "../../store/action/userAction";
import {Route, withRouter} from "react-router-dom";
import {connect }from "react-redux";
import UserCard from "./UserCard/UserCard";
import UserSettings from "./UserSettings/UserSetting";

const UserProfile = (props) => {

    console.log('user profile', props)
    useEffect(() => {
        props.dispatch(userAction())
    }, []);

    return (
        <>
        <div className='user-profile-component'>
            <UserCard userCard={props.userProfile}/>
            <Route exact path='/userprofile/update' component={UserSettings}/>
        </div>
            </>
    )
}
const mapStateToProps = state => {
    return {
        tokens: state.loginReducer.tokens,
        userProfile: state.userReducer.userProfile,
    }
}

export default withRouter(connect(mapStateToProps)(UserProfile))
