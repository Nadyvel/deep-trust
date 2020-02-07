const initialState = {
    psychologists: [],
    myProfile: {},
    favPsychologists: [],
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
         
        case 'LIKE_PSYCHOLOGIST':
            let copyFavs = [ ...state.favPsychologists]
            const item = copyFavs.find(item => item.id === action.payload.id);

            if (item) {
                const indexDislike = copyFavs.indexOf(item)
                let newLiked = copyFavs.splice(indexDislike, 1)
                return {
                    ...state,
                    favPsychologists: copyFavs   
                }
            } else {
                const newFav = [ ...state.favPsychologists, action.payload]
                return {
                    ...state,
                    favPsychologists: newFav
                }
            }          
        default:
            return state;
    }
}

export default psychologistsReducer;
