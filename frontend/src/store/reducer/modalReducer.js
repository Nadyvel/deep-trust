const initialState = {
  
    RegistrationModal: {
        isVisible: false,
        data: {
            activePage: "prereg"
        }
    },

    LoginModal: {
        isVisible: false,
        data: {
            activePage: "prereg"
        }
    }
    // by dispatching SET_MODAL with a new "namespace", it will be added here automatically
};

 const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MODAL': {
            const { namespace, data, isVisible } = action.payload;
            const newData = data || { ...state[namespace].data }; // copy old data if no new data was provided

            // handling edge case where namespace wasn't existing and no visibility was defined earlier
            const oldIsVisible = state[namespace] ? state[namespace].isVisible : false;

            // prevents an undefined "isVisible" from overwriting the visibility to "false" instead of not changing it
            const newIsVisible = (isVisible === null || isVisible === undefined) ? oldIsVisible : isVisible;

            return { ...state, [namespace]: { isVisible: newIsVisible, data: newData } }
        }
        default:
            return state
    }
};

export default modalReducer