export const loginAction = (emailValue) => async (dispatch, getState) => {

    const myHeaders = new Headers({
        'content-type': 'application/json',
    });

    const config = {
        method: 'GET',
        headers: myHeaders,
    };
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${emailValue}`, config);
    const data = await response.json();

    if (data.length === 0) {
        const action = {
            type: 'LOGIN_USER',
            payload: new Error('Login failed'),
        }
        dispatch(action)
        
    } else {
        const action = {
            type: 'LOGIN_USER',
            payload: data[0],
        }
        dispatch(action)
    };  
};