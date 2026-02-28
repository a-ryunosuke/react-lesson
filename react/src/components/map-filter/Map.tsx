import type { ContextType } from "../type"

type Props = {
    contextArray: ContextType
}

export const Map = ({contextArray}: Props) => {
    return (
        <div>
            {contextArray.map((item, index) => {
                return <li key={index}>{item.name} {item.number}</li>
            })}
        </div>
    )
}