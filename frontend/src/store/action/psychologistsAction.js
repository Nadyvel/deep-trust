export const psychologistsAction = () => async (dispatch, getState) => {

    const myHeaders = new Headers({});
    const config = {
        method: 'GET',
        headers: myHeaders,
    };
    
    const response = await fetch('https://deep-trust.propulsion-learn.ch/api/psychologists/ ', config);
    const data = await response.json();
    const action = {
        type: 'PSYCHOLOGISTS_LIST',
        payload: data,
    }
    dispatch(action) 
};

export const PsychologistProfileAction = () => async (dispatch, getState) => {
    const headers = new Headers({})
    const config = {
        method: 'GET',
        headers: headers
    }

    const response = await fetch('')
}


