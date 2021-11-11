import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './cartReducer';
import authStatusReducer from './authStatusReducer';

const initState = {
  cartReducer: {
    products: [],
    addedItems:[],
    total: 0,
    shipping: 0,
    login: false
  },
  authStatusReducer: {
    authStatus: ''
  }
}

const rootReducer = combineReducers({
  cartReducer,
  authStatusReducer
})

export const initStore = (initialState = initState) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}