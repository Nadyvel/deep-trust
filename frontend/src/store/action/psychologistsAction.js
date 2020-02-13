export const psychologistsAction = () => async (dispatch, getState) => {

    const myHeaders = new Headers({});
    const config = {
        method: 'GET',
        headers: myHeaders,
    };
    
    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/psychologists/', config);
    const data = await response.json();
    const action = {
        type: 'PSYCHOLOGISTS_LIST',
        payload: data,
    };
    dispatch(action); 
};

export const PsychologistProfileAction = () => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;

    const myHeaders = new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    });
    const config = {
        method: 'GET',
        headers: myHeaders
    };

    const response = await fetch(`https://deep-trust.propulsion-learn.ch/api/psychologists/my/profile/`, config);
    const data = await response.json();
    const action = {
        type: 'GET_MY_PROFILE',
        payload: data,
    };
    dispatch(action);
};

export const LikeDocAction = (doctor) => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;
   
    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });
    const config = {
        method: 'POST',
        headers: myHeaders,
    };

    const response = await fetch(`https://deep-trust.propulsion-learn.ch/api/psychologists/favourite/${doctor}/`, config);
    const data = await response.json();
    
    const action = {
        type: 'LIKE_PSYCHOLOGIST',
        payload: data,
    };
    dispatch(action);
};

export const GetAllPatientCards = () => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;

    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });

    const config = {
        method: 'GET',
        headers: myHeaders,
    };

    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/psychologist/patient_cards/', config);
    const data = await response.json();

    const action = {
        type: 'GET_PATIENT_CARD',
        payload: data,
    };
    dispatch(action);
};

export const psychologistUpdateProfile = (updateData) => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;
    const doctorId = getState().psychologistsReducer.myProfile.psychologists.id;
    
    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });
    const config = {
        method: 'PATCH',
        headers: myHeaders,
        body: JSON.stringify(updateData)
    };

    const response = await fetch(`https://deep-trust.propulsion-learn.ch/api/psychologists/profile/${doctorId}/` , config);
    if (response.status !== 200) {
        throw new Error('Wrong request');
    };
    const data = await response.json();
    console.log('doc update data', data);
    const action = {
        type: 'UPDATE_PSYCHOLOGIST_PROFILE',
        payload: data,
    };
    dispatch(action);
    return data;
};


export const PsychologistMyAppointments = () => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;
    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });

    const config = {
        method: 'GET',
        headers: myHeaders
    };

    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/booking/psychologist/', config);
    const data = await response.json();

    const action = {
        type: 'GET_MY_APPOINTMENTS',
        payload: data
    };
    dispatch(action);
};
