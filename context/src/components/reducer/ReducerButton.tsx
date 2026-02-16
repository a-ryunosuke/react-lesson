import { useReducer } from "react"

const initialState = 0

const reducerFunc = (countState, action) => {
    switch (action) {
        case "+1":
            return countState + 1
        case "+2":
            return countState + 2
        case "-1":
            return countState - 1
        case "-2":
            return countState - 2
        case "*2":
            return countState * 2
        case "reset":
            return initialState
        default:
            return countState
    }
}

export const ReducerButton = () => {
    const [ count, dispatch] = useReducer( reducerFunc, initialState)
    return (
        <div className="p-8 border-2">
            <h2>{count}</h2>
            <div className="">
                <button className="p-4" onClick={() => dispatch("+1")}>+1</button>
                <button className="p-4" onClick={() => dispatch("+2")}>+2</button>
                <button className="p-4" onClick={() => dispatch("-1")}>-1</button>
                <button className="p-4" onClick={() => dispatch("-2")}>-2</button>
                <button className="p-4" onClick={() => dispatch("*2")}>*2</button>
                <button className="p-4" onClick={() => dispatch("reset")}>reset</button>
            </div>
        </div>
    )
}
