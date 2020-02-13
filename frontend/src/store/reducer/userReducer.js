const initialState={
    userProfile:{ favourite_psychologist: []},
    favoritePsychologist: [],
    myBookings: [{
        "id": null,
        "email": null,
        "username": null,
        "is_user": null,
    }],
    bookedDates: [],
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'STORE_USER_PROFILE':{
            return {
                ...state,
                userProfile: action.payload, //userProfile = object that we sent through payload
            };
        }
        case 'FAVORITE_PSYCHOLOGIST':{
            return {
                ...state,
                favoritePsychologist: action.payload, //userProfile = object that we sent through payload
            };
        }
        case 'UPDATE_USER_PROFILE':{
            return{
                ...state,
                userProfile: action.payload,
            };
        }
        case 'GET_MY_BOOKINGS': {
            return {
                ...state,
                myBookings: action.payload,
            };
        }
        case 'GET_BOOKED_DATES': {
            return {
                ...state,
                bookedDates: action.payload
            };
        }
        case 'POST_NEW_BOOKING': {
            return {
                ...state
            };
        }
        default:
            return state;
    }
};

export default userReducer;