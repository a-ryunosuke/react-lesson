import React, { useCallback, useState } from "react"

type Props = {
  onIncrement: () => void
}

const Button = React.memo(({ onIncrement }: Props) => {
  console.log("Buttonがレンダリングされました")
  return <button onClick={onIncrement}>+1</button>
})

export const ReactMemo = () => {
  const [count, setCount] = useState(0)

  // useEffectみたいにcallBack化したいものを囲う
  // [] 依存配列を空にすることで関数の作り直しは起きない
  const handleClick = useCallback(() => {
    // prevで前回の値を参照することで、作り直さなくても動く
    setCount((prev) => prev + 1)
  },[])

  return (
    <div>
      <p>{count}</p>
      <Button onIncrement={handleClick} />
    </div>
  )
}