export const userAction = () => async (dispatch, getState) => {

    const token = getState().loginReducer.tokens.access;

    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });
    const config = {
        method: 'GET',
        headers: myHeaders,
    };

    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/me/ ', config);
    const data = await response.json();

    const action = {
        type: 'STORE_USER_PROFILE',
        payload: data,
    };
    dispatch(action);
    
    return response;
};


export const favoritePsychologistAction = (id) => async (dispatch, getState) => {

    const token = getState().loginReducer.tokens.access;

    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });
    const config = {
        method: 'GET',
        headers: myHeaders,
    };

    const response = await fetch(`https://deep-trust.propulsion-learn.ch/api/psychologists/my/favourites/` , config);
    const data = await response.json();

    const action = {
        type: 'FAVORITE_PSYCHOLOGIST',
        payload: data,
    };
    dispatch(action);
};

export const userUpdateProfile = (updateUserData) => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;

    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });
    const config = {
        method: 'PATCH',
        headers: myHeaders,
        body: JSON.stringify(updateUserData)
    };

    const response = await fetch(`https://deep-trust.propulsion-learn.ch/api/me/` , config);
    if (response.status !== 200) {
        throw new Error('Wrong request');
    };
    const data = await response.json();
    const action = {
        type: 'UPDATE_USER_PROFILE',
        payload: data,
    };
    dispatch(action);
    return data;
};

export const UserMyBookings = () => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;
    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    })

    const config = {
        method: 'GET',
        headers: myHeaders
    }

    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/booking/mybookings/', config)
    const data = await response.json()

    const action = {
        type: 'GET_MY_BOOKINGS',
        payload: data
    }
    dispatch(action)
}


export const GetBookedDatesOfPSychologist = (doctor_id) => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;
    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    })

    const config = {
        method: 'GET',
        headers: myHeaders
    }

    const response = await fetch(`https://deep-trust.propulsion-learn.ch/api/booking/retrieve/?psychologist=${doctor_id}`, config)
    const data = await response.json()

    const action = {
        type: 'GET_BOOKED_DATES',
        payload: data
    }
    dispatch(action)
}