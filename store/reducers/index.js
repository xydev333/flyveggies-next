import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './cartReducer';
import authStatusReducer from './authStatusReducer';
import blogReducer from './blogReducer';

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
  },
  blogReducer: {
    blogs: []
  }
}

const rootReducer = combineReducers({
  cartReducer,
  authStatusReducer,
  blogReducer
})

export const initStore = (initialState = initState) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}