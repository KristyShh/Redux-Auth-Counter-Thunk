import { UserActions } from "./user.actions";

interface UserState {
    user: any
    error: string
}
const initialState: UserState = {
    user: '',
    error: ''
 }
export const userReducer =(
    state = initialState,
    action: UserActions
): UserState => {
        switch (action.type) {
            case "FETCH_USER":
                return {
                    ...state,
                    user: action.user
                }
                case "ERROR_FETCH_USER":
                    return {
                        ...state,
                        error: action.error
                    }
            default:
                return state
        }
}