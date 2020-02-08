const initialState = {
    patientCards: [],
    psychologists: [],
    myProfile: {
        psychologists: {
            "first_name": null,
            "last_name": null,
            "country": null,
            "city": null,
            "zip": null,
            "working_hours": null,
            "price_per_hour": null,
            "modified": null,
            "image": null,
            "timestamp": null,
            "description": null,
            "user": null
        }
    },
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

        case 'GET_PATIENT_CARD':
            return {
                ...state,
                patientCards: action.payload
            }
            
        default:
            return state;
    }
}
export default psychologistsReducer;