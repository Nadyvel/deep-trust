export const verificationAction = props => async (dispatch, getState) => {
    const myHeaders = new Headers({
        'content-type': 'application/json',
    });

    const body = {
        email: props.email,
        code: props.validation_code,
        username: props.username,
        password: props.password,
        password_repeat: props.password_repeat,
    }

    const config = {
        method: 'PATCH',
        headers: myHeaders,
        body: JSON.stringify(body)
    };

    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/auth/registration/validation/ ', config);
    //const data = await response.json();
    //console.log('verification fetch', data)
    return response
}