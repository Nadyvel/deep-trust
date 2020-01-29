export const loginAction = (email, password) => async (dispatch, getState) => {
    const myHeaders = new Headers({
        'content-type': 'application/json',
    });

    const body = {
        'email': email,
        'password': password
    }

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    
    const response = await fetch('http://deep-trust.propulsion-learn.ch/api/auth/token/', config);
    const data = await response.json();
    console.log('logging in: ', data)
    const action = {
        type: 'LOGIN_USER',
        payload: data,
    };
    dispatch(action)
};

