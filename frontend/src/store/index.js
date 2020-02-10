import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// import persistState from 'redux-localstorage'
 

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('access');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };


const loginState = loadState();

const initialState = {
    loginReducer: loginState
};

// 

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
});

export default store;