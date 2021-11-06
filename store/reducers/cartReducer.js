import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { firebase } from '../../firebase';
const db = firebase.firestore();
const dbOrderRef = db.collection('products');
import cookie from 'js-cookie';

import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY, 
    ADD_SHIPPING,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_PRODUCTS,
    USRER_LOGIN,
    CHECK_USRER_LOGIN,
    USRER_LOGOUT
} from '../actions/action-types/cart-actions'

const token = '76483461103103918uhkjdkjc';

const initState = {
    products: [],
    addedItems:[],
    total: 0,
    shipping: 0,
    login: false
}

const cartReducer = (state = initState, action) => {

    // User Logout
    if (action.type === USRER_LOGOUT){
        cookie.remove('_livani_token_')
        return{
            ...state,
            login: false
        }
    }

    // Check if user login
    if (action.type === CHECK_USRER_LOGIN){
        const getToken = cookie.get('_livani_token_')

        if (getToken == token){
            return{
                ...state,
                login: true
            }
        } else {
            return{
                ...state,
                login: false
            }
        }
    }

    // User Login
    if(action.type === USRER_LOGIN){
        cookie.set('_livani_token_', token);

        const getToken = cookie.get('_livani_token_')

        // console.log('token', getToken)

        if (getToken == token){
            return{
                ...state,
                login: true
            }
        } else {
            return{
                ...state,
                login: false
            }
        }
        
    }

    if(action.type === ADD_PRODUCTS){
        let productsArray = [];
        dbOrderRef.get()
        .then(res => {
            res.forEach(doc => {
                let productsObj = doc.data();
                productsObj.id = doc.id;
                productsArray.push(productsObj)
            });
        });

        // console.log('www', productsArray)
        
        return{
            ...state,
            products: productsArray
        }
    }
   
    if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += 1 
            return {
                ...state,
                total: state.total + addedItem.newPrice 
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.newPrice 
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === ADD_QUANTITY_WITH_NUMBER){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.newPrice * action.qty
            }
        } else {
            addedItem.quantity = action.qty;
            //calculating the total
            let newTotal = state.total + addedItem.newPrice * action.qty
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.newPrice * itemToRemove.quantity );

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.newPrice
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === SUB_QUANTITY){  
        let addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.newPrice
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.newPrice
            return {
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === ADD_SHIPPING){
        return {
            ...state,
            shipping: state.shipping += 30
        }
    }

    if(action.type === 'SUB_SHIPPING'){
        return {
            ...state,
            shipping: state.shipping -= 30
        }
    }

    if(action.type === RESET_CART){
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0
        }
    }
    
    else {
        return state
    }
}

export const initStore = (initialState = initState) => {
    return createStore(
        cartReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}