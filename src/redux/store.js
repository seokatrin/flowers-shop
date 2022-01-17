import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { flowers } from "./flowers"; 
import { shoppingCart } from "./shoppingCart";

const rootReducer = combineReducers({
    flowers,
    shoppingCart
  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
))

window.store = store