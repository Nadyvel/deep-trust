const initialState={
    userProfile:{}
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'STORE_USER_PROFILE':{
            return {
                ...state,
                userProfile: action.payload, //userProfile = object that we sent through payload
            }
        }
        case 'UPDATE_USER_PROFILE':{
            return{
                ...state,
                userProfile: action.payload,
            }
        }
        default:
            return state
    }
}

export default userReducer;