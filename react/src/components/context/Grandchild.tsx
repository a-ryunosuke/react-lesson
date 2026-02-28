import { useContext } from "react"
import { MyContext } from "../../App"

export const GrandChild = () => {
    const value = useContext(MyContext)
    return (
        <div className="p-10 border-2">
            {value?.map((item, index) => {
                return <li key={index}>{item.name} - {item.number}</li>
            })}
        </div>
    )
}