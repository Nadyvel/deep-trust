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
    return response
    
};


