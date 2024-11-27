/*import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

export default store*/

// import createstore
import { createStore, applyMiddleware, compose } from "redux";
// import rootReducers
import rootReducer from "../Reducers";
import { thunk } from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// export
export default store;
