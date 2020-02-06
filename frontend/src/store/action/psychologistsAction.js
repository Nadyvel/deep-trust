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
    }
    dispatch(action) 
    console.log('psycholog', data)
};

export const PsychologistProfileAction = () => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;

    const myHeaders = new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: 'GET',
        headers: myHeaders
    }

    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/psychologists/my/profile/', config)
    const data = await response.json()
    const action = {
        type: 'GET_MY_PROFILE',
        payload: data,
    }
    dispatch(action)
}

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

    const response = await fetch(`https://deep-trust.propulsion-learn.ch/api/psychologists/favourite/${doctor}`, config);
    const data = await response.json();
    
    const action = {
        type: 'LIKE_PSYCHOLOGIST',
        payload: data,
    }
    dispatch(action)
    console.log('user id', data)
}

