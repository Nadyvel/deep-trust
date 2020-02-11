const initialState = {
    patientCards: [],
    psychologists: [],
    favPsychologists: [],
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
            };  
        
        case 'GET_MY_PROFILE':
            return {
                ...state,
                myProfile: action.payload
            };
         
        case 'LIKE_PSYCHOLOGIST':
            let copyFavs = [ ...state.favPsychologists];
            const item = copyFavs.find(item => item.id === action.payload.id);

            if (item) {
                const indexDislike = copyFavs.indexOf(item);
                let newLiked = copyFavs.splice(indexDislike, 1);
                return {
                    ...state,
                    favPsychologists: copyFavs   
                };
            } else {
                const newFav = [ ...state.favPsychologists, action.payload];
                return {
                    ...state,
                    favPsychologists: newFav
                };
            }   
            
        case 'GET_PATIENT_CARD':
            return {
                ...state,
                patientCards: action.payload
            };

        case 'UPDATE_PSYCHOLOGIST_PROFILE':
            let psychologists = action.payload;
            const doctorUpdateData = {psychologists};
           
            return {
                ...state,
                myProfile: doctorUpdateData
            };

        default:
            return state;
    }
};


export default psychologistsReducer;
