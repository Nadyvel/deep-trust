export const psychologistsAction = () => async (dispatch, getState) => {

    const myHeaders = new Headers({});
    const config = {
        method: 'GET',
        headers: myHeaders,
    };
    
    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/psychologists/ ', config);
    const data = await response.json();
    console.log('psychologists list', data)
    const action = {
        type: 'PSYCHOLOGISTS_LIST',
        payload: data,
    }
    //console.log('psychologists list', data)
    dispatch(action) 
};


