import { useAppSelector } from "../../redux/store"
import { countSelector } from "../../redux/selectors"
import { useAppDispatch } from "../../redux/store"
import { decrementAction, incrementAction } from "../../redux/counter.actions"




export const Counter = () => {
    const {count} = useAppSelector(countSelector)
    const dispatch = useAppDispatch()

const onDecrement = () => {
    dispatch( decrementAction ) 
}

const onIncrement = () => {
    dispatch( incrementAction )
}
    return (
        <div className="counter">
            <h1>Counter</h1>
            <button onClick = {onDecrement} >-</button>
            <span>count is {count}</span>
            <button onClick = {onIncrement}>+</button>
        </div>
    )
}