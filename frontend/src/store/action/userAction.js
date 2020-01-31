export const userAction = () => async (dispatch, getState) => {

    const myHeaders = new Headers({});
    const config = {
        method: 'GET',
        headers: myHeaders,
    };

    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/me/ ', config);
    const data = await response.json();
    const action = {
        type: 'STORE_USER_PROFILE',
        payload: data,
    }
    console.log('USEEEER', data)
    dispatch(action)
};


