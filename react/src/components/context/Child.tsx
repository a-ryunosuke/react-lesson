import { GrandChild } from "./Grandchild"

export const Child = () => {
    return (
        <div className="p-10 border-2">
            <GrandChild />
        </div>
    )
}