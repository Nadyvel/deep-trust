// const tokenInLocalStorage = localStorage.getItem('access');

const initialState = {
    user_data: null,
    
    // {
    //     access: tokenInLocalStorage ?  tokenInLocalStorage : ""
    // }
  };

const loginReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            // localStorage.setItem(action.payload.id);
            return {
                ...state,
                user_data: action.payload
            } 

        default:
            return state;
    }
}

export default loginReducer;