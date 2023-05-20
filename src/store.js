import {combineReducers} from "redux"
import {legacy_createStore as createStore} from "redux"
import {applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducer"

import { getAllPizzasReducer } from "./reducers/pizzaReducers"
import {composeWithDevTools} from "redux-devtools-extension"
import {registerUserReducer} from "./reducers/userReducer"
import {loginUserReducer} from "./reducers/userReducer"
import { placeOrderReducer } from "./reducers/orderreducer"
import { getUserOrdersReducer } from "./reducers/orderreducer"

const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer :placeOrderReducer,
    getUserOrdersReducer :getUserOrdersReducer
})

const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null
console.log(cartItems)
const initialState = {
    cartReducer: {
    cartItems: cartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store