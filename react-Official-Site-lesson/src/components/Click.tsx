import { useState } from "react"

export const Click = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>ボタンアクション</h2>
            <button onClick={() => alert("ボタンがクリックされました")}>クリック</button>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>count+1</button>
            <button onClick={() =>  setCount(count - 1)}>count-1</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
}