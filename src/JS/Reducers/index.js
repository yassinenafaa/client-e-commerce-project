import { combineReducers } from "redux"
import userReducer from "./user"
import productReducer from "./product"

const rootReducer = combineReducers({ userReducer, productReducer })

export default rootReducer 
