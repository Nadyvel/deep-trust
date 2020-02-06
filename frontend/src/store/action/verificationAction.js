import getCookie from '../../helper/cookies'

export const verificationAction = props => async (dispatch, getState) => {
    const myHeaders = new Headers({
        'content-type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken'),
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
    
    if (Number(response.status) === 200) {
        return  response
    }

    const data = await response.json();
  
    if (data.code) {
        const message = data.code[0]
        return message
    };

    if (data.non_field_errors) {
        const message = data.non_field_errors[0]
        return message
    };
    
    if (data.email) {
        const message = data.email[0]
        return message
    };

    if (data.username) {
        const message = data.username[0]
        return message
    };
}


