const initialState = {
    psychologists: [],
    myProfile: '',
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
            const docLiked = state.psychologists.findIndex((psychologist) => action.payload.id === psychologist.id )
            const newPsychologists = [ ...state.psychologists]
            newPsychologists[docLiked] = action.payload
            return {
                ...state,
                psychologist: newPsychologists
            }    

        default:
            return state;
    }
}

export default psychologistsReducer;