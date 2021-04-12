import { createStore, combineReducers, compose } from 'redux'
import { pizzaPageReducer } from './reducers/pizzaReducer'
import { cartPageReducer } from './reducers/cartReducer'
import { drinksPageReducer } from './reducers/drinksReducer'
import { saucePageReducer } from './reducers/sauceReducer'
import {applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'



// Комбинируем редюсеры
let reducers = combineReducers({
    pizzaPage: pizzaPageReducer,
    cartPage: cartPageReducer,
    drinksPage: drinksPageReducer,
    saucePage: saucePageReducer,
});


// let store = createStore(reducers, applyMiddleware(thunkMiddleware))
// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));



export default store;


// Для доступа к стору с консоли
window.store = store

