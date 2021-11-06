import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_PRODUCTS,
    USRER_LOGIN,
    CHECK_USRER_LOGIN,
    USRER_LOGOUT
} from './action-types/cart-actions'

//CHECK_USRER_LOGIN
export const checkUserLogin = () => {
    return {
        type: CHECK_USRER_LOGIN
    }
}

// USRER_LOGOUT
export const userLogout = () => {
    return {
        type: USRER_LOGOUT
    }
}

// USRER_LOGIN
export const userLogin = () => {
    return {
        type: USRER_LOGIN
    }
}

//add products
export const addProducts = () => {
    return {
        type: ADD_PRODUCTS
    }
}
//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

//add qt action with quantity number
export const addQuantityWithNumber = (id, qty) => {
    return {
        type: ADD_QUANTITY_WITH_NUMBER,
        id,
        qty
    }
}

// Reset cart after form submit
export const resetCart = () => {
    return {
        type: RESET_CART
    }
}
