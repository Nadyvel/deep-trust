import React, {useEffect} from "react";
import {userAction} from "../../store/action/userAction";
import {withRouter} from "react-router-dom";
import {connect }from "react-redux";

const UserProfile = (props) => {

    console.log('user profile', props)
    useEffect(() => {
        props.dispatch(userAction())
    }, []);

    return (
        <div className='user-profile-component'>
            <p>{props.userProfile.first_name}</p>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        tokens: state.loginReducer.tokens,
        userProfile: state.userReducer.userProfile,
    }
}

export default withRouter(connect(mapStateToProps)(UserProfile))
