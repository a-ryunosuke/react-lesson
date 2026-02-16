import { useContext } from "react"
import { MyContext } from "../../App"

export const GrandChild = () => {
    const value = useContext(MyContext)
    return (
        <div>{value}</div>
    )
}