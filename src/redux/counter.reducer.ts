import { countActions, INCREMENT, DECREMENT } from "./counter.actions"
interface initialState {
    count: number
}

const initialState: initialState = {
    count: 0
}

export const countReducer = (state = initialState, action: countActions): initialState => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
           if (state.count > 0) {
                return {
                    ...state,
                    count: state.count - 1
                   
                }
               
            }
            return state
        default:
            return state
    }
}