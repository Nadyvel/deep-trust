const tokenInLocalStorage = localStorage.getItem('access');

const initialState = {
    tokens: {
        access: tokenInLocalStorage ?  tokenInLocalStorage : ""
    },
    authenticated: false
  };

const loginReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            console.log(action);
            const newState = {
                tokens: action.payload,
                authenticated: true
            };
            return {
                ...state,
                ...newState
            };
          
        case 'setAuthenticated':
            return {
                ...state,
                authenticated: action.payload
            };

        default:
            return state;
    }
};

export default loginReducer;