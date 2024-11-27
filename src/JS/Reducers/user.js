// import 

import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, SUCC_USER } from "../ActionTypes/user"



// initState 
const initState = {
    user: {},
    loadUser: false,
    errors: [],
    isAuth: false,
}


// pure fucntion 

const userReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, loadUser: true }
        case SUCC_USER:
            localStorage.setItem("token", payload.token)
            return { ...state, loadUser: false, user: payload.user, isAuth: true }
        case LOGOUT_USER:
            localStorage.removeItem("token")
            return {
                user: {},
                loadUser: false,
                errors: [],
                isAuth: false,
            }
        case FAIL_USER:
            return { ...state, loadUser: false, errors: payload }
        case CURRENT_USER:
            return { ...state, loadUser: false, user: payload, isAuth: true }

        default:
            return state
    }

}
export default userReducer