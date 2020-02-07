const initialState = {
    psychologists: [],
    myProfile: {},
    // {
    //     access: tokenInLocalStorage ?  tokenInLocalStorage : ""
    // }
  };

const psychologistsReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'PSYCHOLOGISTS_LIST':
            return {
                ...state,
                psychologists: action.payload
            }  
        
        case 'GET_MY_PROFILE':
            return {
                ...state,
                myProfile: action.payload
            }
            
        default:
            return state;
    }
}

export default psychologistsReducer;