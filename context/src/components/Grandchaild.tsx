import { useContext } from "react"
import { MyContext } from "../App"

export const GrandChaild = () => {
    const value = useContext(MyContext)
    return (
        <div>{value}</div>
    )
}