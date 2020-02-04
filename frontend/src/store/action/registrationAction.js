export const registrationAction = (email) => async (dispatch, getState) => {
    const myHeaders = new Headers({
        'content-type': 'application/json',
    });

    const body = {
        'email': email,
    }

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };

    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/auth/registration/', config);
    console.log('data', response)
    return response
    
};


export const doctorRegistrationAction = (state) => async (dispatch, getState) => {
    const myHeaders = new Headers({
        'content-type': 'application/json',
    });

    const body = {
        'email': state.email,
        'first_name': state.first_name,
        'last_name': state.last_name,
    }

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };

    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/auth/registration/psychologist/', config);
    return response

};


