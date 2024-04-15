export const DECREMENT = 'DECREMENT'
export const INCREMENT = 'INCREMENT'

interface DecrementAction {
    type: typeof DECREMENT
}

interface IncrementAction {
    type: typeof INCREMENT
}
export const decrementAction: DecrementAction = {
        type: DECREMENT
    }

export const incrementAction: IncrementAction = {
   
        type: INCREMENT
    
}

export type countActions = DecrementAction | IncrementAction