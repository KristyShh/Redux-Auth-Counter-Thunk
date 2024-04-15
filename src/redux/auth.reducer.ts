import { AuthActions, LOGIN, LOGOUT, PASSWORD, USER_NAME } from "./auth.actions";
 interface AuthState {
    userName: string
    password: string
    isAuth: boolean
 }
const initialState: AuthState = {
    userName: '',
    password: '',
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }
        case USER_NAME:
            return {
                ...state,
                userName: action.userName
            }
        case PASSWORD:
            return {
                ...state,
                password: action.password
            }
        default:
            return state
    }
}
